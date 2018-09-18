const Observable = require("tns-core-modules/data/observable").Observable;

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("title", "Items \nAction Bar Example");
    page.bindingContext = vm;
}

function onShare(){
    console.log("share tap");
}

function onDelete(){
    console.log("delete tap");
}

exports.onNavigatingTo = onNavigatingTo;
exports.onShare = onShare;
exports.onDelete = onDelete;
