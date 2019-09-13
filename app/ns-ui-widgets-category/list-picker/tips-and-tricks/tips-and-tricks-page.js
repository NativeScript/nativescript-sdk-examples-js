const fromObject = require("tns-core-modules/data/observable").fromObject;

// >> list-picker-key-value-pairs-code-behind
function onNavigatingTo(args) {

    const page = args.object;
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
exports.onNavigatingTo = onNavigatingTo;

function onListPickerLoaded(args) {
    const listPicker = args.object;
    listPicker.on("selectedIndexChange", (lpargs) => {
        const picker = lpargs.object;
        console.log(`ListPicker selected value: ${picker.selectedValue} ListPicker selected index: ${picker.selectedIndex}`);
    });
}
exports.onListPickerLoaded = onListPickerLoaded;
// << list-picker-key-value-pairs-code-behind
