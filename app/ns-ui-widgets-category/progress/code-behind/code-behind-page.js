const observableModule = require("tns-core-modules/data/observable");
// >> progress-require
const progressModule = require("tns-core-modules/ui/progress");
// << progress-require
// >> creating-progress-code
function onPageLoaded(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    const stackLayout = page.getViewById("stackLayoutId");

    vm.set("prResult", 0);
    // creating new Switch and binding the value property
    const progress = new progressModule.Progress();
    progress.value = 0;
    setInterval(() => {
        progress.value += 2;
    }, 300);

    progress.on("valueChange", (args) => {
        vm.set("prResult", args.object.value);
    });

    stackLayout.addChild(progress);

    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
// << creating-progress-code
