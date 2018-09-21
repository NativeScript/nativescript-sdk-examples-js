// >> action-bar-hide-show-js
const Observable = require("tns-core-modules/data/observable").Observable;
let value = false;

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("abHidden", value);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;

function onTap(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    value = !value;
    vm.set("abHidden", value);
}
exports.onTap = onTap;
// << action-bar-hide-show-js
