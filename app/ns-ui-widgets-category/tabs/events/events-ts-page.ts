// >> tabs-events-tsc
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { Tabs, SelectedIndexChangedEventData } from "tns-core-modules/ui/tabs";
// >> (hide)
import { Page } from "tns-core-modules/ui/page";

export function onNavigatingTo(args: EventData) {
    const page = args.object as Page;
    const vm = fromObject({
        selectedIndex: 1
    });

    page.bindingContext = vm;
}
// << (hide)
export function onTabsLoaded(args: EventData) {
    // Using the loaded event to ger a reference to the Tabs
    const tabs = args.object as Tabs;

    // Using selectedIndexChanged
    tabs.on(Tabs.selectedIndexChangedEvent, (data: SelectedIndexChangedEventData) => {
        const oldIndex: number = data.oldIndex;
        const newIndex: number = data.newIndex;
        console.log(`oldIndex: ${oldIndex}; newIndex: ${newIndex}`);

        (<any>args.object).page.bindingContext.set("selectedIndex", newIndex);
    });
}
// << tabs-events-tsc
