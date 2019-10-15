// >> text-view-binding-code
const observableModule = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    vm.set("viewDate", "");

    page.bindingContext = vm;
}
function onTextViewLoaded(argsloaded) {
    const textView = argsloaded.object;
    textView.on("focus", (args) => {
        const view = args.object;
        console.log("On TextView focus");
    });
    textView.on("blur", (args) => {
        const view = args.object;
        console.log("On TextView blur");
    });
}
exports.onNavigatingTo = onNavigatingTo;
exports.onTextViewLoaded = onTextViewLoaded;
// << text-view-binding-code
