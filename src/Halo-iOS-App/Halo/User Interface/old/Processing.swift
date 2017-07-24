//
//  Processing.swift
//  Halo
//
//  Created by Michael Langford on 11/30/16.
//  Copyright © 2016 Rowdy Labs LLC. All rights reserved.
//

import Foundation
//import ReSwift
import HealthKit



struct AppState: StateType {
    var isHealthKitFullyAuthorized: Bool
    var haloViewModels: [DateHashKey: HaloTimeSlice]
    var energyMapViewModels: [DateHashKey: HaloTimeSlice]
    var userModels: [DateHashKey: UserTimeSlice]
    var healthModels: [DateHashKey: HealthTimeSlice]
    var dayViewModels: [DateHashKey:DayViewModel]
}

// MARK: Helper functions and types


typealias StepCount = Int
typealias Meters = Double
typealias HeartRatio = Double
typealias BeatsPerMinute = Double
typealias Minutes = Int
typealias Hours = Int
typealias Centemeters = Double
typealias Kilograms = Double
typealias Gender = HKBiologicalSex
typealias AgeInYears = Int
typealias ActivityScore = Int

let minutesPerDay = 24 * 60
let daysOfHistory = 14
let historyWindowLength = 14

typealias MinuteOffsetIntoDay = Int
typealias HeartRateLookupMinuteTable = Dictionary<MinuteOffsetIntoDay, Dictionary<HRKey, Double>>
typealias SimplifiedHeartRateLookupMinuteTable = Dictionary<MinuteOffsetIntoDay, Double>

extension Collection {
    func lastItems(count: Int) -> [Self.Iterator.Element] {
        let selfCount = self.count as! Int
        if selfCount <= count - 1 {
            return Array(self)
        } else {
            return Array(self.reversed()[0 ... count - 1].reversed())
        }
    }
}

func localTimeString(_ date:Date)->String{
    let calendar = Calendar.current
    
    let hour = calendar.component(.hour, from: date)
    let minutes = calendar.component(.minute, from: date)
    let seconds = calendar.component(.second, from: date)
    return "Local Time = \(hour):\(minutes):\(seconds)"
}


//Make offsets line up with our right time of day
let secondsInADay = 24*60*60
let masterOffset = round(Date().rightTimeOfDay().timeIntervalSince1970).intValue % secondsInADay


extension MinuteOffsetIntoDay {
    init(_ date: Date) {
        // This is off due to leap seconds and our wierd date offset, but close enough for this very rushed point in dev cycle
        //   probably should have + or - five deepending on the window
        let secondInDay = (round(date.timeIntervalSince1970).intValue - masterOffset) % secondsInADay
        let minuteInDay = secondInDay / 60
        let stats = ("dateToMinuteOffset",localTimeString(date),minuteInDay)
        self = minuteInDay
        _ = stats
    }
}

extension Date {
    /// Returns the amount of years from another date
    func years(from date: Date) -> Int {
        return Calendar.current.dateComponents([.year], from: date, to: self).year ?? 0
    }
    
    func rightTimeOfDay() -> Date {
        let newDate = Calendar.current.date(bySettingHour: 23, minute: 59, second: 59, of: self)!
        // print("old \(self) new \(newDate)")
        return newDate
    }
    
    func hashForm() -> DateHashKey {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd-ss"
        formatter.timeZone = TimeZone.current
        return formatter.string(from: self)
    }
    
    init?(hashForm:DateHashKey) {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd-ss"
        formatter.timeZone = TimeZone.current
        let dateOpt = formatter.date(from: hashForm)
        guard let date = dateOpt else { return nil }
        self = date
    }
    
    func simpleRepresentation() -> String {
        let calendar = Calendar.current
        let day = calendar.component(.day, from: self)
        let month = calendar.component(.month, from: self)
        let dateFormatter = DateFormatter()
        return "\(dateFormatter.shortMonthSymbols[month - 1]) \(day)"
    }
}


func minOpt<T: Comparable>(_ a: T?, _ b: T?) -> T? {
    guard let a = a else {
        return b
    }
    
    guard let b = b else {
        return a
    }
    
    if a < b {
        return a
    } else {
        return b
    }
}

func maxOpt<T: Comparable>(_ a: T?, _ b: T?) -> T? {
    guard let a = a else {
        return b
    }
    
    guard let b = b else {
        return a
    }
    
    if a > b {
        return a
    } else {
        return b
    }
}

// comment in and out as needed
func asPrint(_ items: Any..., separator: String = " ", terminator: String = "\n") {
    //    print( items, separator:separator, terminator:terminator)
}

// MARK: determine functions take raw data or caluclated values, and return a small amount of data intended to be used as a calculated value

// This function returns true or nil. This is because nil is used to *not change* a parameter, and we don't
//   want to clobber biking steps with walking steps and vice versa
func determineHasWalkedALittle(steps: StepCount?) -> Bool? {
    guard (steps != nil) && steps! > 0 else {
        return nil
    }
    return true
}


func determineStepDelta(forLastTwo data: [Double]) -> StepCount? {
    switch data.count {
    case 0:
        return nil
    case 1:
        return StepCount(data.last!)
    default:
        return StepCount(data.last! - data.dropLast().last!)
    }
}

func determineTotalSteps(stepSamples: [Double]) -> StepCount? {
    guard stepSamples.count > 0 else {
        return nil
    }
    let totalSteps = stepSamples.reduce(0) { $0 + $1 } 
    return StepCount(totalSteps)
}

func determineLowAdjustedHeartAverageRatio(maxHeartRate: BeatsPerMinute?,minHeartRate: BeatsPerMinute?, trainingRange: HeartRateRange?, heartRateSamples: [Double]?) -> HeartRatio? {
    
    guard let maxHeartRate = maxHeartRate,
        let minHeartRate = minHeartRate,
        let trainingRange = trainingRange,
        let heartRateSamples = heartRateSamples else {
            return nil
    }
    
    let lowSamples =  heartRateSamples.filter { $0 < Double(trainingRange.moderate) } //is out of range
    let countOfLowRateSamples = lowSamples.count
    let sumOfLowRateSamples: Double = lowSamples.reduce(0.0) { $0 + $1 }
    
    let lowAdjustedHeartAverageRatio = ((sumOfLowRateSamples / Double(countOfLowRateSamples)) -
        minHeartRate) / Double(maxHeartRate - minHeartRate)
    
    return lowAdjustedHeartAverageRatio
}

func determineCurrentHeartRatio(maxAppropriateHeartRateForAge: BeatsPerMinute?, currentHeartRate: BeatsPerMinute?) -> HeartRatio? {
    guard let currentHeartRate = currentHeartRate,
        let maxAppropriateHeartRateForAge = maxAppropriateHeartRateForAge else {
            return nil
    }
    
    return currentHeartRate / maxAppropriateHeartRateForAge
}

func isAnyInRange(d: Dictionary<HRKey, Double>?, range:HeartRateRange?) -> Bool {
    return d?.values.flatMap{ range?.atLeastModerate(heartRate: $0 ) }.reduce(false){$0 || $1} ?? false
}

func takeHighestHeartRate(d: Dictionary<HRKey, Double>?) -> Double? {
    return d?.values.reduce(0) { max($0, $1) }
}

func determineSimplifiedRateTable(lookupTable: HeartRateLookupMinuteTable) -> SimplifiedHeartRateLookupMinuteTable {
    var simplified = SimplifiedHeartRateLookupMinuteTable()
    for minuteIndex in daySampleIndexes {
        simplified[minuteIndex] = takeHighestHeartRate(d: lookupTable[minuteIndex])
    }
    return simplified
}

///this is all the rates from all the sources, without dates on them or meaningful order
func smooshedRates(table: HeartRateLookupMinuteTable) -> [Double] {
    let smooshed = table.map { (_, dict) -> [Double] in
        return dict.map { _, rate in
            return rate
        }
        }.flatMap { $0 }
    return smooshed
}

func determineAtMostOneSamplePerMinute(heartSampleArray: [HKQuantitySample], filterFunc:((_ new:Double, _ old:Double?)->Double)) -> [Double] {
    var heartRateForTheMinuteOfDay = [MinuteOffsetIntoDay:Double]()
    for sample in heartSampleArray {
        let rate = sample.quantity.doubleValue(for: HKUnit(from: "count/min"))
        let minute = MinuteOffsetIntoDay(sample.endDate)
        let oldRate = heartRateForTheMinuteOfDay[minute]
        let stats = ("stats", minute, ("time of day",100 * minute / 60 + (minute % 60)), rate, oldRate, ("sampledates",sample.startDate,sample.endDate))
        heartRateForTheMinuteOfDay[minute] = filterFunc(rate,oldRate)
        _ = stats
    }
    let keys = heartRateForTheMinuteOfDay.keys.sorted()
    return keys.flatMap{heartRateForTheMinuteOfDay[$0]}
}

struct HRKey:Hashable,Equatable{
    let source:String
    let minute:MinuteOffsetIntoDay
    var hashValue:Int { get{return "\(source.hashValue)_\(minute.hashValue)".hashValue}}
    public static func ==(lhs: HRKey, rhs: HRKey) -> Bool{
        return lhs.source == rhs.source && lhs.minute == rhs.minute
    }
}

func determineHeartRatesForMinutesOfTheDay(heartSampleArray: [HKQuantitySample]) -> HeartRateLookupMinuteTable {
    var heartRatesForTheMinuteOfDay = HeartRateLookupMinuteTable()
    for sample in heartSampleArray {
        let rate = sample.quantity.doubleValue(for: HKUnit(from: "count/min"))
        let source = sample.sourceRevision.description
        let minute = MinuteOffsetIntoDay(sample.endDate)
        var rates = heartRatesForTheMinuteOfDay[minute] ?? Dictionary<HRKey, Double>()
        rates[HRKey(source:source,minute:minute)] = rate
        heartRatesForTheMinuteOfDay[minute] = rates
    }
    
    return heartRatesForTheMinuteOfDay
}

let daySampleIndexes = (0 ..< minutesPerDay)

// this debounces the samples to remove the random 1-2 minute spikes of activity you get sometimes
func determineMinutesThatAreInWorkouts(workoutPeriods:[(Date,Date)]?) -> [MinuteOffsetIntoDay]? {
    guard let workoutPeriods = workoutPeriods else {
        return nil
    }
    
    var indexes:Set<MinuteOffsetIntoDay> = Set<MinuteOffsetIntoDay>()
    for workout in workoutPeriods{
        let startMin = MinuteOffsetIntoDay(workout.0)
        let durationInMin = Int(workout.1.timeIntervalSince(workout.0))/60
        for minute in startMin...startMin+durationInMin{
            indexes.insert(minute)
        }
        
    }
    return indexes.map{$0}
}



func determineRestingHeartRate(heartSampleArray: [Double]) -> BeatsPerMinute? {
    guard heartSampleArray.count > 0 else{
        return nil
    }
    
    let numberOfRatesToAverage = 4
    let lowestRates = heartSampleArray.sorted().reversed().lastItems(count:numberOfRatesToAverage) //average the lowest heart rates of the day
    let restingHeartRate = lowestRates.reduce(0.0){$0+$1} /
        Double(lowestRates.count)
    return restingHeartRate
}

func determineActivity(steps: StepCount?, bikeDist: Meters?) -> StepCount? {
    guard let bikeDist = bikeDist else {
        return steps
    }
    
    let cycStepEquiv = StepCount(bikeDist * 0.339)
    
    guard let steps = steps else {
        return cycStepEquiv
    }
    
    return steps + cycStepEquiv
}

func determinePercentHRRRatios(range: HeartRateRange?,
                                    indexes: [MinuteOffsetIntoDay]?,
                                    lookupTable: HeartRateLookupMinuteTable?) -> [Double]? {
    guard let range = range,
        let indexes = indexes,
        let lookupTable = lookupTable else {
            return nil
    }
    
    return indexes.flatMap{takeHighestHeartRate(d:lookupTable[$0])}.map{ $0 - range.resting}.map{$0 / (range.max-range.resting)}
}

func determineAdjustedHeartRatio(maxAppropriateHeartRateForAge: BeatsPerMinute?,
                                 minAppropriateHeartRateForAge: BeatsPerMinute?,
                                 heartRate: BeatsPerMinute?) -> HeartRatio? {
    guard let maxAppropriateHeartRateForAge = maxAppropriateHeartRateForAge,
        let minAppropriateHeartRateForAge = minAppropriateHeartRateForAge,
        let heartRate = heartRate else {
            return nil
    }
    
    return (heartRate - minAppropriateHeartRateForAge) /
        (maxAppropriateHeartRateForAge - minAppropriateHeartRateForAge)
}

func determinePeakAdjustedHeartRatio(maxAppropriateHeartRateForAge: BeatsPerMinute?,
                                     minAppropriateHeartRateForAge: BeatsPerMinute?,
                                     peakHeartRate: BeatsPerMinute?) -> HeartRatio? {
    
    // (hPeak - hMinimum) / (this.heartAverageMaximum - hMinimum);
    guard let maxAppropriateHeartRateForAge = maxAppropriateHeartRateForAge,
        let minAppropriateHeartRateForAge = minAppropriateHeartRateForAge,
        let peakHeartRate = peakHeartRate else {
            return nil
    }
    
    return (peakHeartRate - minAppropriateHeartRateForAge) /
        (maxAppropriateHeartRateForAge - minAppropriateHeartRateForAge)
}

func determinePeakHeartRate(heartSamples: [BeatsPerMinute]?) -> BeatsPerMinute? {
    guard let heartSamples = heartSamples,
        heartSamples.count > 0 else {
            return nil
    }
    
    return heartSamples.reduce(0) { max($0, $1) } // JS appears to find peak for the day
}

func determinePeakHeartRatio(peakRate:BeatsPerMinute?, minRate:BeatsPerMinute?, maxRate:BeatsPerMinute?) -> HeartRatio?{
    guard let peakRate = peakRate,
        let minRate = minRate,
        let maxRate = maxRate,
        maxRate-minRate > 0 else{
            return nil
    }
    
    return (peakRate - minRate) / (maxRate - minRate)
}

func determineAdjustedHeartRatios(maxAppropriateHeartRate: BeatsPerMinute?,
                                  minAppropriateHeartRate: BeatsPerMinute?,
                                  trainingRange: HeartRateRange?,
                                  heartSamples: [Double]?) -> [HeartRatio]? {
    
    guard let maxAppropriateHeartRate = maxAppropriateHeartRate,
        let minAppropriateHeartRate = minAppropriateHeartRate,
        let trainingRange = trainingRange,
        let heartSamples = heartSamples else {
            return nil
    }
    
    let adjustedHeartRatiosWrapped = heartSamples.flatMap { (heartRate: BeatsPerMinute) -> [HeartRatio]? in
        guard let ratio = determineAdjustedHeartRatio(maxAppropriateHeartRateForAge: maxAppropriateHeartRate,
                                                      minAppropriateHeartRateForAge: minAppropriateHeartRate,
                                                      heartRate: heartRate) else {
                                                        return nil
        }
        
        if trainingRange.atLeastModerate(heartRate: heartRate){
            return [ratio, ratio, ratio] //This blooms the halo
        } else {
            return [ratio]
        }
    }
    let adjustedHeartRatios = adjustedHeartRatiosWrapped.flatMap { $0 }
    return adjustedHeartRatios
}

func determineTimeExercising(highHeartRateIntervalValues: [Double]) -> Minutes {
    return highHeartRateIntervalValues.count * shortSampleInterval
}

func determineHighHRMinutesWithTrustworthyHRReadings(trainingRange: HeartRateRange?, indexesToCheckForSampleRate:[MinuteOffsetIntoDay]?, workoutIndexes: [MinuteOffsetIntoDay]?, lookupTable: HeartRateLookupMinuteTable?) -> [MinuteOffsetIntoDay]? {
    guard let trainingRange = trainingRange,
        let indexesToCheckForSampleRate = indexesToCheckForSampleRate,
        let workoutIndexes = workoutIndexes,
        let lookupTable = lookupTable else{
            return nil
    }
    let samplingReadingsPerMinMin = 2
    
    let enoughHRSamplesIndexes = indexesToCheckForSampleRate.filter{ index in
        
        guard let count = lookupTable[index]?.keys.count else{
            return false
        }
        
        return count >= samplingReadingsPerMinMin
    }
    let enoughSamplesAndWorkoutIndexes = Set(enoughHRSamplesIndexes+workoutIndexes).enumerated().map{$0.element}
    let vigIndexes = enoughSamplesAndWorkoutIndexes.filter{isAnyInRange(d: lookupTable[$0], range:trainingRange)}
    return vigIndexes
    
}

func determineAverageHeartRateForIndexes(indexes: [MinuteOffsetIntoDay]?, lookupTable: HeartRateLookupMinuteTable?) -> BeatsPerMinute? {
    
    guard let indexes = indexes,
        let lookupTable = lookupTable else {
            return nil
    }
    
    let validValues = indexes.flatMap{takeHighestHeartRate(d:lookupTable[$0])}
    guard validValues.count != 0 else{
        return nil
    }
    let sum: Double = validValues.reduce(0.0){$0+$1}
    return BeatsPerMinute(Double(sum) / Double(validValues.count))
}


func determineStepsTakenInLastHour(stepSamples: [Double]) -> StepCount? {
    return 1
}

func isPresentAtAllInStore(dateHash: DateHashKey) -> Bool {
    return (mainStore.state.healthModels[dateHash] != nil)
}

func determineCountOfSamplesInLastHourWithSteps(stepSamples: [Double]?) -> Int? {
    guard let stepSamples = stepSamples else {
        return nil
    }
    
    return stepSamples.filter { $0 > 0 }.count
}

// MARK: process functions take raw data and make intermediate calculated values out of them, then update the time slices with those values.

func processWorkouts(state inState: AppState, workoutsInfo: ImportWorkoutArray) -> AppState{
    var state = inState
    let dateHash = workoutsInfo.endDate.hashForm()
    
    let workoutIntervals = workoutsInfo.array.map{ (start:$0.startDate, end:$0.endDate) }
    
    let oldHealthSlice = state.healthModels[dateHash]
    let newHealthModel = HealthTimeSlice(
        oldTimeSlice: oldHealthSlice,
        workoutPeriods: workoutIntervals)
    
    state.healthModels[dateHash] = newHealthModel
    updateDayViewModel(state: &state, dateHash:dateHash)
    updateHaloViewModel(state: &state, dateHash: dateHash)
    
    return state
}



//This is to model the last hour of user activity, so we can get complexity mainly.
func processLastHourHeartData(state inState: AppState,
                              healthInfo: ImportHistoricHealthDataQuantityByHour) -> AppState {
   
    var state = inState
    let dateHash = healthInfo.endDate.rightTimeOfDay().hashForm()
    
    let user = state.userModels[dateHash] ?? UserTimeSlice()
    let oldHealthSlice = state.healthModels[dateHash]
    let lastHourHeartRate = healthInfo.value
    //dump (lastHourHeartRate)
    let lastHourHeartRatio = determineCurrentHeartRatio(maxAppropriateHeartRateForAge: user.maxAppropriateHeartRate, currentHeartRate: lastHourHeartRate)
    let lastHourAdjustedHeartRatio = determineAdjustedHeartRatio(maxAppropriateHeartRateForAge: user.maxAppropriateHeartRate,
                                                                    minAppropriateHeartRateForAge: user.minAppropriateHeartRate,
                                                                    heartRate: lastHourHeartRate)
    let newHealthModel = HealthTimeSlice(
            oldTimeSlice: oldHealthSlice,
            currentHeartRate: lastHourHeartRate,
            lastHourHeartRatio: lastHourHeartRatio,
            currentAdjustedHeartRatio: lastHourAdjustedHeartRatio)
    
        state.healthModels[dateHash] = newHealthModel
        updateDayViewModel(state: &state, dateHash:dateHash)
        updateHaloViewModel(state: &state, dateHash: dateHash)
        return state
}

func processShortSampleAverageHeartRateData(state inState: AppState, historicArray: ImportHistoricHealthDataQuantityArray) -> AppState {
    var state = inState
    let dateHash = historicArray.endDate.hashForm()
    
    let heartSamples = historicArray.array
    
    let user = state.userModels[dateHash] ?? UserTimeSlice()
    
    let restingHeartRate = determineRestingHeartRate(heartSampleArray: heartSamples)
    
    let oldHealthSlice = state.healthModels[dateHash]
    let adjustedHeartRatios = determineAdjustedHeartRatios(maxAppropriateHeartRate: user.maxAppropriateHeartRate, minAppropriateHeartRate: user.minAppropriateHeartRate, trainingRange: user.targetHeartRate(restingHeartRate: restingHeartRate), heartSamples: heartSamples)
    
    
    let newHealthModel = HealthTimeSlice(
        oldTimeSlice: oldHealthSlice,
        restingHeartRate: restingHeartRate,
        allAdjustedHeartRatios: adjustedHeartRatios)
    
    state.healthModels[dateHash] = newHealthModel
    updateDayViewModel(state: &state, dateHash:dateHash)
    updateHaloViewModel(state: &state, dateHash: dateHash)
    
    // updates the energyMap view model to use the new health params we've now gathered
    state.energyMapViewModels[dateHash] = HaloTimeSlice(oldHaloTimeSlice: state.haloViewModels[dateHash],
                                                        healthForEnergyMap: state.healthModels[dateHash]!)
    
    return state
}

func processExtremelyShortSamplePeakHeartRateData(state inState: AppState, raw: ImportHistoricRawHealthDataQuantityArray) -> AppState {
    var state = inState
    let dateHash = raw.endDate.hashForm()
    let fastHeartSamples = raw.array
    
    
    let heartRatesByMinute = determineHeartRatesForMinutesOfTheDay(heartSampleArray: fastHeartSamples)
    
    let oldHealthSlice = state.healthModels[dateHash]
    //let minuteIndexesInWorkouts =
    
    let user = state.userModels[dateHash] ?? UserTimeSlice()
    let trainingRange = user.targetHeartRate(restingHeartRate: oldHealthSlice?.restingHeartRate)
    
    let allMinutes = Array(0...(60*24))
    let highHRMinutes: [MinuteOffsetIntoDay]?  = determineHighHRMinutesWithTrustworthyHRReadings(
        trainingRange: trainingRange,
        indexesToCheckForSampleRate: allMinutes,
        workoutIndexes: determineMinutesThatAreInWorkouts(workoutPeriods:oldHealthSlice?.workoutPeriods),
        lookupTable: heartRatesByMinute)
    let exerciseMinutesCount = highHRMinutes?.count
    
    
    let avgHRForHighMinutes = determineAverageHeartRateForIndexes(indexes: highHRMinutes, lookupTable: heartRatesByMinute)
    
    let lowHeartSamples:[Double]  = determineAtMostOneSamplePerMinute(heartSampleArray:fastHeartSamples){ (new, old) in
        guard let old = old else{return new}
        
        return min(new,old)
    }
    
    let lowAdjustedHeartAverageRatio = determineLowAdjustedHeartAverageRatio(maxHeartRate: user.maxAppropriateHeartRate,
                                                                             minHeartRate:user.minAppropriateHeartRate,
                                                                             trainingRange: trainingRange,
                                                                             heartRateSamples: lowHeartSamples)
    
    let highHeartSamples:[Double]  = determineAtMostOneSamplePerMinute(heartSampleArray:fastHeartSamples){ (new, old) in
        guard let old = old else{return new}
        
        return max(new,old)
    }
    
    let lastKnownHR = fastHeartSamples.last?.quantity.doubleValue(for: HKUnit(from: "count/min"))
    
    let currentHeartRate = lastKnownHR
    let lastHourHeartRatio = determineCurrentHeartRatio(maxAppropriateHeartRateForAge: user.maxAppropriateHeartRate, currentHeartRate: currentHeartRate)
    let currentAdjustedHeartRatio = determineAdjustedHeartRatio(maxAppropriateHeartRateForAge: user.maxAppropriateHeartRate,
                                                                minAppropriateHeartRateForAge: user.minAppropriateHeartRate,
                                                                heartRate: currentHeartRate)
    
    let percentHRRRatios = determinePercentHRRRatios(range: user.targetHeartRate(restingHeartRate: oldHealthSlice?.restingHeartRate), indexes: highHRMinutes, lookupTable: heartRatesByMinute)
    
    let peakHeartRate = determinePeakHeartRate(heartSamples: highHeartSamples)
    
    
    
    let newHealthModel = HealthTimeSlice(
        oldTimeSlice: oldHealthSlice,
        peakHeartRate: peakHeartRate,
        highHeartAverage: avgHRForHighMinutes,
        currentHeartRate: lastKnownHR,
        exerciseHeartRate: avgHRForHighMinutes,
        lastKnownHeartRate: lastKnownHR,
        lastHourHeartRatio: lastHourHeartRatio,
        currentAdjustedHeartRatio: currentAdjustedHeartRatio,
        lowAdjustedHeartAverageRatio: lowAdjustedHeartAverageRatio,
        peakAdjustedHeartRatio: determinePeakHeartRatio(peakRate:peakHeartRate, minRate:user.minAppropriateHeartRate, maxRate:user.maxAppropriateHeartRate ),
        percentHRR: percentHRRRatios,
        exerciseMinutes: exerciseMinutesCount,
        highHRMinuteIndexes:  highHRMinutes,
        highHRLookupTable: heartRatesByMinute,
        rawHRData: fastHeartSamples)
    
    state.healthModels[dateHash] = newHealthModel
    updateDayViewModel(state: &state, dateHash:dateHash)
    updateHaloViewModel(state: &state, dateHash: dateHash)
    
    // updates the energyMap view model to use the new health params we've now gathered
    state.energyMapViewModels[dateHash] = HaloTimeSlice(oldHaloTimeSlice: state.haloViewModels[dateHash],
                                                        healthForEnergyMap: state.healthModels[dateHash]!)
    return state
}


func processShortSampleWalkingRunningDistance(state inState: AppState, historicArray: ImportHistoricHealthDataQuantityArray) -> AppState {
    var state = inState
    let dateHash = historicArray.endDate.hashForm()
    
    let distanceSamples = historicArray.array
    let distance = distanceSamples.reduce(0) { $0 + $1 }
    
    let oldHealthSlice = state.healthModels[dateHash]
    let newHealthModel = HealthTimeSlice(
        oldTimeSlice: oldHealthSlice,
        distanceWalked: distance)
    
    state.healthModels[dateHash] = newHealthModel
    updateDayViewModel(state: &state, dateHash:dateHash)
    updateHaloViewModel(state: &state, dateHash: dateHash)
    
    return state
}

func processShortSampleCyclingDistance(state inState: AppState, historicArray: ImportHistoricHealthDataQuantityArray) -> AppState {
    var state = inState
    let dateHash = historicArray.endDate.hashForm()
    
    let cycSamples = historicArray.array
    let cyclingDistance = cycSamples.reduce(0) { $0 + $1 }
    
    let lastHourCyclingDistance = cycSamples.lastItems(count:60/shortSampleInterval).flatMap { Meters($0) }.reduce(0){$0+$1}
    
    let oldHealthSlice = state.healthModels[dateHash]
    let activity = determineActivity(steps: oldHealthSlice?.totalSteps, bikeDist: cyclingDistance)
    let lastHourActivity = determineActivity(steps: oldHealthSlice?.lastHourSteps, bikeDist: lastHourCyclingDistance)
    
    let newHealthModel = HealthTimeSlice(
        oldTimeSlice: oldHealthSlice,
        activity: activity,
        cyclingDistance: cyclingDistance,
        lastHourCyclingDistance: lastHourCyclingDistance,
        lastHourActivity: lastHourActivity)
    
    state.healthModels[dateHash] = newHealthModel
    updateDayViewModel(state: &state, dateHash:dateHash)
    updateHaloViewModel(state: &state, dateHash: dateHash)
    
    return state
}


func processDailySampleStepData(state inState: AppState, historicArray: ImportHistoricHealthDataQuantityArray) -> AppState {
    var state = inState
    let dateHash = historicArray.endDate.hashForm()
    let stepSamples = historicArray.array
    
    let stepCount = stepSamples.first?.rounded().intValue
    
    let oldHealthSlice = state.healthModels[dateHash]

    let newHealthModel = HealthTimeSlice(
        oldTimeSlice: oldHealthSlice,
        appleSteps: stepCount)
    
    
    state.healthModels[dateHash] = newHealthModel
    updateDayViewModel(state: &state, dateHash:dateHash)
    updateHaloViewModel(state: &state, dateHash: dateHash)
    return state
}

func determineStepDelta(earlier:StepCount?, later:StepCount?) -> StepCount?{
    guard let earlier = earlier,
        let later = later else {
            return nil
    }
    
    return later - earlier
}

func processAnHourAgoStepData(state inState: AppState, healthInfo: ImportHistoricHealthDataQuantityByHour) -> AppState {
    var state = inState
    let dateHash = healthInfo.endDate.rightTimeOfDay().hashForm()
    let oldHealthSlice = state.healthModels[dateHash]
    let stepCount = StepCount(healthInfo.value)
    let stepDelta = determineStepDelta(earlier: stepCount, later: oldHealthSlice?.lastHourSteps)
    
    let newHealthModel = HealthTimeSlice(
        oldTimeSlice: oldHealthSlice,
        stepDelta: stepDelta)
    
    state.healthModels[dateHash] = newHealthModel
    updateDayViewModel(state: &state, dateHash:dateHash)
    updateHaloViewModel(state: &state, dateHash: dateHash)
    return state
}

func processLastHourStepData(state inState: AppState,healthInfo: ImportHistoricHealthDataQuantityByHour) -> AppState {
    var state = inState
    let dateHash = healthInfo.endDate.rightTimeOfDay().hashForm()
    let oldHealthSlice = state.healthModels[dateHash]
    let stepCount = StepCount(healthInfo.value)
    
    let lastHourActivity = determineActivity(steps: stepCount, bikeDist: oldHealthSlice?.lastHourCyclingDistance)
    
    let newHealthModel = HealthTimeSlice(
        oldTimeSlice: oldHealthSlice,
        lastHourSteps: stepCount,
        lastHourActivity: lastHourActivity)
    
    state.healthModels[dateHash] = newHealthModel
    updateDayViewModel(state: &state, dateHash:dateHash)
    updateHaloViewModel(state: &state, dateHash: dateHash)
    return state
}


func processLastHourCyclingData(state inState: AppState, healthInfo: ImportHistoricHealthDataQuantityByHour) -> AppState {
    var state = inState
    let dateHash = healthInfo.endDate.rightTimeOfDay().hashForm()
    let oldHealthSlice = state.healthModels[dateHash]
    let lastHourCyclingDistance = Meters(healthInfo.value)
    
    let lastHourActivity = determineActivity(steps: oldHealthSlice?.lastHourSteps, bikeDist: lastHourCyclingDistance)
    
    let newHealthModel = HealthTimeSlice(
        oldTimeSlice: oldHealthSlice,
        lastHourCyclingDistance: lastHourCyclingDistance,
        lastHourActivity: lastHourActivity)
    
    state.healthModels[dateHash] = newHealthModel
    updateDayViewModel(state: &state, dateHash:dateHash)
    updateHaloViewModel(state: &state, dateHash: dateHash)
    return state
}

func processShortSampleStepData(state inState: AppState, historicArray: ImportHistoricHealthDataQuantityArray) -> AppState {
    var state = inState
    let dateHash = historicArray.endDate.hashForm()
    
    let stepSamples = historicArray.array
    
    let oldHealthSlice = state.healthModels[dateHash]
    let totalSteps = determineTotalSteps(stepSamples: stepSamples)
    let activity = determineActivity(steps: totalSteps, bikeDist: oldHealthSlice?.cyclingDistance)
    
    
    let newHealthModel = HealthTimeSlice(
        oldTimeSlice: oldHealthSlice,
        activity: activity)
    
    state.healthModels[dateHash] = newHealthModel
    updateDayViewModel(state: &state, dateHash:dateHash)
    updateHaloViewModel(state: &state, dateHash: dateHash)
    return state
}

func processAppleActivitySummary(state inState: AppState, exerciseTime: Minutes, countOfHoursStood: Int,
                                 standGoal: StepCount, endDate: Date) -> AppState {
    var state = inState
    let dateHash = endDate.hashForm()
    let oldHealthSlice = state.healthModels[dateHash]
    
    let newHealthModel = HealthTimeSlice(
        oldTimeSlice: oldHealthSlice,
        appleExerciseMinutes: exerciseTime,
        appleStoodHours: countOfHoursStood,
        appleStandGoal: standGoal)
    
    // dump(exerciseTime)
    state.healthModels[dateHash] = newHealthModel
    updateDayViewModel(state: &state, dateHash:dateHash)
    updateHaloViewModel(state: &state, dateHash: dateHash)
    return state
}

func processShortSampleHeight(state inState: AppState, historicArray: ImportHistoricHealthDataQuantityArray) -> AppState {
    var state = inState
    let dateHash = historicArray.endDate.hashForm()
    let oldUserSlice = state.userModels[dateHash]
    let height = historicArray.array.last
    let newUserModel = UserTimeSlice(oldUser: oldUserSlice, age: nil, height: height, gender: nil)
    
    state.userModels[dateHash] = newUserModel
    updateDayViewModel(state: &state, dateHash:dateHash)
    updateHaloViewModel(state: &state, dateHash: dateHash)
    return state
}

func updateHaloViewModel(state: inout AppState, dateHash: String) {
    // updates the halo view model to use the new health params we've now gathered
    state.haloViewModels[dateHash] = HaloTimeSlice(oldHaloTimeSlice: state.haloViewModels[dateHash] ?? HaloTimeSlice(),
                                                   health: state.healthModels[dateHash] ?? HealthTimeSlice(),
                                                   user: state.userModels[dateHash] ?? UserTimeSlice())
}


func updateDayViewModel(state:inout AppState,  dateHash:DateHashKey){
    let health = state.healthModels[dateHash] ?? HealthTimeSlice()
    let user = state.userModels[dateHash] ?? UserTimeSlice()
    state.dayViewModels[dateHash] = DayViewModel(dateHash: dateHash,
                                                 health: health,
                                                 user: user)
}
