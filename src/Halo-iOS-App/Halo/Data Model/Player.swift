//
//  Player.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 24/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import Foundation

class Player {
    public var name:String = ""
    public var activeDays:Double = 0
    public var firstSeenDate:Date = Date()
    public var score:Int = 0
}

extension Player {
    
    private static var s_player:Player?
    private static let defaultsKeyForName:String = "PlayerName"
    private static let defaultsKeyForFirstSeenDate:String = "PlayerFirstSeenDate"
    
    class func SharedInstance() -> Player {
        if Player.s_player == nil {
            let p = Player()
            let defaults = UserDefaults.standard
            
            if let name = defaults.string(forKey: Player.defaultsKeyForName) {
                p.name = name
            } else {
                p.name = "Hacker 01"
            }
            
            if let firstSeenDate = defaults.object(forKey: Player.defaultsKeyForFirstSeenDate) as? Date {
                p.firstSeenDate = firstSeenDate
            } else {
                let firstSeenDate = Date()
                defaults.set(firstSeenDate, forKey: Player.defaultsKeyForFirstSeenDate)
                p.firstSeenDate = firstSeenDate
            }
            
            p.activeDays = Date().timeIntervalSince(p.firstSeenDate) / (24.0 * 60.0 * 60.0);
            
            Player.s_player = p
        }
        return Player.s_player!
    }
}
