import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
// >> segmented-bar-import
import { SegmentedBar, SegmentedBarItem, SelectedIndexChangedEventData } from "tns-core-modules/ui/segmented-bar";
// << segmented-bar-import
// >> creating-segmented-bar-code-ts
export function onPageLoaded(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();
    const stackLayout: StackLayout = <StackLayout>page.getViewById("stackLayoutId");

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

    segmentedBar.on("selectedIndexChange", (sbargs: SelectedIndexChangedEventData) => {
        vm.set("sbResult", (<SegmentedBar>sbargs.object).selectedIndex);
    });

    stackLayout.insertChild(segmentedBar, 0);

    page.bindingContext = vm;
}
// << creating-segmented-bar-code-ts
