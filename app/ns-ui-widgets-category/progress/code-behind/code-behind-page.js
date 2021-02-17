import { Observable } from "@nativescript/core";
// >> progress-require
import { Progress } from "@nativescript/core";
// << progress-require
// >> creating-progress-code
export function onPageLoaded(args) {
    const page = args.object;
    const vm = new Observable();
    const stackLayout = page.getViewById("stackLayoutId");

    vm.set("prResult", 0);
    // creating new Switch and binding the value property
    const progress = new Progress();
    progress.value = 0;
    setInterval(() => {
        progress.value += 2;
    }, 300);

    progress.on("valueChange", (args) => {
        vm.set("prResult", args.object.value);
    });

    stackLayout.addChild(progress);

    page.bindingContext = vm;
}


// << creating-progress-code
