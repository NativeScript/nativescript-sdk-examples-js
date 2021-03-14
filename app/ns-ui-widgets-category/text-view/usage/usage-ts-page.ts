// >> text-view-binding-code-ts
import { Observable, Page, TextView } from "@nativescript/core";

export function onNavigatingTo(args) {
    const page: Page = <Page> args.object;
    const vm = new Observable();
    vm.set("viewDate", "");
    page.bindingContext = vm;
}
export function onTextViewLoaded(argsloaded) {
    let textView: TextView = <TextView> argsloaded.object;
    textView.on("focus", (args) => {
        let view: TextView = <TextView> args.object;
        console.log("On TextView focus");
    });
    textView.on("blur", (args) => {
        let view: TextView = <TextView> args.object;
        console.log("On TextView blur");
    });
}
// << text-view-binding-code-ts
