// >> time-picker-configure-code
const Observable = require("tns-core-modules/data/observable").Observable;
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("hourResult", "Hour: _");
    vm.set("minuteResult", "Minute: _");
    vm.set("timeResult", "TIme: _");
    page.bindingContext = vm;
}

function onPickerLoaded(args) {
    const timePicker = args.object;

    timePicker.hour = 10;
    timePicker.minute = 25;
    // handling 'time change' via code behind
    timePicker.on("timeChange", (result) => {
        const page = args.object.page;
        const vm = page.bindingContext;
        vm.set("hourResult", `Hour: ${result.object.hour}`);
        vm.set("minuteResult", `Minute: ${result.object.minute}`);
        vm.set("timeResult", `TIme: ${result.object.time}`);
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onPickerLoaded = onPickerLoaded;
// << time-picker-configure-code
