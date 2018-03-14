// >> activity-indicator-require
const ActivityIndicator = require("tns-core-modules/ui/activity-indicator").ActivityIndicator;
// << activity-indicator-require
const Observable = require("tns-core-modules/data/observable").Observable;

function onNavigatingTo(args) {
    const page = args.object;
    // >> activity-indicator-setting-busy-code
    const vm = new Observable();
    vm.set("isLoading", true);
    // >> (hide)
    vm.set("snippet", "<ActivityIndicator busy='{{ isLoading }}'/>");
    // << (hide)
    page.bindingContext = vm;
    // << activity-indicator-setting-busy-code
}
exports.onNavigatingTo = onNavigatingTo;