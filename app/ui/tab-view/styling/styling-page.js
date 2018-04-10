const observableModule = require("tns-core-modules/data/observable");
const dialogs = require("tns-core-modules/ui/dialogs");
// >> tab-view-binding-code
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    vm.set("tabSelectedIndex", 0);
    vm.set("tabSelectedIndexResult", "Profile Tab (tabSelectedIndex = 0 )");

    page.bindingContext = vm;
}

function changeTab(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    const tabSelectedIndex = vm.get("tabSelectedIndex");
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
function onSelectedIndexChanged(args) {
    if(args.oldIndex != -1){
        const tabSelectedIndex = args.object.selectedIndex;
        const page = args.object.page;
        const vm = page.bindingContext;
        if (tabSelectedIndex === 0) {
            vm.set("tabSelectedIndexResult", "Profile Tab (tabSelectedIndex = 0 )");
        } else if (tabSelectedIndex === 1) {
            vm.set("tabSelectedIndexResult", "Stats Tab (tabSelectedIndex = 1 )");
        } else if (tabSelectedIndex === 2) {
            vm.set("tabSelectedIndexResult", "Settings Tab (tabSelectedIndex = 2 )");
        }
        dialogs.alert(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`)
        .then(() => {
            console.log("Dialog closed!");
        });
    }
}
exports.onNavigatingTo = onNavigatingTo;
exports.changeTab = changeTab;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
// << tab-view-binding-code
