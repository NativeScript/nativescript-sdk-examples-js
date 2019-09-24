// >> list-picker-code-behind
const fromObject = require("tns-core-modules/data/observable").fromObject;
const years = [1980, 1990, 2000, 2010, 2020];
function onNavigatingTo(args) {
    const page = args.object;
    const vm = fromObject({
        years: years
    });
    page.bindingContext = vm;

}
exports.onNavigatingTo = onNavigatingTo;

function onListPickerLoaded(fargs) {
    const listPickerComponent = fargs.object;
    listPickerComponent.on("selectedIndexChange", (args) => {
        const picker = args.object;
        console.log(`index: ${picker.selectedIndex}; item" ${years[picker.selectedIndex]}`);
    });
}
exports.onListPickerLoaded = onListPickerLoaded;
// << list-picker-code-behind
