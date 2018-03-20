let observableModule = require("tns-core-modules/data/observable");
// >> segmented-bar-require
let segmentedBarModule = require("tns-core-modules/ui/segmented-bar");
// << segmented-bar-require
// >> segmented-bar-index-change-event
function onNavigatingTo(args) {
    let page = args.object;
    // set up the SegmentedBar selected index
    const vm = new observableModule.Observable();
    vm.set("prop", 0);
    vm.set("sbSelectedIndex", 0);
    // handle selected index change 
    vm.on(observableModule.Observable.propertyChangeEvent, function (propertyChangeData) {
        if (propertyChangeData.propertyName == 'sbSelectedIndex') {
            vm.set("prop", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}

exports.onNavigatingTo = onNavigatingTo;
// << segmented-bar-index-change-event