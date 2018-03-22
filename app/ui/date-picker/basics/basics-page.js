const Observable = require("tns-core-modules/data/observable").Observable;

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    // >> date-picker-dates
    const TODAY = new Date();
    vm.set("date", TODAY);
    vm.set("minDate", new Date(1975, 0, 29));
    vm.set("maxDate", new Date(2045, 4, 12));
    // << date-picker-dates
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
