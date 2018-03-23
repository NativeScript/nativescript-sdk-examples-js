const Observable = require("tns-core-modules/data/observable").Observable;
const dialogs = require("tns-core-modules/ui/dialogs");

const pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
"Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];
// >> list-picker-code-behind
function onNavigatingTo(args) {
    
    const page = args.object;
    const vm = new Observable();
    vm.set("pokemons", pokemonList);
    vm.set("index", 0);
    page.bindingContext = vm;
    
}

function onSliderLoaded(args) {
    const sliderComponent = args.object;
    sliderComponent.on("valueChange", (sargs) => {
        const page = sargs.object.page;
        const vm = page.bindingContext;
        console.log("slider index: "+sargs.object.value);
        vm.set("index", sargs.object.value);
    });
}

function onListPickerLoaded(args) {
    const listPickerComponent = args.object;
    const vm = listPickerComponent.page.bindingContext;
    listPickerComponent.on("selectedIndexChange", (lpargs) => {
        const listPicker = lpargs.object;
        vm.set("index", listPicker.selectedIndex);
        console.log(`ListPicker selected index: ${listPicker.selectedIndex}`);
    });
}
// << list-picker-code-behind
exports.onNavigatingTo = onNavigatingTo;
exports.onSliderLoaded = onSliderLoaded;
exports.onListPickerLoaded = onListPickerLoaded;
