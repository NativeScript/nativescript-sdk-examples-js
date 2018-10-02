"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
        "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];
    var page = args.object;
    var vm = observable_1.fromObject({
        pickerItems: pokemonList,
        index: 2
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onSliderLoaded(args) {
    var sliderComponent = args.object;
    sliderComponent.on("valueChange", function (sargs) {
        var page = sargs.object.page;
        var vm = page.bindingContext;
        console.log("slider index: " + sargs.object.value);
        vm.set("index", sargs.object.value);
    });
}
exports.onSliderLoaded = onSliderLoaded;
function onListPickerLoaded(args) {
    var listPickerComponent = args.object;
    var vm = listPickerComponent.page.bindingContext;
    listPickerComponent.on("selectedIndexChange", function (lpargs) {
        var listPicker = lpargs.object;
        vm.set("index", listPicker.selectedIndex);
        console.log("ListPicker selected index: " + listPicker.selectedIndex);
    });
}
exports.onListPickerLoaded = onListPickerLoaded;
