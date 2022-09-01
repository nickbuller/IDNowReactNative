import Foundation

#if !targetEnvironment(simulator)
import IDNowSDKCore
#endif

@objc(IdnowCore)
class IdnowCore: NSObject {
    private var _resolve: RCTPromiseResolveBlock? = nil;
    private var _reject: RCTPromiseRejectBlock? = nil;

    #if targetEnvironment(simulator)

    @objc
    func startIdent(_ token: String, preferredLanguage: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        let error = NSError(domain: "IDNow", code: "1", userInfo: nil)
        reject(String(describing: "1"), "IDNow not supported on the Simulator", error);
    }

    #else

    @objc
    func startIdent(_ token: String, preferredLanguage: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        let rootViewController = UIApplication.shared.delegate?.window??.rootViewController
        IDNowSDK.shared.start(token: token, preferredLanguage: preferredLanguage, fromViewController: rootViewController!, listener: { (result: IDNowSDK.IdentResult, message: String) in
            if result == IDNowSDK.IdentResult.FINISHED {
                resolve(String(describing: result.rawValue));
            } else {
                let error = NSError(domain: message, code: result.rawValue, userInfo: nil)
                reject(String(describing: result.rawValue), message, error);
            }
        })
    }
    #endif

    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
