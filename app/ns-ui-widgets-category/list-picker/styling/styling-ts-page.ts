// >> picker-styling-code-behind-ts
import { EventData, Page, fromObject } from "@nativescript/core";

export function onNavigatingTo(args: EventData) {

    const items = ["Batman", "Joker", "Bane"];

    const page = <Page>args.object;
    const vm = fromObject({
        items: items
    });
    page.bindingContext = vm;

}

// << picker-styling-code-behind-ts
