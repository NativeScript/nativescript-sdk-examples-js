// >> label-text-binding-ts
import { EventData, Observable, Page } from "@nativescript/core";

export function onNavigatingTo(args: EventData) {

    const page = <Page>args.object;
    const vm = new Observable();
    vm.set("title", "NativeScript is Awesome");
    page.bindingContext = vm;

}
// << label-text-binding-ts
