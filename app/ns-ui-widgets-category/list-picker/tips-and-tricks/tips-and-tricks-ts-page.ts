// >> list-picker-key-value-pairs-code-behind-ts
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { Page } from "tns-core-modules/ui/page";

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const vm = fromObject({
        items: [
            { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
            { id: 3, name: "Piqué", role: "Defender" },
            { id: 4, name: "I. Rakitic", role: "Midfielder" }
        ],
        index: 2,
        selectedItem: ""
    });
    page.bindingContext = vm;
}

export function onListPickerLoaded(args: EventData) {
    const listPicker = <ListPicker>args.object;
    listPicker.on("selectedIndexChange", (lpargs) => {
        const picker = <ListPicker>lpargs.object;
        console.log(`ListPicker selected value: ${(<any>picker).selectedValue} ListPicker selected index: ${picker.selectedIndex}`);
    });
}
// << list-picker-key-value-pairs-code-behind-ts
