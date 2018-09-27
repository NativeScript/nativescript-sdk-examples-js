// >> plain-object-binding-code-ts
import { fromObject, EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

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
