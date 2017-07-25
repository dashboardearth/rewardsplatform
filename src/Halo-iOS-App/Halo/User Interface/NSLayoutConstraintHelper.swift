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
}
