// >> action-bar-hiding-action-items-ts
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { ActionItem } from "tns-core-modules/ui/action-bar";
import { Page } from "tns-core-modules/ui/page";
import { GestureEventData } from "tns-core-modules/ui/gestures";

// >> (hide)
export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = fromObject({
        isEditing: false,
        title: "Hiding Action Items"
    });
}
// << (hide)
export function onEdit(args: GestureEventData) {
    const page = (<ActionItem>args.object).page;
    page.bindingContext.set("isEditing", true);
}

export function onSave(args: GestureEventData) {
    const page = (<ActionItem>args.object).page;
    page.bindingContext.set("isEditing", false);
}

export function onCancel(args: GestureEventData) {
    const page = (<ActionItem>args.object).page;
    page.bindingContext.set("isEditing", false);
}
// << action-bar-hiding-action-items-ts
