//
//  SeparatorLineView.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 24/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import UIKit

class SeparatorLineView: UIView {
    
    convenience init() {
        self.init(frame: CGRect(x: 0, y: 0, width: UIScreen.main.bounds.width, height: 1))
        
        guard let backgroundColor = self.backgroundColor?.cgColor else { return }
        self.layer.borderColor = backgroundColor
        self.layer.borderWidth = (1.0 / UIScreen.main.scale) / 2;
        self.backgroundColor = UIColor.clear
    }
    
    class func pinToView(view: UIView) {
        
        let line = SeparatorLineView()
        view.addSubview(line)
        
        var allConstraints = [NSLayoutConstraint]()
        
        // overall layout
        allConstraints.append(NSLayoutConstraint(item: line, attribute: .bottom, relatedBy: .equal, toItem: view, attribute: .bottom, multiplier: 1.0, constant: 0.0))
        
        NSLayoutConstraint.activate(allConstraints)
    }

}
