//
//  RootNavigationController.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 26/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import UIKit

class RootNavigationController: UINavigationController {
    
    private var haloCardBackgroundView:UIView?
    private var haloCardView:HaloView?

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        
        let haloCardBackgroundView = UIView(frame: CGRect(x: 8, y: 8, width: 120, height: 120))
        haloCardBackgroundView.backgroundColor = UIColor.white
        haloCardBackgroundView.layer.cornerRadius = 12
        haloCardBackgroundView.layer.masksToBounds = true
        self.haloCardBackgroundView = haloCardBackgroundView
        self.view.addSubview(haloCardBackgroundView)
        
        let viewModel = HaloTimeSlice()
        self.haloCardView = HaloView(frame: CGRect(x: 0, y: 0, width: 120, height: 120), viewModel:viewModel)
        self.haloCardView?.translatesAutoresizingMaskIntoConstraints = false
        haloCardBackgroundView.addSubview(self.haloCardView!)
        NSLayoutConstraint.activate(NSLayoutConstraint.fillSuperview(view: self.haloCardView!))
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func showHalo() {
        self.haloCardBackgroundView?.isHidden = false
    }
    
    func hideHalo() {
        self.haloCardBackgroundView?.isHidden = true
    }

}
