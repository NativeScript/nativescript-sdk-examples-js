// >> require-list-picker
const ListPicker = require("tns-core-modules/ui/list-picker").ListPicker;
// << require-list-picker

function onNavigatingTo(args) {
    const page = args.object;
    const container = page.getViewById("container");
    // >> create-list-picker-code
    const listPicker = new ListPicker();
    listPicker.items = [
        "NativeScript Core - JavaScript",
        "NativeScript Core - TypeScript",
        "NativeScript Angular",
        "NativeScript Vue",
        "NativeScript Code Sharing",
        "NativeScript Sidekick"
    ];
    listPicker.selectedIndex = 0;
    // << create-list-picker-code
    container.addChild(listPicker);
}
exports.onNavigatingTo = onNavigatingTo;
