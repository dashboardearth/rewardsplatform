//
//  NSLayoutConstraintHelper.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 24/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import UIKit

extension NSLayoutConstraint {
    
    class func fillSuperview(view: UIView) -> [NSLayoutConstraint] {
        var allConstraints = [NSLayoutConstraint]()
        let views = ["view": view]
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "H:|[view]|",
            options: [],
            metrics: nil,
            views: views))
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "V:|[view]|",
            options: [],
            metrics: nil,
            views: views))
        return allConstraints
    }
    
    class func horizontalFillSuperview(view: UIView) -> [NSLayoutConstraint] {
        var allConstraints = [NSLayoutConstraint]()
        let views = ["view": view]
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "H:|[view]|",
            options: [],
            metrics: nil,
            views: views))
        return allConstraints
    }
    
    class func pinCenterSuperview(view: UIView) -> [NSLayoutConstraint] {
        var allConstraints = [NSLayoutConstraint]()
        allConstraints.append(NSLayoutConstraint(item: view, attribute: .centerX, relatedBy: .equal, toItem: view.superview!, attribute: .centerX, multiplier: 1.0, constant: 0.0))
        allConstraints.append(NSLayoutConstraint(item: view, attribute: .centerY, relatedBy: .equal, toItem: view.superview!, attribute: .centerY, multiplier: 1.0, constant: 0.0))
        return allConstraints
    }
}
