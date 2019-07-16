// >> bottom-navigation-events-tsc
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { BottomNavigation, SelectedIndexChangedEventData } from "tns-core-modules/ui/bottom-navigation";
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
export function onBottomNavLoaded(args: EventData) {
    // Using the loaded event to ger a reference to the BottomNavigation
    const bottomNavigation = args.object as BottomNavigation;

    // Using selectedIndexChanged
    bottomNavigation.on(BottomNavigation.selectedIndexChangedEvent, (data: SelectedIndexChangedEventData) => {
        const oldIndex: number = data.oldIndex;
        const newIndex: number = data.newIndex;
        console.log(`oldIndex: ${oldIndex}; newIndex: ${newIndex}`);

        (<any>args.object).page.bindingContext.set("selectedIndex", newIndex);
    });
}
// << bottom-navigation-events-tsc
