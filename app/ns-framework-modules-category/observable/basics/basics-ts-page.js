"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatedTo(data) {
    console.log("onNavigatedTo BASICS");
    var viewModel = new observable_1.Observable();
    viewModel.set("clientName", "Jonh Doe");
    viewModel.set("mySize", 24);
    viewModel.set("isVisible", true);
    viewModel.set("onLabelTap", function (args) {
        console.log("Tapped on", args.object);
        console.log("Name: ", args.object.text);
    });
    console.log(viewModel.get("clientName"));
    console.log(viewModel.get("mySize"));
    console.log(viewModel.get("isVisible"));
    var view = data.object;
    view.bindingContext = viewModel;
    var newViewModel = observable_1.fromObject({ "myColor": "Lightgray" });
    var nestedViewModel = observable_1.fromObjectRecursive({
        client: "John Doe",
        favoriteColor: { hisColor: "Green" }
    });
    var myListener = viewModel.addEventListener(observable_1.Observable.propertyChangeEvent, function (args) {
        console.log("propertyChangeEvent [eventName]: ", args.eventName);
        console.log("propertyChangeEvent [propertyName]: ", args.propertyName);
        console.log("propertyChangeEvent [value]: ", args.value);
        console.log("propertyChangeEvent [oldValue]: ", args.oldValue);
    });
}
exports.onNavigatedTo = onNavigatedTo;
function removeListener() {
    var viewModel = new observable_1.Observable();
    var myListener = viewModel.addEventListener(observable_1.Observable.propertyChangeEvent, function (args) {
    });
    viewModel.removeEventListener(observable_1.Observable.propertyChangeEvent, myListener);
}
