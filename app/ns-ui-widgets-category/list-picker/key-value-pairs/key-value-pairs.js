const Observable = require("tns-core-modules/data/observable").Observable;

const array = [
    {
        id: 1,
        name: "Ter Stegen",
        role: "Goalkeeper"
    },
    {
        id: 3,
        name: "Piqué",
        role: "Defender"
    },
    {
        id: 4,
        name: "I. Rakitic",
        role: "Midfielder" },
    {
        id: 5,
        name: "Sergio",
        role: "Midfielder"
    },
    {
        id: 6,
        name: "Denis Suárez",
        role: "Midfielder"
    },
    {
        id: 7,
        name: "Arda",
        role: "Midfielder"
    },
    {
        id: 8,
        name: "A. Iniesta",
        role: "Midfielder"
    },
    {
        id: 9,
        name: "Suárez",
        role: "Forward"
    },
    {
        id: 10,
        name: "Messi",
        role: "Forward"
    },
    {
        id: 11,
        name: "Neymar",
        role: "Forward"
    },
    {
        id: 12,
        name: "Rafinha",
        role: "Midfielder"
    },
    {
        id: 13,
        name: "Cillessen",
        role: "Goalkeeper"
    },
    {
        id: 14,
        name: "Mascherano",
        role: "Defender"
    },
    {
        id: 17,
        name: "Paco Alcácer",
        role: "Forward"
    },
    {
        id: 18,
        name: "Jordi Alba",
        role: "Defender"
    },
    {
        id: 19,
        name: "Digne",
        role: "Defender"
    },
    {
        id: 20,
        name: "Sergi Roberto",
        role: "Midfielder"
    },
    {
        id: 21,
        name: "André Gomes",
        role: "Midfielder"
    },
    {
        id: 22,
        name: "Aleix Vidal",
        role: "Midfielder"
    },
    {
        id: 23,
        name: "Umtiti",
        role: "Defender"
    },
    {
        id: 24,
        name: "Mathieu",
        role: "Defender"
    },
    {
        id: 25,
        name: "Masip",
        role: "Goalkeeper"
    }
  ];
// >> list-picker-key-value-pairs-code-behind
function onNavigatingTo(args) {

    const page = args.object;
    const vm = new Observable();
    vm.set("items", array);
    vm.set("index", 2);
    vm.set("selectedItem", "");
    page.bindingContext = vm;
}


function onListPickerLoaded(args) {
    const listPickerComponent = args.object;
    const vm = listPickerComponent.page.bindingContext;
    listPickerComponent.on("selectedIndexChange", (lpargs) => {
        const listPicker = lpargs.object;
        vm.set("index", listPicker.selectedIndex);
        console.log(`ListPicker selected value: ${listPicker.selectedValue}`);
        console.log(`ListPicker selected index: ${listPicker.selectedIndex}`);
    });
}
// << list-picker-key-value-pairs-code-behind
exports.onNavigatingTo = onNavigatingTo;
exports.onListPickerLoaded = onListPickerLoaded;
