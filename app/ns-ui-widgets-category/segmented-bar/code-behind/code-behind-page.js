import { Observable, SegmentedBar } from "@nativescript/core";
// >> segmented-bar-require
// << segmented-bar-require
// >> creating-segmented-bar-code
export function onPageLoaded(args) {
    const page = args.object;
    const vm = new Observable();
    const stackLayout = page.getViewById("stackLayoutId");

    vm.set("sbResult", 0);
    // creating new SegmentedBar and binding the selectedIndex property
    const options = {
        sourceProperty: "sbindex",
        targetProperty: "selectedIndex"
    };
    const segmentedBar = new SegmentedBar();
    const items = [];
    const item1 = new SegmentedBarItem();
    item1.title = "Item1";
    items.push(item1);
    const item2 = new SegmentedBarItem();
    item2.title = "Item2";
    items.push(item2);
    const item3 = new SegmentedBarItem();
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


// << creating-segmented-bar-code
