// >> label-text-binding
const Observable = require("tns-core-modules/data/observable").Observable;

function onNavigatingTo(args) {
    
    const page = args.object;
    const vm = new Observable();
    vm.set("title", "NativeScript is Awesome");
    page.bindingContext = vm;
    
}
exports.onNavigatingTo = onNavigatingTo;
// << label-text-binding