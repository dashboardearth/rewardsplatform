//
//  Challenge.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 24/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import Foundation

class Challenge {
    public var name:String = ""
    public var details:String = ""
    public var points:Int = 0
    public var isCompleted:Bool = false
    public var imageUrl:URL?
    public var latitude:Double = 0.0
    public var longitude:Double = 0.0
    
    init(name:String, points:Int, isCompleted:Bool) {
        self.name = name
        self.points = points
        self.isCompleted = isCompleted
    }
}

// List of Challenge extension
extension Challenge {
    private static var s_challenges:[Challenge] = []
    
    class func GetList() -> [Challenge] {
        
        var challenges = Challenge.s_challenges
        if challenges.count == 0 {
            challenges.append(Challenge(name:"Create Dashboard Earth Account", points:10, isCompleted: true))
            challenges[0].latitude = 47.642
            challenges[0].longitude = -122.128
            
            challenges.append(Challenge(name:"Volunteer event", points:10, isCompleted: false))
            challenges[1].latitude = 47.641750
            challenges[1].longitude = -122.129363
            
            challenges.append(Challenge(name:"Plant trees", points:50, isCompleted: false))
            challenges[2].latitude = 47.142
            challenges[2].longitude = -122.028
            
            challenges.append(Challenge(name:"Bike to work", points:50, isCompleted: true))
            challenges[3].latitude = 47.442
            challenges[3].longitude = -122.028
            
            challenges.append(Challenge(name:"Write to senator", points:100, isCompleted: false))
            challenges[4].latitude = 47.942
            challenges[4].longitude = -122.728
        }
        
        return challenges
    }
    
    class func GetActiveList() -> [Challenge] {
        let challenges = GetList()
        var results:[Challenge] = []
        for c in challenges {
            if !c.isCompleted {
                results.append(c)
            }
        }
        return results
    }
    
    class func GetCompletedList() -> [Challenge] {
        let challenges = GetList()
        var results:[Challenge] = []
        for c in challenges {
            if c.isCompleted {
                results.append(c)
            }
        }
        return results
    }
}
