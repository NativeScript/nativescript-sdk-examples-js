// >> progress-value-change-event
import { Observable } from "@nativescript/core";

export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("progressValue", 10); // Initial value
    vm.set("progressMaxValue", 100); // Maximum value
    // Forcing progress value change (for demonstration)
    setInterval(() => {
        const value = vm.get("progressValue");
        vm.set("progressValue", value + 2);
    }, 300);
    page.bindingContext = vm;
}
export function onProgressLoaded(args) {
    const myProgressBar = args.object;
    myProgressBar.on("valueChange", (pargs) => {
        // TIP: args (for valueChange of Progress) is extending EventData with oldValue & value parameters
        console.log(`Old Value: ${pargs.oldValue}`);
        console.log(`New Value: ${pargs.value}`);
    });
}


// << progress-value-change-event
