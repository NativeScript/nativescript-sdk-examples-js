const Observable = require("tns-core-modules/data/observable").Observable;
// >> date-picker-dates
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    const TODAY = new Date();
    vm.set("date", TODAY);
    vm.set("minDate", new Date(1975, 0, 29));
    vm.set("maxDate", new Date(2045, 4, 12));
    
    page.bindingContext = vm;
}
function onDatePickerLoaded(args) {
    var datePicker = args.object;
    datePicker.on("dateChange", function (args) {
        console.dir(args);
    });
    datePicker.on("dayChange", function (args) {
        console.dir(args);
    });
    datePicker.on("monthChange", function (args) {
        console.dir(args);
    });
    datePicker.on("yearChange", function (args) {
        console.dir(args);
    });
}
exports.onNavigatingTo = onNavigatingTo;
exports.onDatePickerLoaded = onDatePickerLoaded;
// << date-picker-dates
