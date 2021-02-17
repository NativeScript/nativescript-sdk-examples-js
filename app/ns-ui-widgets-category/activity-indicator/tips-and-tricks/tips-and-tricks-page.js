// >> large-ios-indicator
import { isIOS } from "@nativescript/core";

export function onLoaded(args) {
    const view = args.object;

    if (isIOS) {
        // accessing the native iOS API https://developer.apple.com/documentation/uikit/uiactivityindicatorviewstyle
        view.ios.activityIndicatorViewStyle = UIActivityIndicatorViewStyle.White;
    }

}
// << large-ios-indicator
