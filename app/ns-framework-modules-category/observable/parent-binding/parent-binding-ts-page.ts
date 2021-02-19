// >> parent-binding-code-ts
import { EventData, fromObject, Page } from "@nativescript/core";

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const viewModel = fromObject({
        items: [1, 2, 3],
        test: "Parent binding! (the value came from the `test` property )"
    });

    page.bindingContext = viewModel;
}
// << parent-binding-code-ts
