var observableModule = require("tns-core-modules/data/observable");
let segmentedBarModule = require("tns-core-modules/ui/segmented-bar");
// >> creating-segmented-bar-code
function onPageLoaded(args) {
    let page = args.object;
    let vm = new observableModule.Observable();
    let stackLayout = page.getViewById("stackLayoutId");

    vm.set("sbResult", 0);
    // creating new SegmentedBar and binding the selectedIndex property
    const options = {
        sourceProperty: "sbindex",
        targetProperty: "selectedIndex"
    };
    let segmentedBar = new segmentedBarModule.SegmentedBar();
    var items = [];
    var item1 = new segmentedBarModule.SegmentedBarItem();
    item1.title = "Item1";
    items.push(item1);
    var item2 = new segmentedBarModule.SegmentedBarItem();
    item2.title = "Item2";
    items.push(item2);
    var item3 = new segmentedBarModule.SegmentedBarItem();
    item3.title = "Item3";
    items.push(item3);
    segmentedBar.items = items;

    segmentedBar.bind(options, vm);
    // setting SegmentedBar selected index to 0
    vm.set("sbindex", 0);

    segmentedBar.on("selectedIndexChange", (args) => {
        vm.set("sbResult", args.object.selectedIndex)
    })


    stackLayout.insertChild(segmentedBar, 0);

    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
// << creating-segmented-bar-code