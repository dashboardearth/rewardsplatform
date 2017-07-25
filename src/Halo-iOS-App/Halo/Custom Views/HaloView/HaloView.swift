//
//  HaloView.swift
//  Pods
//
//  Created by Marcin Ignac on 2016/01/06.
//
//

import Foundation

import UIKit
import WebKit

// Based on https://gist.github.com/santoshrajan/97aa46871cde0c0cb8a8
func JSONStringify(value: AnyObject, prettyPrinted: Bool = false) -> String {
    do {
        let jsonData: NSData? = try JSONSerialization.data(withJSONObject: value, options: JSONSerialization.WritingOptions()) as NSData?
        return NSString(data: jsonData! as Data, encoding: String.Encoding.utf8.rawValue) as! String
    } catch {
        return ""
    }
}

func dateToISO(date: NSDate) -> String {
    let dateFormatter = DateFormatter()
    dateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ssZZZZZ"
    let dateStr = dateFormatter.string(from: date as Date)
    return dateStr
}

func hvPrint(_ items: Any..., separator: String = " ", terminator: String = "\n") {
    // print( items, separator:separator, terminator:terminator)
}

public class HaloView: WKWebView, WKScriptMessageHandler, WKNavigationDelegate {

    var onceLoadedCallback: ((_ success: Bool) -> Void)? = nil
    var tempLocation: String?

    var hasLoaded = false // fixme: surely this is available soemwhere else?
    var liveMode = true
    var lastParams = ""
    func update(haloTimeSlice: HaloTimeSlice) {
    }

    public override init(frame: CGRect, configuration: WKWebViewConfiguration) {
        super.init(frame: frame, configuration: configuration)
    }

    init(frame: CGRect, viewModel: HaloTimeSlice) {
        let contentController = WKUserContentController()

        let config = WKWebViewConfiguration()
        config.userContentController = contentController

        super.init(frame: frame, configuration: config)
        self.scrollView.isScrollEnabled = false
        print("loaded halo at \(frame)")
        
        self.sendViewModel(viewModelState: viewModel)
        self.isOpaque = false // stops white flash

        self.navigationDelegate = self

        self.alpha = 0.0 // fade in once it's loaded
        self.viewDidLoad()
    }

    public required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    public override func awakeFromNib() {
        super.awakeFromNib()
    }

    var isStillEvaluatingJS = false
    func sendViewModel(viewModelState m: HaloTimeSlice) {
        let wobble = liveMode ? m.wobble : m.wobbleHistoric
        let complexity = liveMode ? m.complexity : m.complexityHistoric

        #if debugUNboxed
            let singleColor = m.color.first ?? 0.0
            var thingToPassToColor = (m.color.count > 1 ? m.color : singleColor) as Any // making sure passing an array of 1 is the same as a single value
        #else
            var thingToPassToColor = m.color // but pass the array when not debugging because it's not different
        #endif
        
//        thingToPassToColor = [0.1, 0.1, 0.1, 1.0]
        
        let haloScaleBonus = 0.0 // 0.3 //made to make matchup better to old sizes that used the webview differently
        let haloScaleRadiusBonus = haloScaleBonus / 2
        let haloScaleFactor = haloScaleBonus + 1.0
        let haloScaleRadiusFactor = haloScaleRadiusBonus + 1.0
        let params = "HaloSetGlobalParams({ size: \(m.size * haloScaleFactor), color: 0.1, complexity: \(complexity), speed: \(m.speed),  wobble: \(wobble), colorCenter: \(m.colorCenter), colorCenterRatio: \(min(0.7, m.colorCenterRatio)), minRingRadius: \(m.minRingRadius * haloScaleRadiusFactor), maxRingRadius: \(m.maxRingRadius * haloScaleRadiusFactor), minNumRings: \(m.minNumRings), maxNumRings: \(m.maxNumRings), waveCount: \(m.waveCount), waveSpeed: \(m.waveSpeed), waveColor: \(m.waveColor), showAuraAtRing: \(m.showAuraAtRing), highlightRing: \(m.highlightRing), waveIntensity: \(m.waveIntensity), evenLineDistribution: \(m.evenLineDistribution), solidLines: \(m.solidLines), showGrid: \(m.showGrid), auraOpacity: \(m.auraOpacity), brightness: \(m.brightness), stratified: \(m.isEnergyMap) })"

        //print("params: \(params) :params")
        isStillEvaluatingJS = true
        self.evaluateJavaScript(params){ _, _ in
            self.isStillEvaluatingJS = false
        }

    }

    public func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
    }

    public func webView(_ webView: WKWebView,
                        didCommit navigation: WKNavigation!) {
    }

    public func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        UIView.animate(withDuration: 0.3) {
            self.alpha = 1.0
            self.onceLoadedCallback?(true)
        }
    }

    public func webView(webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!) {
        NSLog("loading fail")
    }

    public func webView(_ webView: WKWebView,
                        didFailProvisionalNavigation navigation: WKNavigation!,
                        withError error: Error) {
    }

    public func webView(_ webView: WKWebView,
                        didFail navigation: WKNavigation!,
                        withError error: Error) {
        NSLog("loading fail")
    }

    public func webView(_ webView: WKWebView,
                        decidePolicyFor navigationAction: WKNavigationAction,
                        decisionHandler: @escaping ((WKNavigationActionPolicy) -> Void)) {
        decisionHandler(.allow)
    }

    public func webView(_ webView: WKWebView,
                        decidePolicyFor navigationResponse: WKNavigationResponse,
                        decisionHandler: @escaping ((WKNavigationResponsePolicy) -> Void)) {
        decisionHandler(.allow)
    }

    func haloHtmlPrefix() -> String {
        if self.frame.width < 255.0 {
            return "indexSmall"
        } else if self.frame.width < 320.0 {
            return "indexMedium"
        } else {
            return "indexLarge"
        }
    }

    public func viewDidLoad() {
        hasLoaded = true

        let resource = haloHtmlPrefix()
        guard let indexFileWWWBundlePath = Bundle.main.path(forResource: resource, ofType: "html") else {
            assertionFailure()
            return
        }

        let indexFileUrl = NSURL.fileURL(withPath: indexFileWWWBundlePath)
        let indexFilePath = indexFileUrl.deletingLastPathComponent()
        self.loadFileURL(indexFileUrl, allowingReadAccessTo: indexFilePath)
        self.lastParams = ""
    }

    public func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
    }

    public func setGlobalParam(name: String, value: Float) {
        let jsStr = "HaloSetGlobalParam('" + name + "', " + String(value) + ");"
        self.evaluateJavaScript(jsStr, completionHandler: nil)
    }

    // Setting normalization factor. Number of steps in a given 30min time slot will be divided
    // by that value to get step bar width on the timeline
    func sendMaxStepsPer30minSlot() {
    }

    func isBetweenDates(date: NSDate, from: NSDate, to: NSDate) -> Bool {

        if date.compare(from as Date) == ComparisonResult.orderedAscending {
            return false
        }

        if date.compare(to as Date) == ComparisonResult.orderedDescending {
            return false
        }

        return true
    }
}
