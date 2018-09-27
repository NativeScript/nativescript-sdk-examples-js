// >> observable-array-require-ts
import { ObservableArray, ChangedData } from "tns-core-modules/data/observable-array";
// << observable-array-require-ts

export function onNavigatingTo(data) {
    const page = data.object;

    // >> observable-array-creation-ts
    // Create ObservableArray with lenght
    let myObservableArray = new ObservableArray(10);

    // Create ObservableArray from array.
    const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    myObservableArray = new ObservableArray(arr);
    // Create ObservableArray from arguments.
    myObservableArray = new ObservableArray(1, 2, 3, 5, 8, 13, 21, 33, 55, 89);
    // << observable-array-creation-ts

    // >> observable-array-item-index-ts
    const firstItem = myObservableArray.getItem(0);
    const secondItem = myObservableArray.getItem(1);
    const thirdItem = myObservableArray.getItem(2);
    // << observable-array-item-index-ts

    // >> observable-array-set-item-ts
    myObservableArray.on(ObservableArray.changeEvent, (args: any) => {
        console.log(args.index); // Index of the changed item (in this case 7).
        console.log(args.action); // Action (In this case "update")
        console.log(args.addedCount); // Number of added items (In this case 1).
        console.log(args.removed); // Array of removed items (in this case 33).
    });
    myObservableArray.setItem(7, 34); // at seventh (7) index setting value of 34
    // << observable-array-set-item-ts

    // >> observable-array-push-ts
    myObservableArray.push(144);
    // << observable-array-push-ts

    // >> observable-array-push-array-ts
    myObservableArray.push([377, 233]);
    // << observable-array-push-array-ts

    // >> observable-array-reverse-ts
    myObservableArray.reverse();
    // << observable-array-reverse-ts

    // >> observable-array-shift-ts
    myObservableArray.shift();
    // << observable-array-shift-ts

    const myArray = new ObservableArray(myObservableArray);
    // >> observable-array-sort-ts
    myArray.sort();
    // << observable-array-sort-ts

    // >> observable-array-index-of-ts
    const index = myObservableArray.indexOf(13);
    console.log(index);
    // << observable-array-index-of-ts

    page.bindingContext = { items: myObservableArray };
}
