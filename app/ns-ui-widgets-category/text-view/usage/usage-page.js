// >> text-view-binding-code
import { Observable } from "@nativescript/core";
export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("viewDate", "");

    page.bindingContext = vm;
}
export function onTextViewLoaded(argsloaded) {
    const textView = argsloaded.object;
    textView.on("focus", (args) => {
        const view = args.object;
        console.log("On TextView focus");
    });
    textView.on("blur", (args) => {
        const view = args.object;
        console.log("On TextView blur");
    });
}

// << text-view-binding-code
