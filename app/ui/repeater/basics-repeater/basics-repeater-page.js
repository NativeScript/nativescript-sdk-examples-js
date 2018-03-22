const observableModule = require("tns-core-modules/data/observable");
const observableArrayModule = require("tns-core-modules/data/observable-array");
// >> repeater-create-code
const colors = ["red", "green", "blue"];
const secondColorsArray = new observableArrayModule.ObservableArray(["red", "green", "blue"]);
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();

    vm.set("myItems", colors);
    vm.set("mySecondItems", secondColorsArray);

    page.bindingContext = vm;
}
// << repeater-create-code
function onTap(args) {
    const page = args.object.page;
    const repeater = page.getViewById("firstRepeater");
    // >> repeater-array
    colors.push("yellow");
    // Manually trigger the update so that the new color is shown.
    repeater.refresh();
    // << repeater-array
}

function onSecondTap(args) {
    // >> repeater-observable-array
    secondColorsArray.push("yellow");
    // The Repeater will be updated automatically.
    // << repeater-observable-array
}

exports.onNavigatingTo = onNavigatingTo;
exports.onTap = onTap;
exports.onSecondTap = onSecondTap;

