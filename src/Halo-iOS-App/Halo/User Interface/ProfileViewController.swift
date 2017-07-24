//
//  ProfileViewController.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 24/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import UIKit

class ProfileViewController: UIViewController {
    
    // Views
    private var profileTitleView:UIView?
    private var profileImage:UIImageView?
    private var profileTitleLabel:UILabel?
    private var profileSubtitleLabel:UILabel?
    
    private var tableView:UITableView?
    
    private var haloView:HaloView?
    
    // Data Model
    private var player:Player = Player()
    private var challenges:[Challenge] = []

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        self.setupDataModel()
        
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
        profileTitleLabel.text = self.player.name
        profileTitleLabel.font = UIFont.preferredFont(forTextStyle: .headline)
        profileTitleView.addSubview(profileTitleLabel)
        self.profileTitleLabel = profileTitleLabel
        
        let profileSubtitleLabel = UILabel()
        profileSubtitleLabel.translatesAutoresizingMaskIntoConstraints = false
        profileSubtitleLabel.text = "Active for \(Int(self.player.activeDays)) days"
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
        
        // init HaloView
        
        let viewModel = HaloTimeSlice()
        let frame = CGRect(x: 0, y: 0, width: 400, height: 400)
        self.haloView = HaloView(frame: frame, viewModel: viewModel)
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
    
    func setupDataModel() {
        self.challenges = Challenge.GetList()
        self.player = Player.Load()
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
            return self.challenges.count
        }
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if indexPath.section == 0 {
            let cell = tableView.dequeueReusableCell(withIdentifier: "LabelCell", for: indexPath)
            if let haloView = self.haloView {
                cell.contentView.addSubview(haloView)
            }
            return cell
        } else {
            let cell = tableView.dequeueReusableCell(withIdentifier: "LabelCell", for: indexPath)
            
            if indexPath.row < self.challenges.count {
                let challenge = self.challenges[indexPath.row]
                cell.textLabel?.text = challenge.name
                cell.detailTextLabel?.text = "\(challenge.points) points"
            }
            
            return cell
        }
    }
    
    func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        if section == 0 {
            return ""
        } else {
            return "Completed Challenges"
        }
    }
}

extension ProfileViewController: UITableViewDelegate {
    
    func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        if section == 0 {
            return 0.01
        } else {
            return 20
        }
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        if indexPath.section == 0 {
            return 400
        } else {
            return 80
        }
    }
    
//    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
//
//    }
}
