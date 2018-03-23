const observableModule = require("tns-core-modules/data/observable");
const observableArrayModule = require("tns-core-modules/data/observable-array");
const dialogs = require("tns-core-modules/ui/dialogs");
// >> repeater-create-code
const colors = ["red", "green", "blue"];
const secondArray = new observableArrayModule.ObservableArray([{title:"The Da Vinci Code"}, {title:"Harry Potter and the Chamber of Secrets"}, {title:"The Alchemist"}, {title:"The Godfather"}, {title:"Goodnight Moon"}, {title:"The Hobbit"}]);
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();

    vm.set("myItems", colors);
    vm.set("mySecondItems", secondArray);

    page.bindingContext = vm;
}
// << repeater-create-code
function onTap(args) {
    const page = args.object.page;
    const listView = page.getViewById("firstListView");
    // >> repeater-array
    colors.push("yellow");
    // Manually trigger the update so that the new color is shown.
    listView.refresh();
    // << repeater-array
}

function onSecondTap(args) {
    // >> repeater-observable-array
    secondArray.push({title:"Alice's Adventures in Wonderland"});
    // The Repeater will be updated automatically.
    // << repeater-observable-array
}

function listViewItemTap(args){
    const index = args.index;
    dialogs.alert(`ListView item tap ${index}`)
       .then(() => {
           console.log("Dialog closed!");
       });
}

function secondListViewItemTap(args){
     const index = args.index;
     dialogs.alert(`Second ListView item tap ${index}`)
        .then(() => {
            console.log("Dialog closed!");
        });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onTap = onTap;
exports.onSecondTap = onSecondTap;
exports.listViewItemTap = listViewItemTap;
exports.secondListViewItemTap = secondListViewItemTap;

