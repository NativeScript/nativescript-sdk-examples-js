const Observable = require("tns-core-modules/data/observable").Observable;
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("title", "Getting Started \nAction Bar Example");
    vm.set("snippet", "<ActionBar title=\"Gettings Started\" class=\"action-bar\"/>");
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
