const Observable = require("tns-core-modules/data/observable").Observable;

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("title", "Navigation Button \nAction Bar Example");
    page.bindingContext = vm;
}
function onNavBtnTap() {
    // This code will be called only in Android.
    console.log("Navigation button tapped!");
}

exports.onNavigatingTo = onNavigatingTo;
exports.onNavBtnTap = onNavBtnTap;
