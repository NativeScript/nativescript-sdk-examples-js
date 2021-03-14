// >> require-list-view
import { ListView } from "@nativescript/core";
// << require-list-view
import { Dialogs, Label, ObservableArray } from "@nativescript/core";
const listViewArray = new ObservableArray([
    { title: "The Da Vinci Code" },
    { title: "Harry Potter and the Chamber of Secrets" },
    { title: "The Alchemist" },
    { title: "The Godfather" },
    { title: "Goodnight Moon" },
    { title: "The Hobbit" }
]);

export function onNavigatingTo(args) {
    const page = args.object;
    // >> create-list-view-code
    const container = page.getViewById("container");

    const listView = new ListView();
    listView.className = "list-group";
    listView.items = listViewArray;
    // The itemLoading event is used to create the UI for each item that is shown in the ListView.
    listView.on(ListView.itemLoadingEvent, (args) => {
        if (!args.view) {
            // Create label if it is not already created.
            args.view = new Label();
            args.view.className = "list-group-item";
        }
        (args.view).text = listViewArray.getItem(args.index).title;

    });
    listView.on(ListView.itemTapEvent, (args) => {
        const tappedItemIndex = args.index;
        const tappedItemView = args.view;
        Dialogs.alert(`Index: ${tappedItemIndex} View: ${tappedItemView}`)
            .then(() => {
                console.log("Dialog closed!");
            });
    });

    container.addChild(listView);
    // << create-list-view-code
}

