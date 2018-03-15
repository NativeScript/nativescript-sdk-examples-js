const Observable = require("tns-core-modules/data/observable").Observable;
const isIOS = require("tns-core-modules/platform").isIOS;

function onNavigatingTo(args) {
    const page = args.object;

    const vm = new Observable();
    vm.set("isLoading", true);
    var snippet = '<ActivityIndicator busy="{{ isLoading }}" \n  backgroundColor="lightgray" \n  borderRadius="50" \n  color="orangered" \n  width="100" height="100"/>';
    vm.set("snippet", snippet);

    // >> large-ios-indicator
    if (isIOS) {
        const indicator = page.getViewById("myIndicator");

        // accessing the native iOS API https://developer.apple.com/documentation/uikit/uiactivityindicatorviewstyle
        indicator.ios.activityIndicatorViewStyle = UIActivityIndicatorViewStyle.UIActivityIndicatorViewStyleWhiteLarge;
    }
    // << large-ios-indicator

    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;