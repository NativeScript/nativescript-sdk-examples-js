// >> image-binding-code
const Observable = require("tns-core-modules/data/observable").Observable;

function onNavigatingTo(args) {
    const view = args.object;
    
    const vm = new Observable();
    vm.set("imageUri", "~/images/logo.png");
    view.bindingContext = vm;
    
}
exports.onNavigatingTo = onNavigatingTo;
// << image-binding-code