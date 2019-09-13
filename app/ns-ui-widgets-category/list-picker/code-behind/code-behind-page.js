// >> create-list-picker-code
const ListPicker = require("tns-core-modules/ui/list-picker").ListPicker;


function onNavigatingTo(args) {
    const page = args.object;
    const container = page.getViewById("container");
    
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
    
    container.addChild(listPicker);
}
exports.onNavigatingTo = onNavigatingTo;
// << create-list-picker-code