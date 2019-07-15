const Observable = require("tns-core-modules/data/observable").Observable;
const platformModule = require("tns-core-modules/platform");
const frameModule = require("tns-core-modules/ui/frame")
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("title", "Icon Fonts \nAction Bar Example");
    vm.set("snippet", "<ActionBar title=\"Icon Fonts\" class=\"action-bar\"/>");
    if(platformModule.isIOS){
        let navigationBar = page.actionBar.ios;
        console.log("navigationBar");
        console.log(navigationBar)
        // navigationBar.topItem.hidesBackButton = true;
    }
    page.bindingContext = vm;
}
function navigateBack() {
    frameModule.goBack();
}
exports.onNavigatingTo = onNavigatingTo;
exports.navigateBack = navigateBack;
