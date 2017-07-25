//
//  MapCardView.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 25/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import UIKit
import GoogleMaps

class MapCardView: UIView {
    
    private var containerView:UIView?
    private var mapView:GMSMapView?
    private var currentMarker:GMSMarker?
    private var currentCamera:GMSCameraPosition?

    override init(frame: CGRect) {
        super.init(frame: frame)
        
        self.backgroundColor = UIColor(red: 0.95, green: 0.95, blue: 0.95, alpha: 1.0)
        
        let containerView = UIView()
        containerView.translatesAutoresizingMaskIntoConstraints = false
        
        // add round corner and shadow
        containerView.backgroundColor = UIColor.white
        containerView.layer.cornerRadius = 12
        containerView.layer.masksToBounds = true
        
        self.addSubview(containerView)
        self.containerView = containerView
        
        let camera = GMSCameraPosition.camera(withLatitude: 47.642, longitude: -122.128, zoom: 15.0)
        self.currentCamera = camera
        let mapWidth = UIScreen.main.bounds.size.width
        let frame = CGRect(x: 0, y: 0, width: mapWidth, height: mapWidth)
        let mapView = GMSMapView.map(withFrame: frame, camera: camera)
        mapView?.translatesAutoresizingMaskIntoConstraints = false
        
        // Creates a marker in the center of the map.
        let marker = GMSMarker()
        marker.position = CLLocationCoordinate2D(latitude: 47.642, longitude: -122.128)
        marker.icon = GMSMarker.markerImage(with: .blue)
        marker.title = "Current Location"
        marker.snippet = "Current Location"
        marker.map = mapView
        self.currentMarker = marker
        
        containerView.addSubview(mapView!)
        
        self.mapView = mapView
        
        self.setupConstraints()
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func setupConstraints() {
        
        let views = ["containerView": self.containerView!,
                     "mapView": self.mapView!] as [String : Any]
        
        var allConstraints = [NSLayoutConstraint]()
        
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "V:|-8-[containerView]-8-|",
            options: [],
            metrics: nil,
            views: views))
        
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "H:|-8-[containerView]-8-|",
            options: [],
            metrics: nil,
            views: views))
        
        allConstraints.append(contentsOf: NSLayoutConstraint.fillSuperview(view: self.mapView!))
        
        NSLayoutConstraint.activate(allConstraints)
    }
    
    func addMarker(latitude: Double, longitue: Double) {
        let marker = GMSMarker()
        marker.position = CLLocationCoordinate2D(latitude: latitude, longitude: longitue)
        marker.title = "Redmond, WA"
        marker.snippet = "Redmond"
        marker.map = self.mapView
    }
    
    func moveCurrentMarker(latitude: Double, longitue: Double) {
        self.currentMarker?.position = CLLocationCoordinate2D(latitude: latitude, longitude: longitue)
    }
    
    func updateCameraPosition(latitude: Double, longitue: Double) {
        let cameraUpdate = GMSCameraUpdate.setTarget(CLLocationCoordinate2D(latitude: latitude, longitude: longitue))
        self.mapView?.animate(with: cameraUpdate)
    }

}
