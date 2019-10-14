// >> search-bar-basics-code
const observableModule = require("tns-core-modules/data/observable");

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    vm.set("sbText", "");

    vm.on(observableModule.Observable.propertyChangeEvent, (propertyChangeData) => {
        if (propertyChangeData.propertyName === "sbText") {
            const searchBar = propertyChangeData.object;
            console.log(`Input changed! New value: ${propertyChangeData.value}`);
        }
    });
    page.bindingContext = vm;
}

function onSubmit(args) {
    const searchBar = args.object;
    console.log(`Searching for ${searchBar.text}`);
}

function onClear(args) {
    const searchBar = args.object;
    console.log("Clear event raised");
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
// << search-bar-basics-code
