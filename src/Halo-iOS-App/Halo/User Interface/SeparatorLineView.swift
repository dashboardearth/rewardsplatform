//
//  SeparatorLineView.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 24/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import UIKit

class SeparatorLineView: UIView {
    
    private func lineHeight() -> CGFloat {
        return (1.0 / UIScreen.main.scale)
    }
    
    class func pinToView(view: UIView) {
        let line = SeparatorLineView()
        line.setContentCompressionResistancePriority(.required, for: .horizontal)
        line.translatesAutoresizingMaskIntoConstraints = false
        line.backgroundColor = UIColor.gray
        
        view.addSubview(line)
        
        var allConstraints = [NSLayoutConstraint]()
        
        // overall layout
        allConstraints.append(NSLayoutConstraint(item: line, attribute: .bottom, relatedBy: .equal, toItem: view, attribute: .bottom, multiplier: 1.0, constant: 0.0))
        
        allConstraints.append(NSLayoutConstraint(item: line, attribute: .width, relatedBy: .equal, toItem: view, attribute: .width, multiplier: 1.0, constant: 0.0))
        
        allConstraints.append(NSLayoutConstraint(item: line, attribute: .height, relatedBy: .equal, toItem: nil, attribute: .notAnAttribute, multiplier: 1.0, constant:line.lineHeight()))
        
        NSLayoutConstraint.activate(allConstraints)
    }

}
