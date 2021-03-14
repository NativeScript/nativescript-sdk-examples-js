import { fromObject } from "@nativescript/core";

// >> list-picker-key-value-pairs-code-behind
export function onNavigatingTo(args) {

    const page = args.object;
    const vm = fromObject({
        items: [
            { id: 1,
name: "Ter Stegen",
role: "Goalkeeper" },
            { id: 3,
name: "Piqué",
role: "Defender" },
            { id: 4,
name: "I. Rakitic",
role: "Midfielder" }
        ],
        index: 2,
        selectedItem: ""
    });
    page.bindingContext = vm;
}


export function onListPickerLoaded(args) {
    const listPicker = args.object;
    listPicker.on("selectedIndexChange", (lpargs) => {
        const picker = lpargs.object;
        console.log(`ListPicker selected value: ${picker.selectedValue} ListPicker selected index: ${picker.selectedIndex}`);
    });
}
// << list-picker-key-value-pairs-code-behind
