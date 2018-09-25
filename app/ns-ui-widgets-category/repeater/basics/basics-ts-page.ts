import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Page } from "tns-core-modules/ui/page";
import { Repeater } from "tns-core-modules/ui/repeater";
// >> repeater-create-code-ts
const colors = ["red", "green", "blue"];
const secondColorsArray = new ObservableArray(["red", "green", "blue"]);
export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();

    vm.set("myItems", colors);
    vm.set("mySecondItems", secondColorsArray);

    page.bindingContext = vm;
}
// << repeater-create-code-ts
export function onTap(args) {
    const page: Page = <Page>args.object.page;
    const repeater: Repeater = <Repeater>page.getViewById("firstRepeater");
    // >> repeater-array-ts
    colors.push("yellow");
    // Manually trigger the update so that the new color is shown.
    repeater.refresh();
    // << repeater-array-ts
}

export function onSecondTap() {
    // >> repeater-observable-array-ts
    secondColorsArray.push("yellow");
    // The Repeater will be updated automatically.
    // << repeater-observable-array-ts
}
