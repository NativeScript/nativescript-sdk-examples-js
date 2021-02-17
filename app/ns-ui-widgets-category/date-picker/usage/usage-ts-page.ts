// >> date-picker-dates-ts
import { EventData, Observable } from "@nativescript/core";
import { DatePicker } from "@nativescript/core";
import { Page } from "@nativescript/core";

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const vm = new Observable();

    // in the following example the DatePicker properties are binded via Observableproperties
    vm.set("minDate", new Date(1975, 0, 29)); // the binded minDate property accepts Date object
    vm.set("maxDate", new Date(2045, 4, 12)); // the binded maxDate property accepts Date object

    page.bindingContext = vm;
}

export function onDatePickerLoaded(data: EventData) {
    const datePicker = <DatePicker>data.object;
    datePicker.on("dateChange", (args) => {
        console.dir(args);
    });
    datePicker.on("dayChange", (args) => {
        console.dir(args);
    });
    datePicker.on("monthChange", (args) => {
        console.dir(args);
    });
    datePicker.on("yearChange", (args) => {
        console.dir(args);
    });
}
// << date-picker-dates-ts
