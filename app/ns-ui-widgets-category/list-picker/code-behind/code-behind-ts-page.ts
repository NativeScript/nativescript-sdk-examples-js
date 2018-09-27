import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
// >> require-list-picker-ts
import { ListPicker } from "tns-core-modules/ui/list-picker";
// << require-list-picker-ts

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const container = <StackLayout>page.getViewById("container");
    // >> create-list-picker-code-ts
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
    // << create-list-picker-code-ts
    container.addChild(listPicker);
}
