// >> time-picker-binding-code
var Observable = require("tns-core-modules/data/observable").Observable;
// setting up the initial values for the TimePicker component 
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new Observable();
    vm.set("tphour", 16);
    vm.set("tpminute", 15);
    vm.set("tpMaxHour", 18);
    vm.set("tpMaxMinute", 48);
    vm.set("tpMinHour", 10);
    vm.set("tpMinMinute", 10);
    vm.set("tpminuteInterval", 5);
    vm.set("timeResult", '_')
    page.bindingContext = vm;
}


function onPickerLoaded (args) {
    let timePicker = args.object;
    // handling 'time change' via code behind
    timePicker.on("timeChange", (result)=>{
        let page = args.object.page;
        let vm = page.bindingContext;
        vm.set("timeResult", result.object.time);
    })
}

exports.onNavigatingTo = onNavigatingTo;
exports.onPickerLoaded = onPickerLoaded;
// << time-picker-binding-code