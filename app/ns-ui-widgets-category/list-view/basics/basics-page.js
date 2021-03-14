// >> list-view-create-code
import { fromObject } from "@nativescript/core";

export function onNavigatingTo(args) {
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


export function onListViewLoaded(args) {
    const listView = args.object;
}

export function onItemTap(args) {
    const index = args.index;
    console.log(`Second ListView item tap ${index}`);
}
// << list-view-create-code

export function onTap(args) {
    const page = args.object.page;
    // >> list-view-refresh
    const listView = page.getViewById("listView");
    page.bindingContext.myTitles.push({ title: "Game of Thrones" });
    // Manually trigger the update so that the new color is shown.
    listView.refresh();
    // << list-view-refresh

}

