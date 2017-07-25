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
    
    init(name:String, points:Int) {
        self.name = name
        self.points = points
    }
}

// List of Challenge extension
extension Challenge {
    private static var s_challenges:[Challenge] = []
    
    class func GetList() -> [Challenge] {
        
        var challenges = Challenge.s_challenges
        if challenges.count == 0 {
            challenges.append(Challenge(name:"Create Dashboard Earth Account", points:10))
            challenges.append(Challenge(name:"Reuse water cup at work", points:10))
            challenges.append(Challenge(name:"Plant trees", points:50))
            challenges.append(Challenge(name:"Bike to work", points:50))
            challenges.append(Challenge(name:"Write to senator", points:100))
        }
        
        return challenges
    }
}
