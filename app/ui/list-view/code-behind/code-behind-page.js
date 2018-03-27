// >> require-list-view
 const listViewModule = require("tns-core-modules/ui/list-view");
// << require-list-view
const dialogs = require("tns-core-modules/ui/dialogs");
const labelModule = require("tns-core-modules/ui/label");
const observableArrayModule = require("tns-core-modules/data/observable-array");

const listViewArray = new observableArrayModule.ObservableArray(
    [
        {
            title:"The Da Vinci Code"
        },
        {
            title:"Harry Potter and the Chamber of Secrets"
        },
        {
            title:"The Alchemist"
        },
        {
            title:"The Godfather"
        },
        {
            title:"Goodnight Moon"
        },
        {
            title:"The Hobbit"
        }
    ]);

function onNavigatingTo(args) {
    const page = args.object;
    const container = page.getViewById("container");
    // >> create-list-view-code
    const listView = new listViewModule.ListView();
    listView.className = "list-group";
    listView.items = listViewArray;
    // The itemLoading event is used to create the UI for each item that is shown in the ListView.
    listView.on(listViewModule.ListView.itemLoadingEvent, (args) => {
        if (!args.view) {
            // Create label if it is not already created.
            args.view = new labelModule.Label();
            args.view.className = "list-group-item";
        }
        (args.view).text = listViewArray.getItem(args.index).title;

    });
    listView.on(listViewModule.ListView.itemTapEvent, (args) => {
        // getting the index of the selected item
        const tappedItemIndex = args.index;
        // getting the view of the selected ListVies's item
        // let tappedItemView = args.view;
        dialogs.alert(`Second ListView item tap ${tappedItemIndex}`)
        .then(() => {
            console.log("Dialog closed!");
        });
    });
    // << create-list-view-code
    container.addChild(listView);
}
exports.onNavigatingTo = onNavigatingTo;
