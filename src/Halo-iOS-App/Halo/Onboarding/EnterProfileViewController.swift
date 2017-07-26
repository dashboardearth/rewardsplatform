//
//  EnterProfileViewController.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 25/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import UIKit

class EnterProfileViewController: UIViewController {

    @IBOutlet weak var confirmButton: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        
        self.confirmButton.addTarget(self, action: #selector(confirmTapped), for: .touchUpInside)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @objc func confirmTapped() {
        let appDelegate = UIApplication.shared.delegate as! AppDelegate
        
        let root = UIStoryboard(name: "Main", bundle: nil).instantiateInitialViewController()
        appDelegate.window?.rootViewController = root
        
        Player.setIsFirstLaunchCompleted()
    }

}
