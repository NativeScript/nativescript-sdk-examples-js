const Observable = require("tns-core-modules/data/observable").Observable;

function onNavigatingTo(args) {
    let page = args.object;
}
exports.onNavigatingTo = onNavigatingTo;

function onTap(args) {
    let button = args.object;
    console.log("Button tapped", button);
}
exports.onTap = onTap;
