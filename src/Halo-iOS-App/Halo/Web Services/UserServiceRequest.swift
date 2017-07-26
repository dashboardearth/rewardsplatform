//
//  UserServiceRequest.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 25/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import Foundation

protocol UserServiceDelegate {
    func onUpdate(countPushEvents: Int, halo: Halo)
}

class Halo {
    var size:Float = 0.0
    var speed:Float = 0.0
    var brightness:Float = 0.0
    var complexity:Float = 0.0
    var color:Float = 0.0
    var wobble:Float = 0.0
    var colorCenter:Float = 0.0
    var colorCenterRatio:Float = 0.0
    var waveCount:Int = 0
    var highlightRing:Float = 0.0
}

class UserServiceRequest:NSObject {
    
    private var request:WebServiceRequest?
    private var timer:Timer?
    
    public var delegate:UserServiceDelegate?
    
    func scheduleGetDataTask() {
        self.timer = Timer.scheduledTimer(
            timeInterval: 5.0, //in seconds
            target: self,
            selector: #selector(tick),
            userInfo: nil,
            repeats: true)
    }
    
    deinit {
        if self.timer != nil {
            self.timer?.invalidate()
        }
    }
    
    @objc func tick() {
        
        self.getData()
        
    }
    
    func getData() {
        
        let request = WebServiceRequest()
        
//        let userName = Player.SharedInstance().userName
        let userName = "un1crom"
        if let url = URL(string: "http://planetdashmshackforgood2017.azurewebsites.net/api/beta/Users(%27\(userName)%27)") {
            request.get(url: url) { (anyObj:[String:Any]) in
                
                
//                {"@odata.context":"http://planetdashmshackforgood2017.azurewebsites.net/api/beta/$metadata#Users/$entity","givenName":"R","lastName":"F","userName":"un1crom","hashPassword":null,"partitionId":"29dfc935-f699-468e-8104-158f2faa71f8","entityType":"User","alternateIds":[],"experience":0,"level":0,"currency":0.0,"loginStreak":0,"countPushEvents":0,"size":2.0,"speed":7.5,"brightness":1.0,"complexity":1.0,"color":0.0,"wobble":1.0,"colorCenter":15.0,"colorCenterRatio":14.0,"waveCount":2,"highlightRing":15.0,"haloUrl":null,"id":"29dfc935-f699-468e-8104-158f2faa71f8"}
                
                let givenName = anyObj["givenName"] as? String
                let lastName = anyObj["lastName"] as? String
                let countPushEvents = anyObj["countPushEvents"] as? Int
                
                let halo = Halo()
                
                if let size = anyObj["size"] as? Float { halo.size = size }
                if let speed = anyObj["speed"] as? Float { halo.speed = speed }
                if let brightness = anyObj["brightness"] as? Float { halo.brightness = brightness }
                if let complexity = anyObj["complexity"] as? Float { halo.complexity = complexity }
                if let color = anyObj["color"] as? Float { halo.color = color }
                if let wobble = anyObj["wobble"] as? Float { halo.wobble = wobble }
                if let colorCenter = anyObj["colorCenter"] as? Float { halo.colorCenter = colorCenter }
                if let colorCenterRatio = anyObj["colorCenterRatio"] as? Float { halo.colorCenterRatio = colorCenterRatio }
                if let waveCount = anyObj["waveCount"] as? Int { halo.waveCount = waveCount }
                if let highlightRing = anyObj["highlightRing"] as? Float { halo.highlightRing = highlightRing }
                
                self.delegate?.onUpdate(countPushEvents: countPushEvents!, halo: halo)
            }
        }
    }
    
    //    POST http://planetdashmshackforgood2017.azurewebsites.net/api/beta/Users
    //
    //    content-type: application/json
    //
    //    {
    //    "givenName":"Jon",
    //    "lastName":"Doe",
    //    "userName" : "Jone.Doe@contos.com"
    //    }
    
    func createUser(userName:String, givenName:String, lastName:String) {
        
        let param = ["userName": userName, "givenName": givenName, "lastName": lastName]
        
        let request = WebServiceRequest()
        
//        request.post(url: "http://planetdashmshackforgood2017.azurewebsites.net/api/beta/Users", param: param) { (sucess:Bool) in
        
//        }
    }
    
}
