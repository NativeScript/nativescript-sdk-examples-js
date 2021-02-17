import { Dialogs, Observable } from "@nativescript/core";
// >> tab-view-navigation-code
export function onLoaded(args) {
    const tabView = args.object;
    const vm = new Observable();
    vm.set("tabSelectedIndex", 0);
    vm.set("tabSelectedIndexResult", "Profile Tab (tabSelectedIndex = 0 )");

    tabView.bindingContext = vm;
}

export function changeTab(args) {
    const vm = args.object.bindingContext;
    const tabSelectedIndex = vm.get("tabSelectedIndex");
    if (tabSelectedIndex === 0) {
        vm.set("tabSelectedIndex", 1);
    } else if (tabSelectedIndex === 1) {
        vm.set("tabSelectedIndex", 2);
    } else if (tabSelectedIndex === 2) {
        vm.set("tabSelectedIndex", 0);
    }
}
// displaying the old and new TabView selectedIndex
export function onSelectedIndexChanged(args) {
    if (args.oldIndex !== -1) {
        const newIndex = args.newIndex;
        const vm = args.object.bindingContext;
        if (newIndex === 0) {
            vm.set("tabSelectedIndexResult", "Profile Tab (tabSelectedIndex = 0 )");
        } else if (newIndex === 1) {
            vm.set("tabSelectedIndexResult", "Stats Tab (tabSelectedIndex = 1 )");
        } else if (newIndex === 2) {
            vm.set("tabSelectedIndexResult", "Settings Tab (tabSelectedIndex = 2 )");
        }
        Dialogs.alert(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`)
            .then(() => {
                console.log("Dialog closed!");
            });
    }
}

// << tab-view-navigation-code
