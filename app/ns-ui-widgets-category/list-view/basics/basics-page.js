// >> list-view-create-code
const Observable = require("tns-core-modules/data/observable").Observable;
const titlesArray = [
    { title: "The Da Vinci Code" },
    { title: "Harry Potter and the Chamber of Secrets" },
    { title: "The Alchemist" },
    { title: "The Godfather" },
    { title: "Goodnight Moon" },
    { title: "The Hobbit" }
];

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    // Setting the listview binding source
    vm.set("myTitles", titlesArray);

    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;

function onItemTap(args) {
    const index = args.index;
    console.log(`Second ListView item tap ${index}`);
}
exports.onItemTap = onItemTap;
// << list-view-create-code

function onTap(args) {
    const page = args.object.page;
    // >> list-view-refresh
    const listView = page.getViewById("listView");

    titlesArray.push({ title: "Game of Thrones" });
// Manually trigger the update so that the new color is shown.
listView.refresh();
    // << list-view-refresh

}
exports.onTap = onTap;

