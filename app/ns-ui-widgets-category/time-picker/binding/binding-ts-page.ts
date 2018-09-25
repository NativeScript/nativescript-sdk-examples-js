// >> time-picker-binding-code-ts
import { Observable } from "tns-core-modules/data/observable";
import { TimePicker } from "tns-core-modules/ui/time-picker";
// setting up the initial values for the TimePicker component
export function onNavigatingTo(args) {
    const page = args.object;

    const vm = new Observable();
    vm.set("tphour", 16);
    vm.set("tpminute", 15);
    vm.set("tpMaxHour", 18);
    vm.set("tpMaxMinute", 48);
    vm.set("tpMinHour", 10);
    vm.set("tpMinMinute", 10);
    vm.set("tpminuteInterval", 5);
    vm.set("timeResult", "_");

    page.bindingContext = vm;
}

export function onPickerLoaded(eventData) {
    const timePicker: TimePicker = <TimePicker>eventData.object;
    // handling 'time change' via code behind
    timePicker.on("timeChange", (args: any) => {
        // args is of type PropertyChangeData
        console.log("Picked TIME: ", args.value);

        const page = args.object.page;
        const vm = page.bindingContext;
        vm.set("timeResult", args.value);
    });
}
// << time-picker-binding-code-ts
