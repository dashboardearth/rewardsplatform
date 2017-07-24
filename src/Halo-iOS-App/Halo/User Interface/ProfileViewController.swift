//
//  ProfileViewController.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 24/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import UIKit

class ProfileViewController: UIViewController {
    
    var profileTitleView:UIView?
    var profileImage:UIImageView?
    var profileTitleLabel:UILabel?
    var profileSubtitleLabel:UILabel?
    
    var tableView:UITableView?

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        self.layout()
        self.setupConstraints()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func layout() {
        
        // layout profileTitleView
        
        self.profileTitleView = UIView()
        let profileTitleView = self.profileTitleView!
        profileTitleView.translatesAutoresizingMaskIntoConstraints = false
        profileTitleView.backgroundColor = UIColor(white: 1, alpha: 1)
        self.view.addSubview(profileTitleView)
        
        let profileImage = UIImageView(image: UIImage(named: "profile"))
        profileImage.translatesAutoresizingMaskIntoConstraints = false
        profileImage.contentMode = .scaleAspectFit
        profileTitleView.addSubview(profileImage)
        self.profileImage = profileImage
        
        let profileTitleLabel = UILabel()
        profileTitleLabel.translatesAutoresizingMaskIntoConstraints = false
        profileTitleLabel.text = "Hacker_01"
        profileTitleLabel.font = UIFont.preferredFont(forTextStyle: .headline)
        profileTitleView.addSubview(profileTitleLabel)
        self.profileTitleLabel = profileTitleLabel
        
        let profileSubtitleLabel = UILabel()
        profileSubtitleLabel.translatesAutoresizingMaskIntoConstraints = false
        profileSubtitleLabel.text = "Active 2 days"
        profileSubtitleLabel.font = UIFont.preferredFont(forTextStyle: .subheadline)
        profileTitleView.addSubview(profileSubtitleLabel)
        self.profileSubtitleLabel = profileSubtitleLabel
        
        // layout tableView
        
        self.tableView = UITableView()
        let tableView = self.tableView!
        tableView.translatesAutoresizingMaskIntoConstraints = false
        tableView.dataSource = self
        tableView.delegate = self
        tableView.register(UITableViewCell.classForCoder(), forCellReuseIdentifier: "LabelCell")
        
        self.view.addSubview(tableView)
    }
    
    func setupConstraints() {
        let views = ["tableView": self.tableView!,
                     "profileTitleView" : self.profileTitleView!,
            "profileImage": self.profileImage!,
            "profileTitleLabel": self.profileTitleLabel!,
            "profileSubtitleLabel": self.profileSubtitleLabel!]
        
        var allConstraints = [NSLayoutConstraint]()
        
        // overall layout
        
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "H:|[tableView]|",
            options: [],
            metrics: nil,
            views: views))
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "H:|[profileTitleView]|",
            options: [],
            metrics: nil,
            views: views))
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "V:|[profileTitleView(100)][tableView]|",
            options: [],
            metrics: nil,
            views: views))
        
        // profileTitleView
        
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "H:|[profileImage]-10-[profileTitleLabel]-(>=0)-|",
            options: [],
            metrics: nil,
            views: views))
        
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "V:|-[profileImage]-|",
            options: [],
            metrics: nil,
            views: views))
        
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "V:|-[profileTitleLabel]-0-[profileSubtitleLabel]-|",
            options: [.alignAllLeft],
            metrics: nil,
            views: views))
        
        NSLayoutConstraint.activate(allConstraints)
    }
}

extension ProfileViewController: UITableViewDataSource {
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return 2
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        if section == 0 {
            return 1
        } else {
            return 5
        }
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if indexPath.section == 0 {
            let cell = tableView.dequeueReusableCell(withIdentifier: "LabelCell", for: indexPath)
            cell.textLabel?.text = "Halo"
            return cell
        } else {
            let cell = tableView.dequeueReusableCell(withIdentifier: "LabelCell", for: indexPath)
            cell.textLabel?.text = "Completed Challenge #\(indexPath.row)"
            return cell
        }
    }
    
    func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        if section == 0 {
            return "Personal Halo"
        } else {
            return "Completed Challenges"
        }
    }
}

extension ProfileViewController: UITableViewDelegate {
    
//    func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
//        return 200
//    }
//
//    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
//
//    }
}
