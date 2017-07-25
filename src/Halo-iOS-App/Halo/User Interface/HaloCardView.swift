//
//  HaloCardView.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 24/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import UIKit

class HaloCardView: UIView {
    
    private static let haloSize:Double = 300
    
    private var containerView:UIView?
    
    private var topView:UIView?
    private var middleView:UIView?
    private var bottomView:UIView?
    
    private var haloView:HaloView?
    private var dailyProgressLabel:UILabel?
    
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
        
        let topView = UIView()
        topView.translatesAutoresizingMaskIntoConstraints = false
        containerView.addSubview(topView)
        self.topView = topView
        
        let middleView = UIView()
        middleView.translatesAutoresizingMaskIntoConstraints = false
        containerView.addSubview(middleView)
        self.middleView = middleView
        
        let bottomView = UIView()
        bottomView.translatesAutoresizingMaskIntoConstraints = false
        containerView.addSubview(bottomView)
        self.bottomView = bottomView
        
        // top view
        
        
        // middle view
        
        let viewModel = HaloTimeSlice()
        let frame = CGRect(x: 0, y: 0, width: HaloCardView.haloSize, height: HaloCardView.haloSize)
        let haloView = HaloView(frame: frame, viewModel: viewModel)
        haloView.translatesAutoresizingMaskIntoConstraints = false
        middleView.addSubview(haloView)
        self.haloView = haloView
        
        // bottom view
        
        let dailyProgressLabel = UILabel()
        dailyProgressLabel.translatesAutoresizingMaskIntoConstraints = false
        dailyProgressLabel.text = "Daily progress"
        dailyProgressLabel.font = UIFont.preferredFont(forTextStyle: .title3)
        bottomView.addSubview(dailyProgressLabel)
        self.dailyProgressLabel = dailyProgressLabel
        
        self.setupConstraints()
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func setupConstraints() {
        
        let views = ["containerView": self.containerView!,
            "topView": self.topView!,
            "middleView": self.middleView!,
            "bottomView": self.bottomView!,
            "haloView": self.haloView!,
            "dailyProgressLabel": self.dailyProgressLabel!] as [String : Any]
        
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
        
        // overall layout
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "V:|[topView][middleView][bottomView]|",
            options: [],
            metrics: nil,
            views: views))
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "H:|[topView]|",
            options: [],
            metrics: nil,
            views: views))
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "H:|[middleView]|",
            options: [],
            metrics: nil,
            views: views))
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "H:|[bottomView]|",
            options: [],
            metrics: nil,
            views: views))
        
        // top view
        
        
        // middle view
        
        let haloView = self.haloView!
        let middleView = self.middleView!
        allConstraints.append(NSLayoutConstraint(item: haloView, attribute: .centerX, relatedBy: .equal, toItem: middleView, attribute: .centerX, multiplier: 1.0, constant: 0.0))
        allConstraints.append(NSLayoutConstraint(item: haloView, attribute: .centerY, relatedBy: .equal, toItem: middleView, attribute: .centerY, multiplier: 1.0, constant: 0.0))
        allConstraints.append(NSLayoutConstraint(item: haloView, attribute: .width, relatedBy: .equal, toItem: nil, attribute: .notAnAttribute, multiplier: 1.0, constant: CGFloat(HaloCardView.haloSize)))
        allConstraints.append(NSLayoutConstraint(item: haloView, attribute: .height, relatedBy: .equal, toItem: nil, attribute: .notAnAttribute, multiplier: 1.0, constant: CGFloat(HaloCardView.haloSize)))
        
        // bottom view
        
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "V:|[dailyProgressLabel]-4-|",
            options: [],
            metrics: nil,
            views: views))
        
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "H:|-8-[dailyProgressLabel]-8-|",
            options: [.alignAllCenterY],
            metrics: nil,
            views: views))
        
        NSLayoutConstraint.activate(allConstraints)
    }
    
}
