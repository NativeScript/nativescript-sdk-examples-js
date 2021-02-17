import { Observable, ObservableArray } from "@nativescript/core";
// >> repeater-create-code
const colors = ["red", "green", "blue"];
const secondColorsArray = new ObservableArray(["red", "green", "blue"]);
export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    vm.set("myItems", colors);
    vm.set("mySecondItems", secondColorsArray);

    page.bindingContext = vm;
}
// << repeater-create-code
export function onTap(args) {
    const page = args.object.page;
    const repeater = page.getViewById("firstRepeater");
    // >> repeater-array
    colors.push("yellow");
    // Manually trigger the update so that the new color is shown.
    repeater.refresh();
    // << repeater-array
}

export function onSecondTap(args) {
    // >> repeater-observable-array
    secondColorsArray.push("yellow");
    // The Repeater will be updated automatically.
    // << repeater-observable-array
}


