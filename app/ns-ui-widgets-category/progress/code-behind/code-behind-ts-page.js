"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var progress_1 = require("tns-core-modules/ui/progress");
function onPageLoaded(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var stackLayout = page.getViewById("stackLayoutId");
    vm.set("prResult", 0);
    var progress = new progress_1.Progress();
    progress.value = 0;
    setInterval(function () {
        progress.value += 2;
    }, 300);
    progress.on("valueChange", function (pargs) {
        vm.set("prResult", pargs.object.value);
    });
    stackLayout.addChild(progress);
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
