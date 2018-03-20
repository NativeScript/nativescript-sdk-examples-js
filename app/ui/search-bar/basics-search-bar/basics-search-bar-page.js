const observableModule = require("tns-core-modules/data/observable");
// >> search-bar-basics-code
function onNavigatingTo(args) {
    const page = args.object;
    // binding SegmentedBar `text` abd `hint` properties
    const vm = new observableModule.Observable();
    vm.set("sbHint", "Search");
    vm.set("sbText", "");
    // handle text change event
    vm.on(observableModule.Observable.propertyChangeEvent, (propertyChangeData) => {
        if (propertyChangeData.propertyName === "sbText") {
            console.log("SearchBar text changed! New value: ", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}

// Handle SearchBar `submit` event.
function onSubmit(args) {
    const searchbar = args.object;
    console.log("Search submit result: ", searchbar.text);
    alert(`You are searching for ${searchbar.text}`);
}

// Handle SearchBar `clear` event.
function onClear(args) {
    console.log("clear search-bar text");
    alert("clear search-bar text");
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
// << search-bar-basics-code
