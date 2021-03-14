// >> list-picker-code-behind
import { fromObject } from "@nativescript/core";
const years = [1980, 1990, 2000, 2010, 2020];
export function onNavigatingTo(args) {
    const page = args.object;
    const vm = fromObject({
        years: years
    });
    page.bindingContext = vm;

}


export function onListPickerLoaded(fargs) {
    const listPickerComponent = fargs.object;
    listPickerComponent.on("selectedIndexChange", (args) => {
        const picker = args.object;
        console.log(`index: ${picker.selectedIndex}; item" ${years[picker.selectedIndex]}`);
    });
}
// << list-picker-code-behind
