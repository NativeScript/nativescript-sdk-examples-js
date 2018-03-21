const observableModule = require("tns-core-modules/data/observable");
// >> segmented-bar-view-code
function onNavigatingTo(args) {
    const page = args.object;
    // set up the SelectedBar selected index
    const vm = new observableModule.Observable();
    vm.set("prop", 0);
    vm.set("sbSelectedIndex", 0);
    vm.set("visibility1", true);
    vm.set("visibility2", false);
    vm.set("visibility3", false);

    page.bindingContext = vm;
}

function sbLoaded(args) {
    // handle selected index change
    const segmentedBarComponent = args.object;
    segmentedBarComponent.on("selectedIndexChange", (sbargs) => {
        const page = sbargs.object.page;
        const vm = page.bindingContext;
        const selectedIndex = sbargs.object.selectedIndex;
        vm.set("prop", selectedIndex);
        switch (selectedIndex) {
            case 0:
                vm.set("visibility1", true);
                vm.set("visibility2", false);
                vm.set("visibility3", false);
                break;
            case 1:
                vm.set("visibility1", false);
                vm.set("visibility2", true);
                vm.set("visibility3", false);
                break;
            case 2:
                vm.set("visibility1", false);
                vm.set("visibility2", false);
                vm.set("visibility3", true);
                break;
            default:
                break;
        }
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.sbLoaded = sbLoaded;
// << segmented-bar-view-code
