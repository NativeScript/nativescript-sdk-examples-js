let observableModule = require("tns-core-modules/data/observable");
let platformModule = require("tns-core-modules/platform");
// >> tab-view-binding-code
function onNavigatingTo(args) {
    let page = args.object;
    let vm = new observableModule.Observable();
    vm.set("tabSelectedIndex", 0);
    vm.set("tabSelectedIndexResult", "Profile Tab (tabSelectedIndex = 0 )")

    page.bindingContext = vm;
}

function changeTab(args) {
    let page = args.object.page;
    let vm = page.bindingContext;
    let tabSelectedIndex = vm.get("tabSelectedIndex")
    if (tabSelectedIndex === 0) {
        vm.set("tabSelectedIndex", 1);
        vm.set("tabSelectedIndexResult", "Stats Tab (tabSelectedIndex = 1 )");
    } else if (tabSelectedIndex === 1) {
        vm.set("tabSelectedIndex", 2);
        vm.set("tabSelectedIndexResult", "Settings Tab (tabSelectedIndex = 2 )");
    } else if (tabSelectedIndex === 2) {
        vm.set("tabSelectedIndex", 0);
        vm.set("tabSelectedIndexResult", "Profile Tab (tabSelectedIndex = 0 )");
    }
}
// displaying the old and new TabView selectedIndex
function onSelectedIndexChanged(args){
    alert("Selected index has changed ( Old index: "+args.oldIndex+" New index: "+args.newIndex+" )");
}
exports.onNavigatingTo = onNavigatingTo;
exports.changeTab = changeTab;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
// << tab-view-binding-code