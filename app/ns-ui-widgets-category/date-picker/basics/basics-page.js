const Observable = require("tns-core-modules/data/observable").Observable;
// >> date-picker-dates
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    // in the following example the DatePicker properties are binded via Observableproperties
    const TODAY = new Date();
    vm.set("date", TODAY); // the binded date property accepts Date object
    vm.set("minDate", new Date(1975, 0, 29)); // the binded minDate property accepts Date object
    vm.set("maxDate", new Date(2045, 4, 12)); // the binded maxDate property accepts Date object

    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;

function onDatePickerLoaded(args) {
    const datePicker = args.object;
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
exports.onDatePickerLoaded = onDatePickerLoaded;
// << date-picker-dates
