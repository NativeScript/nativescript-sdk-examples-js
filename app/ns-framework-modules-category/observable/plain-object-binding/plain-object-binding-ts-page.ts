// >> plain-object-binding-code-ts
import { fromObject, EventData } from "@nativescript/core";
import { Page } from "@nativescript/core";

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;

    const list = [];
    for (let i = 0; i < 15; i++) {
        list.push(new Date());
    }

    const viewModel = fromObject({
        items: list
    });

    page.bindingContext = viewModel;
}
// << plain-object-binding-code-ts
