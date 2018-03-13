// >> time-picker-configure-code
var Observable = require("tns-core-modules/data/observable").Observable;
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new Observable();
    vm.set("hourResult", "Hour: _");
    vm.set("minuteResult", "Minute: _");
    vm.set("timeResult", "TIme: _");
    page.bindingContext = vm;
}

function onPickerLoaded (args) {
    let timePicker = args.object;

    timePicker.hour = 10;
    timePicker.minute = 25;

    timePicker.on("timeChange", (result)=>{
        let page = args.object.page;
        let vm = page.bindingContext;
        vm.set("hourResult", "Hour: " + result.object.hour);
        vm.set("minuteResult", "Minute: " + result.object.minute);
        vm.set("timeResult", "TIme: " + result.object.time);
    })
}

exports.onNavigatingTo = onNavigatingTo;
exports.onPickerLoaded = onPickerLoaded;
// << time-picker-configure-code