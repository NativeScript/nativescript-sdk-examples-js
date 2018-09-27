// >> require-list-view-ts
import { ItemEventData, ListView } from "tns-core-modules/ui/list-view";
// << require-list-view-ts
import { alert } from "tns-core-modules/ui/dialogs";
import { Label } from "tns-core-modules/ui/label";
import { ObservableArray } from "tns-core-modules/data/observable-array";

const listViewArray = new ObservableArray([
    { title: "The Da Vinci Code" },
    { title: "Harry Potter and the Chamber of Secrets" },
    { title: "The Alchemist" },
    { title: "The Godfather" },
    { title: "Goodnight Moon" },
    { title: "The Hobbit" }
]);

export function onNavigatingTo(data) {
    const page = data.object;
    const container = page.getViewById("container");
    // >> create-list-view-code-ts
    const listView = new ListView();
    listView.className = "list-group";
    listView.items = listViewArray;
    // The itemLoading event is used to create the UI for each item that is shown in the ListView.
    listView.on(ListView.itemLoadingEvent, (args: ItemEventData) => {
        if (!args.view) {
            // Create label if it is not already created.
            args.view = new Label();
            args.view.className = "list-group-item";
        }
        (<any>args.view).text = listViewArray.getItem(args.index).title;

    });
    listView.on(ListView.itemTapEvent, (args: ItemEventData) => {
        const tappedItemIndex = args.index;
        const tappedItemView = args.view;
        alert(`Index: ${tappedItemIndex} View: ${tappedItemView}`)
            .then(() => {
                console.log("Dialog closed!");
            });
    });
    // << create-list-view-code-ts
    container.addChild(listView);
}
