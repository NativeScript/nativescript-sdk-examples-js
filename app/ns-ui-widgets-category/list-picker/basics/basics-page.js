const fromObject = require("tns-core-modules/data/observable").fromObject;

function onNavigatingTo(args) {
    // >> list-picker-code-behind
    const pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
        "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

    const page = args.object;
    const vm = fromObject({
        pickerItems: pokemonList,
        index: 2
    });
    page.bindingContext = vm;
    // << list-picker-code-behind
}
exports.onNavigatingTo = onNavigatingTo;

function onSliderLoaded(args) {
    const sliderComponent = args.object;
    sliderComponent.on("valueChange", (sargs) => {
        const page = sargs.object.page;
        const vm = page.bindingContext;
        console.log(`slider index: ${sargs.object.value}`);
        vm.set("index", sargs.object.value);
    });
}
exports.onSliderLoaded = onSliderLoaded;

function onListPickerLoaded(args) {
    const listPickerComponent = args.object;
    const vm = listPickerComponent.page.bindingContext;
    listPickerComponent.on("selectedIndexChange", (lpargs) => {
        const listPicker = lpargs.object;
        vm.set("index", listPicker.selectedIndex);
        console.log(`ListPicker selected index: ${listPicker.selectedIndex}`);
    });
}
exports.onListPickerLoaded = onListPickerLoaded;
