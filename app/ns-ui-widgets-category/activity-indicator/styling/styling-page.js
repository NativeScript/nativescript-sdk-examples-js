const Observable = require("tns-core-modules/data/observable").Observable;
const isIOS = require("tns-core-modules/platform").isIOS;

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("isLoading", true);

    // >> large-ios-indicator
    if (isIOS) {
        const indicator = page.getViewById("myIndicator");
        // accessing the native iOS API https://developer.apple.com/documentation/uikit/uiactivityindicatorviewstyle
        indicator.ios.activityIndicatorViewStyle = UIActivityIndicatorViewStyle.White;
    }
    // << large-ios-indicator
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
