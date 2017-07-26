//
//  WebServiceRequest.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 25/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import Foundation

class WebServiceRequest: NSObject {
    
    public func get(url: URL, callback: @escaping ([String:Any]) -> Void) {
        let session = URLSession.shared
        
        var request = URLRequest(url: url)
        request.httpMethod = "GET"
        request.cachePolicy = .reloadIgnoringLocalCacheData
        request.setValue("application/json; charset=utf-8", forHTTPHeaderField: "Content-Type")
        request.setValue("application/json; charset=utf-8", forHTTPHeaderField: "Accept")
        
        let task = session.downloadTask(with: request) { (location, response, error) in
            
            if location == nil {
                print("error no file")
                return
            }
            
            if let anyObj = try? JSONSerialization.jsonObject(with:Data(contentsOf: location!), options: .allowFragments) as! [String:Any] {
                DispatchQueue.main.async {
                    callback(anyObj)
                }
            } else {
                print("error no anyObj")
            }
            
        }
        task.resume()
    }
}
