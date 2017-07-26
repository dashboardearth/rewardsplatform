//
//  UserServiceRequest.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 25/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import Foundation

protocol UserServiceDelegate {
    func onUpdate(countPushEvents: Int)
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
        
        let userName = Player.SharedInstance().userName
        if let url = URL(string: "http://planetdashmshackforgood2017.azurewebsites.net/api/beta/Users(%27\(userName)%27)") {
            request.get(url: url) { (anyObj:[String:Any]) in
                
                let givenName = anyObj["givenName"] as? String
                let lastName = anyObj["lastName"] as? String
                let countPushEvents = anyObj["countPushEvents"] as? Int
                
                self.delegate?.onUpdate(countPushEvents: countPushEvents!)
            }
        }
        
    }
    
}
