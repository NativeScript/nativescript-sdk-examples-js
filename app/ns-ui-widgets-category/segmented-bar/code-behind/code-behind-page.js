const observableModule = require("tns-core-modules/data/observable");
// >> segmented-bar-require
const segmentedBarModule = require("tns-core-modules/ui/segmented-bar");
// << segmented-bar-require
// >> creating-segmented-bar-code
function onPageLoaded(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    const stackLayout = page.getViewById("stackLayoutId");

    vm.set("sbResult", 0);
    // creating new SegmentedBar and binding the selectedIndex property
    const options = {
        sourceProperty: "sbindex",
        targetProperty: "selectedIndex"
    };
    const segmentedBar = new segmentedBarModule.SegmentedBar();
    const items = [];
    const item1 = new segmentedBarModule.SegmentedBarItem();
    item1.title = "Item1";
    items.push(item1);
    const item2 = new segmentedBarModule.SegmentedBarItem();
    item2.title = "Item2";
    items.push(item2);
    const item3 = new segmentedBarModule.SegmentedBarItem();
    item3.title = "Item3";
    items.push(item3);
    segmentedBar.items = items;

    segmentedBar.bind(options, vm);
    // setting SegmentedBar selected index to 0
    vm.set("sbindex", 0);

    segmentedBar.on("selectedIndexChange", (args) => {
        vm.set("sbResult", args.object.selectedIndex);
    });

    stackLayout.insertChild(segmentedBar, 0);

    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
// << creating-segmented-bar-code
