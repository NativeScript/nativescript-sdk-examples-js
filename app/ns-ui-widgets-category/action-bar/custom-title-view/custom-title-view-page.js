const Observable = require("tns-core-modules/data/observable").Observable;

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("title", "Custom title view \nAction Bar Example");
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
