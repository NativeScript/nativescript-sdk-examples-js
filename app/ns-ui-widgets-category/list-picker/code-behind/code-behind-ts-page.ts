// >> create-list-picker-code-ts
import { EventData } from "@nativescript/core";
import { Page } from "@nativescript/core";
import { StackLayout } from "@nativescript/core";
import { ListPicker } from "@nativescript/core";

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
