"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_array_1 = require("tns-core-modules/data/observable-array");
function onNavigatingTo(data) {
    var page = data.object;
    var myObservableArray = new observable_array_1.ObservableArray(10);
    var arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    myObservableArray = new observable_array_1.ObservableArray(arr);
    myObservableArray = new observable_array_1.ObservableArray(1, 2, 3, 5, 8, 13, 21, 33, 55, 89);
    var firstItem = myObservableArray.getItem(0);
    var secondItem = myObservableArray.getItem(1);
    var thirdItem = myObservableArray.getItem(2);
    myObservableArray.on(observable_array_1.ObservableArray.changeEvent, function (args) {
        console.log(args.index);
        console.log(args.action);
        console.log(args.addedCount);
        console.log(args.removed);
    });
    myObservableArray.setItem(7, 34);
    myObservableArray.push(144);
    myObservableArray.push([377, 233]);
    myObservableArray.reverse();
    myObservableArray.shift();
    var myArray = new observable_array_1.ObservableArray(myObservableArray);
    myArray.sort();
    var index = myObservableArray.indexOf(13);
    console.log(index);
    page.bindingContext = { items: myObservableArray };
}
exports.onNavigatingTo = onNavigatingTo;
