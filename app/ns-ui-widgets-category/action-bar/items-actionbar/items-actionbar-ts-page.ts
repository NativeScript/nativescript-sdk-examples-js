// >> items-actionbar-ts
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { GestureEventData } from "tns-core-modules/ui/gestures";

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = fromObject({
        title: "Items \n\nDemonstrating action items properties and position"
    });
}

export function onShare(args: GestureEventData) {
    console.log("Share tapped!");
}

export function onDelete(args: GestureEventData) {
    console.log("Delete tapped!");
}
// << items-actionbar-ts
