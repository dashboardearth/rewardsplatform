//
//  CityViewViewController.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 24/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import UIKit

class CityViewViewController: UIViewController {
    
    // Views
    private var tableView:UITableView?
    private var mapCardView:MapCardView?
    
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
        
        // init map view
        self.mapCardView = MapCardView(frame: CGRect(x: 0, y: 0, width: 400, height: 400))
        self.mapCardView!.translatesAutoresizingMaskIntoConstraints = false
        
        self.challenges = Challenge.GetActiveList()
        self.player = Player.SharedInstance()
        
        for c in self.challenges {
            self.mapCardView?.addMarker(latitude: c.latitude, longitue: c.longitude)
        }
    }
}

extension CityViewViewController: UITableViewDataSource {
    
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
            if let mapView = self.mapCardView {
                cell.contentView.addSubview(mapView)
                NSLayoutConstraint.activate(NSLayoutConstraint.fillSuperview(view: mapView))
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
            return "Challenges near Me"
        }
    }
}

extension CityViewViewController: UITableViewDelegate {
    
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
