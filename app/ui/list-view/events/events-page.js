const observableModule = require("tns-core-modules/data/observable");
const observableArrayModule = require("tns-core-modules/data/observable-array");
const dialogs = require("tns-core-modules/ui/dialogs");

const listArray = new observableArrayModule.ObservableArray([
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
const moreListItems = new observableArrayModule.ObservableArray([
    {
        title:"Goosebumps"
    },
    {
        title:"The Lord of the Rings"
    },
    {
        title:"The Ginger Man"
    },
    {
        title:"Harry Potter and the Goblet of Fire"
    },
    {
        title:"Harry Potter and the Order of the Phoenix"
    },
    {
        title:"Harry Potter and the Deathly Hallows"
    }
]);

let loadMore = true;
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();

    vm.set("listArray", listArray);

    page.bindingContext = vm;
}
// >> list-view-events
// The event will be raise when an item inside the ListView is tapped.
function onItemTap(args) {
    const index = args.index;
    dialogs.alert(`ListView item tap ${index}`)
       .then(() => {
           console.log("Dialog closed!");
       });
}

// The event will be raised when the ListView is scrolled so that the last item is visible. This even is intended to be used to add additional data in the ListView.
function onLoadMoreItems(args) {
    if (loadMore) {
        console.log("ListView -> LoadMoreItemsEvent");
        setTimeout(() => {
            listArray.push(moreListItems.getItem(Math.floor(Math.random() * moreListItems.length)));
            listArray.push(moreListItems.getItem(Math.floor(Math.random() * moreListItems.length)));
            listArray.push(moreListItems.getItem(Math.floor(Math.random() * moreListItems.length)));
            listArray.push(moreListItems.getItem(Math.floor(Math.random() * moreListItems.length)));
            listArray.push(moreListItems.getItem(Math.floor(Math.random() * moreListItems.length)));
        }, 3000);

        loadMore = false;
    }
}
// << list-view-events

exports.onNavigatingTo = onNavigatingTo;
exports.onItemTap = onItemTap;
exports.onLoadMoreItems = onLoadMoreItems;

