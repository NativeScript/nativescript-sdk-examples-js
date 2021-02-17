// >> plain-object-binding-code
import { fromObject } from "@nativescript/core";

export function onNavigatingTo(args) {
    const page = args.object;

    const list = [];
    for (let i = 0; i < 15; i++) {
        list.push(new Date());
    }

    const viewModel = fromObject({
        items: list
    });

    page.bindingContext = viewModel;
}

// << plain-object-binding-code
