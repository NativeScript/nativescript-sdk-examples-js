// >> require-list-picker
 const listPickerModule = require("tns-core-modules/ui/list-picker");
// << require-list-picker

const pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
"Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

function onNavigatingTo(args) {
    const page = args.object;
    const container = page.getViewById("container");
    // >> create-list-picker-code
    const listPicker = new listPickerModule.ListPicker();
    listPicker.items = pokemonList;
    listPicker.selectedIndex = 9;
    // << create-list-picker-code
    container.addChild(listPicker);
}
exports.onNavigatingTo = onNavigatingTo;
