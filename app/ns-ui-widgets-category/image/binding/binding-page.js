const Observable = require("tns-core-modules/data/observable").Observable;

function onNavigatingTo(args) {
    const view = args.object;
    // >> image-binding-code
    const vm = new Observable();
    vm.set("imageUri", "~/images/logo.png");
    view.bindingContext = vm;
    // << image-binding-code
}
exports.onNavigatingTo = onNavigatingTo;
