// >> action-bar-hiding-action-items-js
import { fromObject } from "@nativescript/core";

export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = fromObject({
        isEditing: false
    });
}


export function onEdit(args) {
    const page = args.object.page;
    page.bindingContext.set("isEditing", true);
}

export function onSave(args) {
    const page = args.object.page;
    page.bindingContext.set("isEditing", false);
}

export function onCancel(args) {
    const page = args.object.page;
    page.bindingContext.set("isEditing", false);
}
// << action-bar-hiding-action-items-js
