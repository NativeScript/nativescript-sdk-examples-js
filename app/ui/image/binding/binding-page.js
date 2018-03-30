const Observable = require("tns-core-modules/data/observable").Observable;

function onNavigatingTo(args) {
    const page = args.object;
    // >> image-binding-code
    const vm = new Observable();
    vm.set("imageUri", "~/images/logo.png");
    page.bindingContext = vm;
    // << image-binding-code
}
exports.onNavigatingTo = onNavigatingTo;
