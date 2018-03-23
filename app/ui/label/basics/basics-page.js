const Observable = require("tns-core-modules/data/observable").Observable;

function onNavigatingTo(args) {
    // >> label-text-binding
    const page = args.object;
    const vm = new Observable();
    vm.set("title", "Expected Value");
    page.bindingContext = vm;
    // << label-text-binding
}
exports.onNavigatingTo = onNavigatingTo;
