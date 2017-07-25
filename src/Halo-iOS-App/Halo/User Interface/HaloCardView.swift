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
    
    private var topView:UIView?
    private var middleView:UIView?
    private var bottomView:UIView?
    
    private var haloView:HaloView?
    private var todayDateLabel:UILabel?
    private var scoreLabel:UILabel?
    private var redeemButton:UIButton?
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        
        let topView = UIView()
        topView.translatesAutoresizingMaskIntoConstraints = false
        topView.backgroundColor = UIColor.green
        self.addSubview(topView)
        self.topView = topView
        
        let middleView = UIView()
        middleView.translatesAutoresizingMaskIntoConstraints = false
        middleView.backgroundColor = UIColor.blue
        self.addSubview(middleView)
        self.middleView = middleView
        
        let bottomView = UIView()
        bottomView.translatesAutoresizingMaskIntoConstraints = false
        bottomView.backgroundColor = UIColor.purple
        self.addSubview(bottomView)
        self.bottomView = bottomView
        
        // top view
        
        let todayDateLabel = UILabel()
        todayDateLabel.translatesAutoresizingMaskIntoConstraints = false
        let formatter = DateFormatter()
        formatter.dateFormat = "d MMM"
        todayDateLabel.text = formatter.string(from: Date())
        todayDateLabel.font = UIFont.preferredFont(forTextStyle: .title1)
        topView.addSubview(todayDateLabel)
        self.todayDateLabel = todayDateLabel
        
        // middle view
        
        let viewModel = HaloTimeSlice()
        let frame = CGRect(x: 0, y: 0, width: HaloCardView.haloSize, height: HaloCardView.haloSize)
        let haloView = HaloView(frame: frame, viewModel: viewModel)
        haloView.translatesAutoresizingMaskIntoConstraints = false
        haloView.backgroundColor = UIColor.red
        middleView.addSubview(haloView)
        self.haloView = haloView
        
        // bottom view
        
        let scoreLabel = UILabel()
        scoreLabel.translatesAutoresizingMaskIntoConstraints = false
        scoreLabel.text = "10"
        scoreLabel.font = UIFont.preferredFont(forTextStyle: .title1)
        bottomView.addSubview(scoreLabel)
        self.scoreLabel = scoreLabel
        
        let redeemButton = UIButton()
        redeemButton.translatesAutoresizingMaskIntoConstraints = false
        redeemButton.setTitle("REDEEM", for: .normal)
        redeemButton.setTitleColor(UIColor.black, for: .normal)
        redeemButton.setTitleColor(UIColor.gray, for: .highlighted)
        bottomView.addSubview(redeemButton)
        self.redeemButton = redeemButton
        
        self.setupConstraints()
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func setupConstraints() {
        
        let views = ["topView": self.topView!,
                     "middleView": self.middleView!,
                     "bottomView": self.bottomView!,
                     "haloView": self.haloView!,
                     "todayDateLabel" : self.todayDateLabel!,
                     "scoreLabel": self.scoreLabel!,
                     "redeemButton": self.redeemButton!] as [String : Any]
        
        var allConstraints = [NSLayoutConstraint]()
        
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
        
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "V:|[todayDateLabel]|",
            options: [],
            metrics: nil,
            views: views))
        
        // middle view
        
        let haloView = self.haloView!
        let middleView = self.middleView!
        allConstraints.append(NSLayoutConstraint(item: haloView, attribute: .centerX, relatedBy: .equal, toItem: middleView, attribute: .centerX, multiplier: 1.0, constant: 0.0))
        allConstraints.append(NSLayoutConstraint(item: haloView, attribute: .centerY, relatedBy: .equal, toItem: middleView, attribute: .centerY, multiplier: 1.0, constant: 0.0))
        allConstraints.append(NSLayoutConstraint(item: haloView, attribute: .width, relatedBy: .equal, toItem: nil, attribute: .notAnAttribute, multiplier: 1.0, constant: CGFloat(HaloCardView.haloSize)))
        allConstraints.append(NSLayoutConstraint(item: haloView, attribute: .height, relatedBy: .equal, toItem: nil, attribute: .notAnAttribute, multiplier: 1.0, constant: CGFloat(HaloCardView.haloSize)))
        
        // bottom view
        
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "V:|[scoreLabel]|",
            options: [],
            metrics: nil,
            views: views))
        
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "H:|[scoreLabel][redeemButton]|",
            options: [.alignAllCenterY],
            metrics: nil,
            views: views))
        
        NSLayoutConstraint.activate(allConstraints)
    }
}
