const Observable = require("tns-core-modules/data/observable").Observable;
const vm = new Observable();

function onNavigatingTo(args) {
    const page = args.object;
    vm.set("counter", 0);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;

// >> button-tap-event
function onTap(args) {
    // const button = args.object;

    let count = vm.get("counter"); // initial value = 0
    vm.set("counter", ++count);
    console.log("Tapped ", vm.get("counter"), " times!");
}
exports.onTap = onTap;
// << button-tap-event
