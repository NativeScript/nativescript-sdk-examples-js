var Observable = require("tns-core-modules/data/observable").Observable;
var isIOS = require("tns-core-modules/platform").isIOS;
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new Observable();
    vm.set("isLoading", true);
    if (isIOS) {
        var indicator = page.getViewById("myIndicator");
        indicator.ios.activityIndicatorViewStyle = 1;
    }
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
