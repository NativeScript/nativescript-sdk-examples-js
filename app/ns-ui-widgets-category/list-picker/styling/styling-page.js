// >> picker-styling-code-behind
import { fromObject } from "@nativescript/core";

export function onNavigatingTo(args) {

    const items = ["Batman", "Joker", "Bane"];

    const page = args.object;
    const vm = fromObject({
        items: items
    });
    page.bindingContext = vm;

}


// << picker-styling-code-behind
