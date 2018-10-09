const observableModule = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    vm.set("progressValue", 10);
    vm.set("progressMaxValue", 100);
    setInterval(() => {
        const value = vm.get("progressValue");
        vm.set("progressValue", value + 2);
    }, 300);
    page.bindingContext = vm;
}

function onProgressLoaded(args) {
    const sliderComponent = args.object;
    sliderComponent.on("valueChange", (pargs) => {
        console.log(`Old Value: ${pargs.oldValue}`);
        console.log(`New Value: ${pargs.value}`);
    });
}

exports.onProgressLoaded = onProgressLoaded;
exports.onNavigatingTo = onNavigatingTo;
