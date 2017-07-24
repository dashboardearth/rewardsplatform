//
//  HaloSpecification.swift
//  HeartHalo
//
//  Created by Michael Langford on 11/4/16.
//  Copyright © 2016 Rowdy Labs LLC. All rights reserved.
//
import Foundation

typealias HaloSize = Double
typealias HaloColor = [Double]
typealias HaloSpeed = Double
typealias HaloComplexity = Double
typealias HaloBrightness = Double
typealias HaloWobble = Double
typealias HaloColorFill = Double
typealias HaloColorGradient = Double
typealias HaloWaveIntensity = Double
typealias HaloColorCenter = Double
typealias HaloColorCenterRatio = Double
typealias HaloMinRingRadius = Double
typealias HaloMaxRingRadius = Double
typealias HaloWaveCount = Double
typealias HaloHighlightRing = Double
typealias HaloWaveSpeed = Double
typealias HaloWaveColor = Double
typealias HaloRingCount = Int
typealias HaloAuraIndex = Int
typealias HaloAuraOpacity = Double
typealias HaloSolidLinesFlag = Bool
typealias HaloGridVisibilityFlag = Bool
typealias HaloLineDistributionFlag = Bool

// The settings at a given point in time for a halo
struct HaloTimeSlice: HasEmptyConstructor {

    //
    // The default value of the halo is based off
    //   a scenario when there is no data
    //
    let size: HaloSize
    let speed: HaloSpeed
    let complexity: HaloComplexity

    let wobble: HaloWobble

    let color: HaloColor
    let colorCenter: HaloColorCenter
    let colorCenterRatio: HaloColorCenterRatio

    let minRingRadius: HaloMinRingRadius
    let maxRingRadius: HaloMaxRingRadius
    let minNumRings: HaloRingCount
    let maxNumRings: HaloRingCount

    let waveCount: HaloWaveCount
    var waveSpeed: HaloWaveSpeed
    var waveColor: HaloWaveColor

    var showAuraAtRing: HaloAuraIndex
    var highlightRing: HaloHighlightRing
    var waveIntensity: HaloWaveIntensity

    // These don't appear to change
    var evenLineDistribution: HaloLineDistributionFlag
    var solidLines: HaloSolidLinesFlag
    var showGrid: HaloGridVisibilityFlag
    var auraOpacity: HaloAuraOpacity
    var brightness: HaloBrightness

    var isEnergyMap: Bool // This is the technical term used to indicate we're doing an energy map instead of a normal halo

    let energyMapFlagName = "stratified"

    let wobbleHistoric: HaloWobble = 0.00 // Force wobble off for historic because that doesn't make sense: It's a prompt to get moving
    let complexityHistoric: HaloComplexity = 0.25 // force complexity off historic because it goes away after exercise passes, it's a heart rate reward\
    
    // these defaults encapsulate the defaults from the
    //   javascript file, including the non-data mode of the halo
    init() {
        self.size = 0.25
        self.speed = 0.0
        self.complexity = 0.25

        self.wobble = 0.0

        self.color = [0.01]
        self.colorCenter = 0.02
        self.colorCenterRatio = 0.5

        self.minRingRadius = 0.35
        self.maxRingRadius = 0.5
        self.minNumRings = 10
        self.maxNumRings = 80

        self.waveCount = 0.0
        self.waveSpeed = 0.5
        self.waveColor = 0.2

        self.showAuraAtRing = -1
        self.highlightRing = 1.0 //1.0 apparently means never.
        self.waveIntensity = 0.0

        // These don't appear to change
        self.evenLineDistribution = true
        self.solidLines = true
        self.showGrid = false
        self.auraOpacity = 1
        self.brightness = 1
        self.isEnergyMap = false
    }

    init(oldHaloTimeSlice: HaloTimeSlice?,
         size: HaloSize?,
         speed: HaloSpeed?,
         complexity: HaloComplexity?,
         wobble: HaloWobble?,
         color: HaloColor?,
         colorCenter: HaloColorCenter?,
         colorCenterRatio: HaloColorCenterRatio?,
         minRingRadius: HaloMinRingRadius?,
         maxRingRadius: HaloMaxRingRadius?,
         minNumRings: HaloRingCount?,
         maxNumRings: HaloRingCount?,

         waveCount: HaloWaveCount?,
         waveSpeed: HaloWaveSpeed?,
         waveColor: HaloWaveColor?,

         showAuraAtRing: HaloAuraIndex?,
         highlightRing: HaloHighlightRing?,
         waveIntensity: HaloWaveIntensity?,

         // These don't appear to change
         evenLineDistribution: HaloLineDistributionFlag?,
         solidLines: HaloSolidLinesFlag?,
         showGrid: HaloGridVisibilityFlag?,
         auraOpacity: HaloAuraOpacity?,
         brightness: HaloBrightness?,
         isEnergyMap: Bool?) {

        let old = oldHaloTimeSlice ?? HaloTimeSlice()

        self.size = size ?? old.size
        self.speed = speed ?? old.speed
        self.complexity = complexity ?? old.complexity

        self.wobble = wobble ?? old.wobble

        self.color = color ?? old.color
        self.colorCenter = colorCenter ?? old.colorCenter
        self.colorCenterRatio = colorCenterRatio ?? old.colorCenterRatio

        self.minRingRadius = minRingRadius ?? old.minRingRadius
        self.maxRingRadius = maxRingRadius ?? old.maxRingRadius
        self.minNumRings = minNumRings ?? old.minNumRings
        self.maxNumRings = maxNumRings ?? old.maxNumRings

        self.waveCount = waveCount ?? old.waveCount
        self.waveSpeed = waveSpeed ?? old.waveSpeed
        self.waveColor = waveColor ?? old.waveColor

        self.showAuraAtRing = showAuraAtRing ?? old.showAuraAtRing
        self.highlightRing = highlightRing ?? old.highlightRing
        self.waveIntensity = waveIntensity ?? old.waveIntensity

        // These don't appear to change
        self.evenLineDistribution = evenLineDistribution ?? old.evenLineDistribution
        self.solidLines = solidLines ?? old.solidLines
        self.showGrid = showGrid ?? old.showGrid
        self.auraOpacity = auraOpacity ?? old.auraOpacity
        self.brightness = brightness ?? old.brightness

        self.isEnergyMap = isEnergyMap ?? old.isEnergyMap
    }

    init(oldHaloTimeSlice: HaloTimeSlice?, health: HealthTimeSlice, user: UserTimeSlice) {

        self.init(oldHaloTimeSlice: oldHaloTimeSlice,
                  size: calculateHaloSize(health: health, user: user),
                  speed: calculateHaloSpeed(health: health, user: user),
                  complexity: calculateHaloComplexity(health: health, user: user),
                  wobble: calculateHaloWobble(health: health, user: user),
                  color: calculateColor(health: health, user: user),
                  colorCenter: calculateColorCenter(health: health, user: user),
                  colorCenterRatio: calculateColorCenterRatio(health: health, user: user),
                  minRingRadius: calculateMinRingRadius(oldRingRadius: oldHaloTimeSlice?.minRingRadius, health: health, user: user),
                  maxRingRadius: calculateMaxRingRadius(health: health, user: user),
                  minNumRings: calculateHaloMinimumNumberOfRings(health: health, user: user),
                  maxNumRings: calculateHaloNumberOfRings(health: health, user:user),
                  waveCount: nil,
                  waveSpeed: nil,
                  waveColor: nil,
                  showAuraAtRing: nil,
                  highlightRing: calculateHaloHighlightRing(health:health, user: user),
                  waveIntensity: calculateWaveIntensity(health: health, user: user),
                  evenLineDistribution: nil,
                  solidLines: nil,
                  showGrid: nil,
                  auraOpacity: nil,
                  brightness: calculateHaloBrightness(health: health, user: user),
                  isEnergyMap: false)
    }

    // This is what's called "stratified" in the old version
    init(oldHaloTimeSlice: HaloTimeSlice?, healthForEnergyMap health: HealthTimeSlice) {
        // print(" \(health.allAdjustedHeartRatios.count) different colors")
        
        let ringCount = calculateEnergyMapMaxRingCount(health: health)
        let size = calculateEnergyMapSize(health: health)
        self.init(oldHaloTimeSlice: oldHaloTimeSlice,
                  size: size,
                  speed: 0.5,
                  complexity: 0.5,
                  wobble: 0.0,
                  color: calculateEnergyMapColor(health: health),
                  colorCenter: nil,
                  colorCenterRatio: nil,
                  minRingRadius: 0.35,
                  maxRingRadius: 1.0,
                  minNumRings: 0,
                  maxNumRings: ringCount,
                  waveCount: nil,
                  waveSpeed: nil,
                  waveColor: nil,
                  showAuraAtRing: nil,
                  highlightRing: nil,
                  waveIntensity: 0,
                  evenLineDistribution: nil,
                  solidLines: nil,
                  showGrid: nil,
                  auraOpacity: nil,
                  brightness: 1.0,
                  isEnergyMap: true)
    }
}

// used to confine a value to a range
func clamped<T: Comparable>(min: T, value: T, max: T) -> T {

    if min > value {
        return min
    }

    if max < value {
        return max
    }

    return value
}

let monocolorThreshold:Minutes = 45

func calculateEnergyMapColor(health:HealthTimeSlice) -> HaloColor {
    return health.allAdjustedHeartRatios.map { $0 + 0.01 }
}

// build items over time, this is totally tuned by slapping numbers in until it looks good
func calculateEnergyMapMaxRingCount(health: HealthTimeSlice) -> HaloRingCount {
    let count = min(6*24,4 * health.allAdjustedHeartRatios.count)
    return count
}

// build items over time, this is totally tuned by slapping numbers in until it looks good
func calculateEnergyMapSize(health: HealthTimeSlice) -> HaloSize {
    let size =  min(HaloSize(1.0), 2 * HaloSize(health.allAdjustedHeartRatios.count) / HaloSize(24.0*6.0))
    return size
}

// this is the chunky white line that is in the structure seen in screenshots from july 2016
func calculateHaloHighlightRing(health: HealthTimeSlice, user: UserTimeSlice) -> HaloHighlightRing {
    return 1.0
}

func calculateHaloSize(health: HealthTimeSlice, user: UserTimeSlice) -> HaloSize {
    let activity = health.activityTotal()
    let fastGrowthInflectionPercentage = Tiers.Gold.distanceTraveledThreshold
    let fastGrowthInflectionPoint = fastGrowthInflectionPercentage * Double(DisplayDailyTierCaps.distanceTraveled)
    let fastGrowthStepSize = 0.75 / fastGrowthInflectionPoint
    let slowGrowthStepSize = 0.25 / (Double(DisplayDailyTierCaps.distanceTraveled) - fastGrowthInflectionPoint)
    let cap = Tiers.Elite.distanceTraveledThreshold * Double(DisplayDailyTierCaps.distanceTraveled)

    //return 0.75 // use this when debugging halo appearance.
    if activity <= 0 { // fixme: we shouldn't use activity one way in the UI, and another here
        return 0.00001
    } else if activity <= fastGrowthInflectionPoint {
        let size = activity * fastGrowthStepSize
        return size
    } else if activity < cap {
        let fastGrowthActivity = fastGrowthInflectionPoint
        let slowGrowthActivity = activity - fastGrowthActivity
        let size = min(1.0,(fastGrowthActivity * fastGrowthInflectionPoint) + (slowGrowthActivity * slowGrowthStepSize))
        return size
    } else{
        return 1.0
    }
}

func calculateHaloMinimumNumberOfRings(health: HealthTimeSlice, user: UserTimeSlice) -> HaloRingCount {
    return 10
}

//While labeled "Max number of rings", this appears to be in practice to be *the number of rings*.
func calculateHaloNumberOfRings(health: HealthTimeSlice, user: UserTimeSlice) -> HaloRingCount {
    return 80
}

func calculateHaloComplexity(health: HealthTimeSlice, user: UserTimeSlice) -> HaloComplexity {
    let ratio = health.lastHourHeartRatio
    return clamped(min:0.30, value:ratio, max: 0.60)
}

func calculateMinRingRadius(oldRingRadius: HaloMinRingRadius?, health: HealthTimeSlice, user: UserTimeSlice) -> HaloMinRingRadius? {
    let newRadius = health.wasInactiveLastHour ? 0.0 : 0.35
    guard oldRingRadius != nil && newRadius != oldRingRadius! else {
        return nil // changing the Min Ring Radius resets the halo in a bad way, causing disruption
        //   returning nil on the same thing prevents an update from being sent
    }

    return newRadius
}

func calculateMaxRingRadius(health: HealthTimeSlice, user: UserTimeSlice) -> HaloMaxRingRadius {
    return health.wasInactiveLastHour ? 0.5:1.0
}

func calculateWaveIntensity(health: HealthTimeSlice, user: UserTimeSlice) -> HaloWaveIntensity {
    if health.stepDelta <= 10 {
        return 0.0
    }

    return clamped(min: 11.0, value: Double(health.stepDelta), max: 100.0) / 100.0
}

func calculateColorCenter(health: HealthTimeSlice, user: UserTimeSlice) -> HaloColorCenter {
    return min(1.0,health.peakAdjustedHeartRatio + 0.01)
}

let bloomThreshold = Tiers.Gold.workoutIntensityPointThreshold

func calculateUnboundedColorCenterRatio(health: HealthTimeSlice, user: UserTimeSlice) -> HaloColorCenterRatio {
    return Double(health.heartIntensityPoints()) * (1.0/Double(bloomThreshold))
}

func calculateColorCenterRatio(health: HealthTimeSlice, user: UserTimeSlice) -> HaloColorCenterRatio {
    let unbounded = calculateUnboundedColorCenterRatio(health: health, user: user)
    return min(0.99, unbounded)
}

func blend(_ color1:Double, _ color2:Double, ratio:Double)->Double{
    let c1 = clamped(min:0.0, value:color1, max:1.0)
    let c2 = clamped(min:0.0, value:color2, max:1.0)
    let r  = clamped(min:0.0, value:ratio, max:1.0)
    return (c1 * r) + (c2 * (1.0-r))
}

func blendAmount(_ colorCenterRatio: Double, _ blendingStartRatio: Double) -> Double{
    return clamped(min:0.0, value:(colorCenterRatio-blendingStartRatio) * (1.0/(1.0-blendingStartRatio)), max:1.0)
}

func calculateColor(health: HealthTimeSlice, user: UserTimeSlice) -> HaloColor {
    guard health.lowAdjustedHeartAverageRatio > 0.0 else {
        return [0.01]
    }
    
    let colorCenterRatio = calculateUnboundedColorCenterRatio(health: health, user: user) + 0.01
    let innerColor = calculateColorCenter(health: health, user: user)
    let outerColor = health.lowAdjustedHeartAverageRatio + 0.01
    
    let blendingStartRatio = 0.8
    if colorCenterRatio > blendingStartRatio {
        let amount = blendAmount(colorCenterRatio,blendingStartRatio)
        print("Blend Amount: \(amount) \(blendAmount(0.5,0.8)) \(blendAmount(0.6,0.8)) \(blendAmount(0.7,0.8)) \(blendAmount(0.8,0.8)) \(blendAmount(0.9,0.8)) \(blendAmount(1.0,0.8)) \(blendAmount(1.2,0.8))")
        return [blend(innerColor,outerColor,ratio:amount)]
    }else{
        return [outerColor]
    }
    
}

func calculateHaloSpeed(health: HealthTimeSlice, user: UserTimeSlice) -> HaloSpeed {
    guard health.lastHourHeartRatio > 0.0 else {
        return 0.01
    }

    return health.lastHourHeartRatio
}

func calculateHaloBrightness(health: HealthTimeSlice, user: UserTimeSlice) -> HaloBrightness {
    return 1.0 // not part of model
}

func calculateHaloWobble(health: HealthTimeSlice, user: UserTimeSlice) -> HaloWobble {
    let bad = 0.99
    let good = 0.0

    let wobble = health.lastHourActivity > 20 ? good : bad
    return wobble
}
