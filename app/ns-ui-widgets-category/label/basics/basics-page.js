const Observable = require("tns-core-modules/data/observable").Observable;

function onNavigatingTo(args) {
    // >> label-text-binding
    const page = args.object;
    const vm = new Observable();
    vm.set("title", "NativeScript is Awesome");
    page.bindingContext = vm;
    // << label-text-binding

    // >> label-accessing-text
    const label = page.getViewById("lbl");
    label.text = "NativeScript is Awesome";
    label.textWrap = true;
    label.textAlignment = "center";
    // << label-accessing-text
}
exports.onNavigatingTo = onNavigatingTo;
