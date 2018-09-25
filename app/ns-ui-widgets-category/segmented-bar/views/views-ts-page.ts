import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { SegmentedBar, SelectedIndexChangedEventData } from "tns-core-modules/ui/segmented-bar";
// >> segmented-bar-view-code-ts
export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    // set up the SelectedBar selected index
    const vm = new Observable();
    vm.set("prop", 0);
    vm.set("sbSelectedIndex", 0);
    vm.set("visibility1", true);
    vm.set("visibility2", false);
    vm.set("visibility3", false);

    page.bindingContext = vm;
}

export function sbLoaded(args) {
    // handle selected index change
    const segmentedBarComponent: SegmentedBar = <SegmentedBar>args.object;
    segmentedBarComponent.on("selectedIndexChange", (sbargs: SelectedIndexChangedEventData) => {
        const page = (<SegmentedBar>sbargs.object).page;
        const vm = page.bindingContext;
        const selectedIndex = (<SegmentedBar>sbargs.object).selectedIndex;
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
// << segmented-bar-view-code-ts
