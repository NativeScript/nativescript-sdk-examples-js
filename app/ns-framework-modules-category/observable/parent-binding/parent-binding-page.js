// >> parent-binding-code
import { fromObject } from "@nativescript/core";

export function onNavigatingTo(args) {
    const page = args.object;
    const viewModel = fromObject({
        items: [1, 2, 3],
        test: "Parent binding! (the value came from the `test` property )"
    });

    page.bindingContext = viewModel;
}

// << parent-binding-code
