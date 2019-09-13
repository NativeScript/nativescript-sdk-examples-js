// >> picker-styling-code-behind-ts
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

export function onNavigatingTo(args: EventData) {

    const items = ["Batman", "Joker", "Bane"];

    const page = <Page>args.object;
    const vm = fromObject({
        items: items
    });
    page.bindingContext = vm;

}

// << picker-styling-code-behind-ts
