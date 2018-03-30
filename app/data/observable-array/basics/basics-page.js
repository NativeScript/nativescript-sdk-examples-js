// >> observable-array-require
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
// << observable-array-require

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
    myObservableArray.on(ObservableArray.changeEvent, (args) => {
        console.log(args.index); // Index of the changed item (in this case 7).
        console.log(args.action); // Action (In this case "update")
        console.log(args.addedCount); // Number of added items (In this case 1).
        console.log(args.removed); // Array of removed items (in this case 33).
    });
    myObservableArray.setItem(7, 34); // at seventh (7) index setting value of 34
    // << observable-array-set-item

    // >> observable-array-push
    myObservableArray.push(144);
    // << observable-array-push

    // >> observable-array-push-array
    myObservableArray.push([377, 233]);
    // << observable-array-push-array

    // >> observable-array-reverse
    myObservableArray.reverse();
    // << observable-array-reverse

    // >> observable-array-shift
    myObservableArray.shift();
    // << observable-array-shift

    const myArray = new ObservableArray(myObservableArray);
    // >> observable-array-sort
    myArray.sort();
    // << observable-array-sort

    // >> observable-array-index-of
    const index = myObservableArray.indexOf(13);
    console.log(index);
    // << observable-array-index-of

    page.bindingContext = { items: myObservableArray };
}
exports.onNavigatingTo = onNavigatingTo;
