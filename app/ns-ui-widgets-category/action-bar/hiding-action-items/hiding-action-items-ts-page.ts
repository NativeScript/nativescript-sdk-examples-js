// >> action-bar-hiding-action-items-ts
import { ActionItem, EventData, GestureEventData, Page, fromObject } from "@nativescript/core";

// >> (hide)
export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = fromObject({
        isEditing: false
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
