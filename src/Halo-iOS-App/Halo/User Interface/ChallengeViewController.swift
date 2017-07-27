//
//  ChallengeViewController.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 26/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import UIKit

class ChallengeViewController: UIViewController {
    
    private var name:UILabel?
    private var imageView:UIImageView?
    private var completeButton:UIButton?
    
    //private var 

    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.view.backgroundColor = UIColor.white
        
        let name = UILabel()
        name.translatesAutoresizingMaskIntoConstraints = false
        name.text = "Volunteer event"
        name.font = UIFont.preferredFont(forTextStyle: .title1)
        self.view.addSubview(name)
        self.name = name
//        SeparatorLineView.pinToView(view: name)
        
        let imageView = UIImageView()
        imageView.translatesAutoresizingMaskIntoConstraints = false
        imageView.image = UIImage(named: "event")
        imageView.contentMode = .scaleAspectFit
        self.view.addSubview(imageView)
        self.imageView = imageView
        
        let completeButton = UIButton()
        completeButton.translatesAutoresizingMaskIntoConstraints = false
        completeButton.backgroundColor = UIColor(red: 0.9, green: 0.9, blue: 0.9, alpha: 1.0)
        completeButton.layer.cornerRadius = 12
        completeButton.layer.masksToBounds = true
        completeButton.layer.borderColor = UIColor.gray.cgColor
        completeButton.layer.borderWidth = 5.0
        completeButton.setTitle("Complete", for: .normal)
        completeButton.setTitleColor(UIColor.black, for: .normal)
        completeButton.setTitleColor(UIColor.blue, for: .highlighted)
        completeButton.addTarget(self, action: #selector(completeButtonTapped), for: .touchUpInside)
        self.view.addSubview(completeButton)
        self.completeButton = completeButton

        // Do any additional setup after loading the view.
        
        let views = ["topLayoutGuide": self.topLayoutGuide,
                     "bottomLayoutGuide": self.bottomLayoutGuide,
                     "name": self.name!,
                     "imageView": self.imageView!,
                     "completeButton": self.completeButton!] as [String : Any]
        
        var allConstraints = [NSLayoutConstraint]()
        
        // overall layout
        
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "H:|-20-[name]-20-|",
            options: [],
            metrics: nil,
            views: views))
        allConstraints.append(contentsOf: NSLayoutConstraint.horizontalFillSuperview(view: self.imageView!))
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "H:|-40-[completeButton]-40-|",
            options: [],
            metrics: nil,
            views: views))
        
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "V:|[topLayoutGuide]-20-[name]-[imageView]-100-[completeButton]-(>=0)-[bottomLayoutGuide]|",
            options: [.alignAllCenterX],
            metrics: nil,
            views: views))
        
        NSLayoutConstraint.activate(allConstraints)
    }
    
    @objc func completeButtonTapped() {
        self.navigationController?.dismiss(animated: true, completion: nil)
        
        
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
