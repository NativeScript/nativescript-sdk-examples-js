const app = require("tns-core-modules/application");
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
function onPageUnloaded(){
    let rootView = app.getRootView();
    rootView.actionBarVisibility = "auto";
}
exports.onPageUnloaded = onPageUnloaded;
// >> action-bar-action-bar-visibiloty-js
function onAutoTap(args) {
    let rootView = app.getRootView();
    console.log(rootView)
    rootView.actionBarVisibility = "auto";
}
exports.onAutoTap = onAutoTap;
function onNeverTap(args) {
    let rootView = app.getRootView();
    console.log(rootView.actionBarVisibility);
    rootView.actionBarVisibility = "never";
    console.log(rootView.actionBarVisibility);
}
exports.onNeverTap = onNeverTap;
function onAlwaysTap(args) {
    let rootView = app.getRootView();
    rootView.actionBarVisibility = "always";
}
exports.onAlwaysTap = onAlwaysTap;
// << action-bar-action-bar-visibiloty-js