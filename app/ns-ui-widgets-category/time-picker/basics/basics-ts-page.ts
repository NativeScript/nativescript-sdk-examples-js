
const Observable = require("tns-core-modules/data/observable").Observable;
const TimePicker = require("tns-core-modules/ui/time-picker").TimePicker;

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("hourResult", "Hour: ...");
    vm.set("minuteResult", "Minute: ...");
    vm.set("timeResult", "Time: ...");
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;

// >> time-picker-configure-code
function onPickerLoaded(args) {
    const timePicker = args.object;

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
    timePicker.on("timeChange", (args) => {
        // args is of type PropertyChangeData
        console.log("Picked TIME: ", args.value);
        console.log("Previous TIME: ", args.oldValue);

        // >> (hide)
        const page = args.object.page;
        const vm = page.bindingContext;
        vm.set("hourResult", `Hour: ${args.object.hour}`);
        vm.set("minuteResult", `Minute: ${args.object.minute}`);
        vm.set("timeResult", `TIme: ${args.object.time}`);
        // << (hide)
    });
}
exports.onPickerLoaded = onPickerLoaded;
// << time-picker-configure-code
