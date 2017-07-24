//
//  HaloTimeSlice.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 20/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import Foundation

protocol HasEmptyConstructor {
    init()
}

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
        self.speed = 0.5
        self.complexity = 0.25
        
        self.wobble = 0.0
        
        self.color = [0.05]
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
    
}
