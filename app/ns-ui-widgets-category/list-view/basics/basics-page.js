// >> list-view-create-code
const fromObject = require("tns-core-modules/data/observable").fromObject;

function onNavigatingTo(args) {
    const page = args.object;
    const vm = fromObject({
        // Setting the listview binding source
        myTitles: [
            { title: "The Da Vinci Code" },
            { title: "Harry Potter and the Chamber of Secrets" },
            { title: "The Alchemist" },
            { title: "The Godfather" },
            { title: "Goodnight Moon" },
            { title: "The Hobbit" }
        ]
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;

function onListViewLoaded(args) {
    const listView = args.object;
}
exports.onListViewLoaded = onListViewLoaded;

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
    page.bindingContext.myTitles.push({ title: "Game of Thrones" });
    // Manually trigger the update so that the new color is shown.
    listView.refresh();
    // << list-view-refresh

}
exports.onTap = onTap;

