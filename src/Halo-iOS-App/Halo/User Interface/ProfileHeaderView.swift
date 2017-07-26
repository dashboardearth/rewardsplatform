//
//  ProfileHeaderView.swift
//  Halo
//
//  Created by Sattawat Suppalertporn on 25/7/17.
//  Copyright © 2017 dashboardearth. All rights reserved.
//

import UIKit

class ProfileHeaderView: UIView {
    
    private var profileImage:UIImageView?
    private var profileTitleLabel:UILabel?
    private var profileSubtitleLabel:UILabel?
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        
        let profileImage = UIImageView(image: UIImage(named: "profile"))
        profileImage.translatesAutoresizingMaskIntoConstraints = false
        profileImage.contentMode = .scaleAspectFit
        self.addSubview(profileImage)
        self.profileImage = profileImage
        
        let profileTitleLabel = UILabel()
        profileTitleLabel.translatesAutoresizingMaskIntoConstraints = false
        profileTitleLabel.text = Player.SharedInstance().userName
        profileTitleLabel.font = UIFont.boldSystemFont(ofSize: 12)
        self.addSubview(profileTitleLabel)
        self.profileTitleLabel = profileTitleLabel
        
        let profileSubtitleLabel = UILabel()
        profileSubtitleLabel.translatesAutoresizingMaskIntoConstraints = false
        profileSubtitleLabel.text = "Active for \(Int(Player.SharedInstance().activeDays)) days"
        profileSubtitleLabel.font = UIFont.systemFont(ofSize: 10)
        self.addSubview(profileSubtitleLabel)
        self.profileSubtitleLabel = profileSubtitleLabel
        
        self.setupConstraints()
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func setupConstraints() {
        let views = ["profileImage": self.profileImage!,
                     "profileTitleLabel": self.profileTitleLabel!,
                     "profileSubtitleLabel": self.profileSubtitleLabel!] as [String : Any]
        
        var allConstraints = [NSLayoutConstraint]()
        
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
            withVisualFormat: "V:|-[profileTitleLabel][profileSubtitleLabel]-|",
            options: [.alignAllLeft],
            metrics: nil,
            views: views))
        
        NSLayoutConstraint.activate(allConstraints)
    }
}
