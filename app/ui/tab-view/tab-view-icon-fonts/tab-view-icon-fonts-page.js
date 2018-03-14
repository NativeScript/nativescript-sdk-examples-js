let observableModule = require("tns-core-modules/data/observable");
let platformModule = require("tns-core-modules/platform");
// >> text-field-binding-code
function onNavigatingTo(args) {
    let page = args.object;
    let vm = new observableModule.Observable();
    vm.set("tabSelectedIndex", 0);

    page.bindingContext = vm;
}

function changeTab(args) {
    let page = args.object.page;
    let vm = page.bindingContext;
    let tabSelectedIndex = vm.get("tabSelectedIndex")
    if (tabSelectedIndex === 0) {
        vm.set("tabSelectedIndex", 1);
    } else if (tabSelectedIndex === 1) {
        vm.set("tabSelectedIndex", 2);
    } else if (tabSelectedIndex === 2) {
        vm.set("tabSelectedIndex", 0);
    }
}

function onTabViewLoaded(args){
    let tabView = args.object;
    tabView.on("selectedIndexChange", (args)=>{
        alert("Selected index has changed: "+args.object.selectedIndex);
    })

}
exports.onNavigatingTo = onNavigatingTo;
exports.changeTab = changeTab;
exports.onTabViewLoaded = onTabViewLoaded;
// << text-field-binding-code