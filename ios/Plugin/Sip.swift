import Foundation

@objc public class Sip: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
