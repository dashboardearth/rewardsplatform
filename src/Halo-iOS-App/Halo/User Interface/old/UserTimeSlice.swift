//
//  HealthTimeSlice.swift
//  HeartHalo
//
//  Created by Michael Langford on 11/7/16.
//  Copyright © 2016 Rowdy Labs LLC. All rights reserved.
//
import Foundation
import HealthKit

struct HeartRateRange{
    let resting: BeatsPerMinute
    let moderate: BeatsPerMinute
    let moderateCap: BeatsPerMinute
    let vigorous: BeatsPerMinute
    let vigorousCap:  BeatsPerMinute
    let max: BeatsPerMinute
    
    func atLeastModerate(heartRate rate:BeatsPerMinute)->Bool{
        return rate >= moderate 
    }
}

struct UserTimeSlice: HasEmptyConstructor {
    var maxAppropriateHeartRate: BeatsPerMinute {
        return UserTimeSlice.maxHeartRatePer(age:age)
    }
    
    static func maxHeartRatePer(age:AgeInYears)->BeatsPerMinute{
        return Double(max(150, 200 - (age - 20)))
    }

    var minAppropriateHeartRate: BeatsPerMinute {
        return maxAppropriateHeartRate / 4
    }

    /*
     http://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise-intensity/art-20046887?pg=2

     Subtract your age from 220 to get your maximum heart rate.
     Calculate your resting heart rate by counting your heart beats per minute when you are at rest, such as first thing in the morning. It's usually somewhere between 60 and 100 beats per minute for the average adult.
     Calculate your heart rate reserve (HRR) by subtracting your resting heart rate from your maximum heart rate.
     Multiply your HRR by 0.7 (70 percent). Add your resting heart rate to this number.
     Multiply your HRR by 0.85 (85 percent). Add your resting heart rate to this number.
     These two numbers are your training zone heart rate. Your heart rate during exercise should be between these two numbers.
     */
    static let moderateHRRFloor = 0.5
    static let  vigorousHRRFloor = 0.7
    static let  vigorousHRRCeiling = 0.85
    static func mayoHealthLifestyleHeartRateTrainingRange(age:AgeInYears, restingHeartRate:BeatsPerMinute)->HeartRateRange{
        let max = UserTimeSlice.maxHeartRatePer(age: age)
        let heartRateReserve = max - restingHeartRate
        let moderateThreshold = restingHeartRate + (moderateHRRFloor * heartRateReserve)
        let vigorousThreshold = restingHeartRate + (vigorousHRRFloor * heartRateReserve)
        let vigorousTopEnd =  restingHeartRate + (vigorousHRRCeiling * heartRateReserve)
        let trainingZone = HeartRateRange(resting: restingHeartRate,
                                          moderate: moderateThreshold,
                                          moderateCap: vigorousThreshold,
                                          vigorous: vigorousThreshold,
                                          vigorousCap: vigorousTopEnd,
                                          max: max)
                                          
        return  trainingZone
    }
    
    
    static func oldTargetRange(age:AgeInYears, restingHeartRate:BeatsPerMinute)->HeartRateRange{
        let max = UserTimeSlice.maxHeartRatePer(age: age)
        let ranges = HeartRateRange(resting: max / 4.0,
                                          moderate: max / 2.0,
                                          moderateCap: max * 0.5,
                                          vigorous: max * 0.7,
                                          vigorousCap: max * 0.85,
                                          max: max)
        return ranges
    }
    
    func targetHeartRate(restingHeartRate:BeatsPerMinute?)->HeartRateRange?{
        guard let restingHeartRate = restingHeartRate else{
            return nil
        }
        
        return UserTimeSlice.mayoHealthLifestyleHeartRateTrainingRange(age:age, restingHeartRate:restingHeartRate)
        //return UserTimeSlice.oldTargetRange(age:age, restingHeartRate:restingHeartRate)
    }
    
    func heartRateReserve(restingHeartRate:BeatsPerMinute?)->BeatsPerMinute{
        let maxHR = UserTimeSlice.maxHeartRatePer(age: age)
        let restingHeartRate = restingHeartRate ?? maxHR/4
        let hrr = maxHR - restingHeartRate
        return hrr
    }
    
    func vigorousHeartRate(restingHeartRate:BeatsPerMinute?)->BeatsPerMinute{
        let restingHeartRate = restingHeartRate ?? UserTimeSlice.maxHeartRatePer(age: age)/4
        let ranges = UserTimeSlice.mayoHealthLifestyleHeartRateTrainingRange(age:self.age,restingHeartRate:restingHeartRate)
        return round(ranges.vigorous)
    }

    let gender: Gender
    let age: AgeInYears
    let height: Centemeters
    var stepLength: Centemeters {
        let coefficient = (gender == .female) ? 0.413 : 0.415
        return coefficient * height / 100
    }
    
    var ageHasBeenSet = false

    init() {

        self.init(age: 36,
                  height: 160,
                  gender: HKBiologicalSex.notSet)
    }

    init(age: AgeInYears,
         height: Centemeters,
         gender: Gender) {

        self.age = age
        self.height = height
        self.gender = gender
    }

    init(oldUser: UserTimeSlice?,
         age: AgeInYears?,
         height: Centemeters?,
         gender: Gender?) {

        let old = oldUser ?? UserTimeSlice()
        self.init(age: age ?? old.age,
                  height: height ?? old.height,
                  gender: gender ?? old.gender)
        let ageHasBeenSetInPast = oldUser?.ageHasBeenSet ?? false
        if age != nil || ageHasBeenSetInPast {
            ageHasBeenSet = true
        }
    }
}
