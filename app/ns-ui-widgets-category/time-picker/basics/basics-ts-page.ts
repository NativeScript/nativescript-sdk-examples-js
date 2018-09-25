import { Observable, EventData } from "tns-core-modules/data/observable";
import { TimePicker } from "tns-core-modules/ui/time-picker";
import { Page } from "tns-core-modules/ui/page";
export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();
    vm.set("hourResult", "Hour: ...");
    vm.set("minuteResult", "Minute: ...");
    vm.set("timeResult", "Time: ...");
    page.bindingContext = vm;
}

// >> time-picker-configure-code-ts
export function onPickerLoaded(args) {
    const timePicker: TimePicker = <TimePicker>args.object;

    // Configurable properties of TimePicker
    timePicker.hour = 10;
    timePicker.minute = 25;
    // timePicker.minuteInterval = 5;
    // timePicker.minHour = 7;
    // timePicker.maxHour = 11;
    // timePicker.minMinute = 10;
    // timePicker.maxMinute = 45;
    // timePicker.time = new Date();

    // handling 'timeChange' event via code behind
    timePicker.on("timeChange", (argstm: any) => {
        // args is of type PropertyChangeData
        console.log("Picked TIME: ", argstm.value);
        console.log("Previous TIME: ", argstm.oldValue);

        // >> (hide)
        const page: Page = <Page>argstm.object.page;
        const vm = page.bindingContext;
        vm.set("hourResult", `Hour: ${argstm.object.hour}`);
        vm.set("minuteResult", `Minute: ${argstm.object.minute}`);
        vm.set("timeResult", `TIme: ${argstm.object.time}`);
        // << (hide)
    });
}
// << time-picker-configure-code-ts
