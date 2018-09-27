import { EventData, fromObject } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

export function onNavigatingTo(args: EventData) {
    // >> list-picker-code-behind-ts
    const pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
        "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

    const page = <Page>args.object;
    const vm = fromObject({
        pickerItems: pokemonList,
        index: 2
    });
    page.bindingContext = vm;
    // << list-picker-code-behind-ts
}

export function onSliderLoaded(args) {
    const sliderComponent = args.object;
    sliderComponent.on("valueChange", (sargs) => {
        const page = sargs.object.page;
        const vm = page.bindingContext;
        console.log(`slider index: ${sargs.object.value}`);
        vm.set("index", sargs.object.value);
    });
}

export function onListPickerLoaded(args) {
    const listPickerComponent = args.object;
    const vm = listPickerComponent.page.bindingContext;
    listPickerComponent.on("selectedIndexChange", (lpargs) => {
        const listPicker = lpargs.object;
        vm.set("index", listPicker.selectedIndex);
        console.log(`ListPicker selected index: ${listPicker.selectedIndex}`);
    });
}
