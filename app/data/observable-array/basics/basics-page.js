const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const ChangedData = require("tns-core-modules/data/observable-array").ChangedData;
const ChangeType = require("tns-core-modules/data/observable-array").ChangeType;

function onNavigatingTo(args) {
    const page = args.object;

    // >> observable-array-creation
    // Create ObservableArray with lenght
    let myObservableArray = new ObservableArray(10);

    // Create ObservableArray from array.
    const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    myObservableArray = new ObservableArray(arr);
    // Create ObservableArray from arguments.
    myObservableArray = new ObservableArray(1, 2, 3, 5, 8, 13, 21, 33, 55, 89);
    // << observable-array-creation

    // >> observable-array-item-index
    const firstItem = myObservableArray.getItem(0);
    const secondItem = myObservableArray.getItem(1);
    const thirdItem = myObservableArray.getItem(2);
    // << observable-array-item-index

    // >> observable-array-set-item
    myObservableArray.on("change", (args) => {
        console.log(args.index); // Index of the changed item.
        console.log(args.action); // Action. In this case Update.
        console.log(args.addedCount); // Number of added items. In this case 1.
        console.log(args.removed); // Array of removed items. In this case with single item (1).
    });
    myObservableArray.setItem(7, 34); // at seventh (7) index setting value of 34
    // << observable-array-set-item

    page.bindingContext = { items : myObservableArray };
}
exports.onNavigatingTo = onNavigatingTo;
