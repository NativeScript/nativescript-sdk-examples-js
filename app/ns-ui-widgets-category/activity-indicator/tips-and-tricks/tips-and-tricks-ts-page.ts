// >> large-ios-indicator-ts
import { ActivityIndicator, isIOS } from "@nativescript/core";

export function onLoaded(args) {
    const view = args.object as ActivityIndicator;

    if (isIOS) {
        // accessing the native iOS API https://developer.apple.com/documentation/uikit/uiactivityindicatorviewstyle
        view.ios.activityIndicatorViewStyle = UIActivityIndicatorViewStyle.White;
    }

}

// << large-ios-indicator-ts
