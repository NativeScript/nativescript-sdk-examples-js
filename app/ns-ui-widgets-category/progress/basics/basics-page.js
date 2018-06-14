const observableModule = require("tns-core-modules/data/observable");
// >> progress-value-change-event
function onNavigatingTo(args) {
    const page = args.object;
    // set up the initial values for the progress components
    const vm = new observableModule.Observable();
    vm.set("progressValue", 10);
    vm.set("progressMaxValue", 100);
    setInterval(() => {
        const value = vm.get("progressValue");
        vm.set("progressValue", value + 2);
    }, 300);
    page.bindingContext = vm;
}
// handle value change
function onProgressLoaded(args) {
    const sliderComponent = args.object;
    sliderComponent.on("valueChange", (pargs) => {
        console.log(`Old Value: ${pargs.oldValue}`);
        console.log(`New Value: ${pargs.value}`);
    });
}

exports.onProgressLoaded = onProgressLoaded;
exports.onNavigatingTo = onNavigatingTo;
// << progress-value-change-event
