// >> large-ios-indicator
const isIOS = require("@nativescript/core").isIOS;

function onLoaded(args) {
    const view = args.object;

    if (isIOS) {
        // accessing the native iOS API https://developer.apple.com/documentation/uikit/uiactivityindicatorviewstyle
        view.ios.activityIndicatorViewStyle = UIActivityIndicatorViewStyle.White;
    }

}
exports.onLoaded = onLoaded;
// << large-ios-indicator
