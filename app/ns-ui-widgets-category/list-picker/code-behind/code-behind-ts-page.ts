// >> create-list-picker-code-ts
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { ListPicker } from "tns-core-modules/ui/list-picker";

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const container = <StackLayout>page.getViewById("container");

    const listPicker = new ListPicker();
    listPicker.items = [
        "NativeScript Core - JavaScript",
        "NativeScript Core - TypeScript",
        "NativeScript Angular",
        "NativeScript Vue",
        "NativeScript Code Sharing",
        "NativeScript Sidekick"
    ];
    listPicker.selectedIndex = 1;
    container.addChild(listPicker);
}
// << create-list-picker-code-ts
