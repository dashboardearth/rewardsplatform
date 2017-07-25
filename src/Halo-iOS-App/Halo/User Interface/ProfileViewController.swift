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
    private var tableView:UITableView?
    private var haloCardView:HaloCardView?
    
    // Data Model
    private var player:Player = Player()
    private var challenges:[Challenge] = []

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        self.setupDataModel()
        
        self.setupNavigationBarItems()
        self.layout()
        self.setupConstraints()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func setupNavigationBarItems() {
        if let navigationItem = self.navigationController?.navigationBar.topItem {

            navigationItem.titleView = ProfileHeaderView(frame: CGRect.zero)
            
            let scoreButton = UIBarButtonItem(title: "Score", style: .plain, target: self, action: #selector(scoreTapped))
            navigationItem.rightBarButtonItem = scoreButton
            
        }
    }
    
    @objc func scoreTapped() {
    
    }
    
    func layout() {
        
        // layout tableView
        
        self.tableView = UITableView()
        let tableView = self.tableView!
        tableView.translatesAutoresizingMaskIntoConstraints = false
        tableView.backgroundColor = UIColor(red: 0.95, green: 0.95, blue: 0.95, alpha: 1.0)
        tableView.dataSource = self
        tableView.delegate = self
        tableView.register(UITableViewCell.classForCoder(), forCellReuseIdentifier: "LabelCell")
        
        self.view.addSubview(tableView)
        
        // init HaloView
        self.haloCardView = HaloCardView(frame: CGRect(x: 0, y: 0, width: 400, height: 400))
        self.haloCardView!.translatesAutoresizingMaskIntoConstraints = false
    }
    
    func setupConstraints() {
        
        let views = ["topLayoutGuide": self.topLayoutGuide,
                     "bottomLayoutGuide": self.bottomLayoutGuide,
                     "tableView": self.tableView!] as [String : Any]
        
        var allConstraints = [NSLayoutConstraint]()
        
        // overall layout
        
        allConstraints.append(contentsOf: NSLayoutConstraint.horizontalFillSuperview(view: self.tableView!))
        
        allConstraints.append(contentsOf: NSLayoutConstraint.constraints(
            withVisualFormat: "V:|[topLayoutGuide][tableView][bottomLayoutGuide]|",
            options: [],
            metrics: nil,
            views: views))
        
        NSLayoutConstraint.activate(allConstraints)
    }
    
    func setupDataModel() {
        self.challenges = Challenge.GetCompletedList()
        self.player = Player.SharedInstance()
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
            cell.selectionStyle = .none
            if let haloView = self.haloCardView {
                cell.contentView.addSubview(haloView)
                NSLayoutConstraint.activate(NSLayoutConstraint.fillSuperview(view: haloView))
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
            return 30
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
