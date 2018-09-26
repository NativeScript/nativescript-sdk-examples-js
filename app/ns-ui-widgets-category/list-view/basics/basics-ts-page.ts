// >> list-view-create-code-ts
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { ListView, ItemEventData } from "tns-core-modules/ui/list-view";
import { Page } from "tns-core-modules/ui/page";

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
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

export function onListViewLoaded(args: EventData) {
    const listView = <ListView>args.object;
}

export function onItemTap(args: ItemEventData) {
    const index = args.index;
    console.log(`Second ListView item tap ${index}`);
}
// << list-view-create-code-ts

export function onTap(args) {
    const page = args.object.page;
    // >> list-view-refresh-ts
    const listView = page.getViewById("listView");
    page.bindingContext.myTitles.push({ title: "Game of Thrones" });
    // Manually trigger the update so that the new color is shown.
    listView.refresh();
    // << list-view-refresh-ts
}
