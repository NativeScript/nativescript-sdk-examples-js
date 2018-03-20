const observableModule = require("tns-core-modules/data/observable");
// >> text-field-binding-code
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    vm.set("tabSelectedIndex", 0);

    page.bindingContext = vm;
}
// changing the TabView selected index on button tap
function changeTab(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    const tabSelectedIndex = vm.get("tabSelectedIndex");
    if (tabSelectedIndex === 0) {
        vm.set("tabSelectedIndex", 1);
    }
    else if (tabSelectedIndex === 1) {
        vm.set("tabSelectedIndex", 2);
    }
    else if (tabSelectedIndex === 2) {
        vm.set("tabSelectedIndex", 0);
    }
}

function onTabViewLoaded(args) {
    const tabView = args.object;
    // handling selectedIndexChangedEvent
    tabView.on("selectedIndexChange", (args) => {
        alert(`Selected index has changed: ${args.object.selectedIndex}`);
    });

}
exports.onNavigatingTo = onNavigatingTo;
exports.changeTab = changeTab;
exports.onTabViewLoaded = onTabViewLoaded;
// << text-field-binding-code
