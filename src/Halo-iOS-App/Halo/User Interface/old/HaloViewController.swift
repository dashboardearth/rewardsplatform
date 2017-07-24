//
//  HaloViewController.swift
//  Halo
//
//  Created by Michael Langford on 10/26/16.
//  Copyright © 2016 Rowdy Labs LLC. All rights reserved.
//

import UIKit
import MessageUI
import WebKit

extension WKWebView {
    func screenshot() -> UIImage? {
        UIGraphicsBeginImageContextWithOptions(self.bounds.size, true, 0);
        self.drawHierarchy(in: self.bounds, afterScreenUpdates: true);
        let snapshotImage = UIGraphicsGetImageFromCurrentImageContext();
        UIGraphicsEndImageContext();
        return snapshotImage;
    }
}


let thinGrayLineColor = UIColor(red:0.15, green:0.15, blue:0.15, alpha:1.00)

/// Fixes problems with double to integer conversion in UIs where we don't really care that much about NaN
func safeInt(_ d: Double) -> Int {
    guard d != Double.nan && d != Double.infinity else {
        return -1
    }

    return Int(d)
}


extension Bundle {
    var releaseVersionNumber: String? {
        return infoDictionary?["CFBundleShortVersionString"] as? String
    }
    var buildVersionNumber: String? {
        return infoDictionary?["CFBundleVersion"] as? String
    }
}

class HaloViewController: UIViewController, StoreSubscriber, MFMailComposeViewControllerDelegate {

    var haloView: HaloView? = nil // todo move to IB

    ///the charts that are below the halo
    @IBOutlet weak var exerciseChart: LittleBarChartView!
    @IBOutlet weak var activityChart: LittleBarChartView!
    @IBOutlet weak var intensityChart: LittleBarChartView!
    @IBOutlet weak var stepsChart: LittleBarChartView!

    @IBOutlet weak var webViewContainer: UIView!
    @IBOutlet weak var loadingView: UILabel!

    @IBOutlet weak var steps: UILabel!
    @IBOutlet weak var restingHR: UILabel!
    @IBOutlet weak var peakHR: UILabel!
    @IBOutlet weak var exerciseHR: UILabel!
    @IBOutlet weak var exerciseDuration: UILabel!

    @IBOutlet weak var workoutMinutesName: UILabel!

    @IBOutlet weak var statsBox: UIView!
    @IBOutlet weak var haloBox: UIView!
    @IBOutlet weak var chartBox: UIView!
    @IBOutlet weak var stat1Box: UIStackView!
    @IBOutlet weak var stat2Box: UIStackView!
    @IBOutlet weak var stat3Box: UIStackView!
    
    @IBOutlet weak var statLine0: UIView!
    @IBOutlet weak var statLine1: UIView!
    
    @IBOutlet weak var statLine2: UIView!
    
    @IBOutlet weak var verticalStatBorder: UIView!
    @IBOutlet weak var chartTopLine: UIView!
    @IBOutlet weak var tierBoxName: UILabel!
    @IBOutlet weak var chartLine1: UIView!
    @IBOutlet weak var chartLine2: UIView!
    @IBOutlet weak var chartLine3: UIView!
    @IBOutlet weak var chartLine4: UIView!
    var isEnergyMap = false
    var dataProvider: HealthDataProvider =  HealthKitDataProvider()
    var historyDates:[Date]?

    var liveMode: Bool = true {
        didSet {
            self.haloView?.liveMode = liveMode
            
        }
    }

    @IBOutlet weak var descriptionOfHalo: UILabel!
    var projectedTitle = "Now"

    @IBOutlet weak var tierLabel: UILabel!

    var date: Date = Date().rightTimeOfDay() {
        willSet {
            self.date = newValue.rightTimeOfDay()
        }
        didSet {
            setOffNewDataRequest(didJustSetDate: true)
            updateTierWindowDates()
        }
    }

    var timer: Timer? = nil

    func updateTierWindowDates(){
        self.historyDates = [self.date]
    }
    
    func setOffNewDataRequest(didJustSetDate: Bool) {
        guard !needsToOnboard() else{
            return //prevent popup for health data
        }
        
        self.dataProvider.fetchHealthData(dayEndingAt: date) { healthData, error in
            print("got back health data, Error: \(error)")
        }

        if didJustSetDate { // need these for the tier
            self.updateTierWindowDates()
            DispatchQueue.main.asyncAfter(deadline: .now()) {
                self.dataProvider.fetchHealthDataForTier(dates: self.historyDates!) { healthData, error in
                    print("got back health data, Error: \(error)")
                }
            }
        }
    }

    let onboardingKey = "userDidSeeOnboarding_onboardingGate1"
    func needsToOnboard()->Bool{
        return !UserDefaults.standard.bool(forKey: onboardingKey)
    }
    
    func markOnboarded(){
        UserDefaults.standard.setValue(true, forKey: onboardingKey)
    }
    
    func checkForOnboarding() {
        guard needsToOnboard() else {
            return // only show this once, add the version in case
        }
        UserDefaults.standard.setValue(true, forKey: onboardingKey)
    }

    // handles rollover at night
    func updateDateToNow() {
        //date = Date().rightTimeOfDay() // has as a side effect to setoff new data request
        setOffNewDataRequest(didJustSetDate:false)
    }

    func setupLiveMode() {
        // we don't need the energy map updating all the time, it's
        //  10 minutes intervals, so half that will faithfully represent it
        let liveHaloUpdateInterval: TimeInterval = 10 // seconds
        let energyMapUpdateInterval: TimeInterval = 60 * 5 // seconds //FIXME make this notice midnight sooner
        let delayTime: TimeInterval = isEnergyMap ? energyMapUpdateInterval : liveHaloUpdateInterval
        DispatchQueue.main.asyncAfter(deadline: .now() + delayTime) {
            if self.isViewLoaded && self.view.window != nil {
                self.updateDateToNow() // has as a side effect to setoff new data request
                self.setupLiveMode() // recurse to repeat
            }
        }
    }

    
    @IBAction func chartsSectionTapped(_ sender: Any) {
        let storyboard = UIStoryboard(name: "Main", bundle: nil)
        let controller = storyboard.instantiateViewController(withIdentifier: "DailyScoreHelp")
        self.navigationController?.show(controller, sender: self)
        
    }
    
    
    var haloIsSetup = false
    func setupHalo() {
        guard !haloIsSetup else {
            return
        }

        haloIsSetup = true
        let rect = CGRect(origin: CGPoint(x: 0, y: 0), size: webViewContainer.bounds.size)
        let viewModel = mainStore.state.haloViewModels[date.hashForm()]!
        self.haloView = HaloView(frame: rect, viewModel: viewModel)

        guard let oraHalo = haloView else {
            return
        }

        self.haloView?.liveMode = self.liveMode
        webViewContainer.insertSubview(oraHalo, at: 0)

        updateHalo()
        oraHalo.onceLoadedCallback = { success in
            self.loadingView.alpha = 0.0

            // give it a little kick when the halo loads
            UIImpactFeedbackGenerator(style: .light).impactOccurred()
            self.updateHalo()
        }
    }

    @IBAction func haloTap(_ sender: Any) {
        switch isEnergyMap{
        case true:
            let storyboard = UIStoryboard(name: "Main", bundle: nil)
            let controller = storyboard.instantiateViewController(withIdentifier: "EnergyMapHelp")
            self.navigationController?.show(controller, sender: self)
            
        case false:
            let storyboard = UIStoryboard(name: "Main", bundle: nil)
            let controller = storyboard.instantiateViewController(withIdentifier: "HeartHaloHelp")
            self.navigationController?.show(controller, sender: self)
            
        }
        
    }
 
    func setBorderColor(color:UIColor){
        let borderedItems = [
            statLine0,statLine1,statLine2,chartTopLine,verticalStatBorder,chartLine1,chartLine2,chartLine3,chartLine4
        ]
        borderedItems.forEach { (view) in
            view?.backgroundColor = color
        }
    }
    @IBOutlet weak var defaultAgeWarning: UILabel!
    func defaultAgeTapped(_ tap:UITapGestureRecognizer){
        let storyboard = UIStoryboard(name: "Main", bundle: nil)
        let controller = storyboard.instantiateViewController(withIdentifier: "AgeHelp")
        self.navigationController?.show(controller, sender: self)
        
    }
    
    
    
    
    @IBAction func tappedSendBugData(_ sender: Any) {
        print("bug data: \(debugOutputText(date: self.date))")
        sendEmail()
        
    }
    
  

    
    func sendEmail() {
        
        if MFMailComposeViewController.canSendMail() {
            let mail = MFMailComposeViewController()
            mail.mailComposeDelegate = self
            let emptyString = ""
            mail.setSubject("Bug Data Dump Version \(Bundle.main.releaseVersionNumber ?? emptyString)b(\(Bundle.main.buildVersionNumber ?? emptyString))")
            mail.setToRecipients(["stephen+betafeedbackmailerbutton@ora.systems"])
            mail.setMessageBody("Write any comments you have up here:\n\n\n\n\n\n/EndComments\n\n\(self.date)\n\n\(debugOutputText(date: self.date))\n\nself.date", isHTML: false)
            let image = self.haloView?.screenshot() ?? UIImage()
            let imageData: Data = UIImagePNGRepresentation(image)!
            mail.addAttachmentData(imageData, mimeType: "image/png", fileName: "halosnap")
            present(mail, animated: true)
        } else {
            // show failure alert
        }
    }
    
    func mailComposeController(_ controller: MFMailComposeViewController, didFinishWith result: MFMailComposeResult, error: Error?) {
        controller.dismiss(animated: true)
    }
    
    override func viewDidLoad() {
        self.exerciseHR?.text = "N/A"
        self.exerciseDuration?.text = "N/A"
        self.peakHR?.text = "N/A"
        self.restingHR?.text = "N/A"
        self.steps?.text = ""
        self.workoutMinutesName?.text = ""
        self.loadingView.alpha = 1.0
        
       // self.navigationItem.rightBarButtonItem = nil//for release, hide bug reporter
        
        self.defaultAgeWarning.isUserInteractionEnabled = true
        self.defaultAgeWarning.addGestureRecognizer(UITapGestureRecognizer(target: self, action: #selector(self.defaultAgeTapped(_:))))
        
        self.descriptionOfHalo.isUserInteractionEnabled = true
        self.descriptionOfHalo.addGestureRecognizer(UITapGestureRecognizer(target: self, action: #selector(self.haloTap(_:))))
        
        setBorderColor(color: thinGrayLineColor)

        tierLabel.text = ""
        self.navigationItem.title = projectedTitle
        self.updateTierWindowDates()
        updateChartsAndTier(dates:self.historyDates!)
        setOffNewDataRequest(didJustSetDate: true)
        
        
    }

    override func viewDidAppear(_ animated: Bool) {

        setupHalo() // we cannot init this until here because the bounds will be wrong

        checkForOnboarding()
    }

    override func viewWillAppear(_ animated: Bool) {
        ReSwiftGCDQueue.async{
            mainStore.subscribe(self)
        }
        self.view.setNeedsLayout()
        if liveMode {
            setupLiveMode()
        }
        
        self.tierBoxName?.text  = liveMode ? "Today's\nRating" : "Daily\nRating"
        self.descriptionOfHalo?.text = isEnergyMap ? "Energy Map (Heart Rate/10 min)" : "Live Halo"
    }

    override func viewWillDisappear(_ animated: Bool) {
        ReSwiftGCDQueue.async{
            mainStore.unsubscribe(self)
        }
        timer?.invalidate()
        timer = nil
    }

    func updateHalo() {
        DispatchQueue.main.async {
            let hashKey = self.date.hashForm()
            guard let normalHaloViewModel = mainStore.state.haloViewModels[hashKey] else {
                print("Couldn't find \(self.date) in \(mainStore.state.haloViewModels.keys)")
                return
            }

            guard let energyMapViewModel = mainStore.state.energyMapViewModels[hashKey] else {
                print("Couldn't find \(self.date) in \(mainStore.state.haloViewModels.keys)")
                return
            }

            guard let healthTimeSlice = mainStore.state.healthModels[hashKey] else {
                print("Couldn't find \(self.date) in \(mainStore.state.healthModels.keys)")
                return
            }

            guard let userTimeSlice = mainStore.state.userModels[hashKey] else {
                print("Couldn't find \(self.date) in \(mainStore.state.userModels.keys)")
                return
            }

            if self.isEnergyMap {
                self.haloView?.sendViewModel(viewModelState: energyMapViewModel)
            } else {
                self.haloView?.sendViewModel(viewModelState: normalHaloViewModel)
            }

            
            self.defaultAgeWarning.isHidden = userTimeSlice.ageHasBeenSet
            
            self.steps?.text = "\(healthTimeSlice.appleSteps)"

            let restingHeartRate = healthTimeSlice.restingHeartRate ?? 0
            let trainingRange =  userTimeSlice.targetHeartRate(restingHeartRate: restingHeartRate)
            let lowString =  "\(trainingRange!.moderate.intValue)"
            let highString = "\(trainingRange!.max.intValue)"
            
            self.restingHR?.text = (restingHeartRate) > 0 ? "\(safeInt(restingHeartRate)) bpm" : "---"
            self.peakHR?.text = safeInt(healthTimeSlice.peakHeartRate) > 0 ? "\(safeInt(healthTimeSlice.peakHeartRate)) bpm" : "---"
            self.exerciseHR?.text = safeInt(healthTimeSlice.exerciseHeartRate) > 0 ? "\(safeInt(healthTimeSlice.exerciseHeartRate)) bpm" : "---"
            self.exerciseDuration?.text = healthTimeSlice.exerciseMinutes > 0 ? "\(healthTimeSlice.exerciseMinutes) min" : "---"
            self.workoutMinutesName?.text = "\(lowString)-\(highString) BPM\nWorkout"

            self.updateTierWindowDates()
            self.updateChartsAndTier(dates:self.historyDates!)
        }
        // print("last10: \(healthTimeSlice.stepDelta)")
    }
    @IBOutlet weak var standText: UILabel!
    @IBOutlet weak var distanceText: UILabel! //USE STEPS
    @IBOutlet weak var vigorTeext: UILabel!
    @IBOutlet weak var workoutMinutesText: UILabel!
    @IBOutlet weak var descriptionTextForVerifiedWorkoutTime: UILabel!

    func integerRatioDisplay(numerator:Int, denomenator:Int, unit:String)->String{
        return "\(numerator) / \(denomenator) \(unit)"
    }
    
    
    @IBOutlet weak var descriptionForPoints: UILabel!
    func updateChartsAndTier(dates:[Date]) {

        if intensityChart == nil { return } // allow beta release

        guard let today = dates.first else{
            return
        }
        
       

        guard let healthTimeSlice = mainStore.state.healthModels[self.date.hashForm()] else {
            print("Couldn't find \(self.date) in \(mainStore.state.healthModels.keys)")
            return
        }
        let restingHeartRate = healthTimeSlice.restingHeartRate
        
        guard let userTimeSlice = mainStore.state.userModels[self.date.hashForm()],
            let trainingRange =  userTimeSlice.targetHeartRate(restingHeartRate: restingHeartRate) else {
                print("Couldn't get training range")
                return
        }
        let thisDaysTier = Tiers.tierForDate(today)
        tierLabel.text = thisDaysTier.name
        tierLabel.textColor = thisDaysTier.textColor
        let lowString =  "\(trainingRange.moderate.intValue)"
        let vigorString = "\(Int(userTimeSlice.vigorousHeartRate(restingHeartRate: restingHeartRate)))"
        
        
        let intensityPoints = Tiers.heartIntensityPoints(date:today)
        vigorTeext.text = integerRatioDisplay(numerator: Int(intensityPoints), denomenator: Int(DisplayDailyTierCaps.workoutIntensity), unit: "pts")
        
        let intensityTier = Tiers.tierForHeartIntensity(date: today)
        intensityChart.barColor = intensityTier.textColor
        intensityChart.segmentMarksAtPercentages = Tiers.dailyIntensityChartMarks
        intensityChart.percentFull = Tiers.heartIntensitySingleDayDisplayPercentage(date: today)
        descriptionForPoints.text = "1 pt/min for at least \(lowString) bpm, 2pt/min for at least \(vigorString) bpm"
        
        let activityTier = Tiers.tierForStand(forDates: dates)
        activityChart.barColor = activityTier.textColor
        let standPoints = healthTimeSlice.appleStoodHours
        standText.text = integerRatioDisplay(numerator: Int(standPoints), denomenator: DisplayDailyTierCaps.standHours, unit: "hrs")
        activityChart.percentFull = Tiers.standDisplayPercentage(forDates: dates)
        activityChart.segmentMarksAtPercentages = Tiers.standChartMarks

        
        let cyclingSteps = healthTimeSlice.cyclingStepEquivalent()
       // dump(cyclingSteps)
        let stepsTier = Tiers.tierForStepDistance(forDates: dates)
        stepsChart.barColor = stepsTier.textColor
        let stepPoints = healthTimeSlice.appleSteps
        distanceText.text = "(\(Int(stepPoints))🚶🏾‍♀️+ \(Int(cyclingSteps))🚴🏽‍♀️) / \(DisplayDailyTierCaps.distanceTraveled) steps"
        stepsChart.percentFull = Tiers.stepsDisplayPercentage(forDates: dates)
        stepsChart.segmentMarksAtPercentages = Tiers.distanceTravelledMarks
 
    }

    func newState(state: AppState) {
        updateHalo()
    }
    
}

extension Double{
    var intValue: Int{
        get{
            return Int(self)
        }
    }
}
