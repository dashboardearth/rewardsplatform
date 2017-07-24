//
//  HaloController.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 20/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import UIKit

class HaloViewController: UIViewController {
    
    var haloView: HaloView? = nil // todo move to IB

    override func viewDidLoad() {
        super.viewDidLoad()
        
        let viewModel = HaloTimeSlice()
        self.haloView = HaloView(frame: self.view.frame, viewModel: viewModel)
        
        self.view.addSubview(self.haloView!)
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
