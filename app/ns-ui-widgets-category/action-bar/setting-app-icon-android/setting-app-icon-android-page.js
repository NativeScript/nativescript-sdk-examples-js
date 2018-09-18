const Observable = require("tns-core-modules/data/observable").Observable;

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("title", "Setting app Icon Android \nAction Bar Example");
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
