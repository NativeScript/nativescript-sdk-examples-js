// >> observable-basics-imports
const Observable = require("tns-core-modules/data/observable").Observable;
const fromObject = require("tns-core-modules/data/observable").fromObject;
const fromObjectRecursive = require("tns-core-modules/data/observable").fromObjectRecursive;
// << observable-basics-imports

function onNavigatingTo(args) {
    // >> observable-basics-set
    const page = args.object;

    // creating an Observable and setting title propertu with a string value
    const viewModel = new Observable();
    viewModel.set("myString", "Jonh Doe");
    viewModel.set("myNumber", 42);
    viewModel.set("myBoolean", true);

    // fromObject creates an Observable instance and sets its properties according to the supplied JS object
    viewModel.set("myObject", fromObject({ "myColor": "Lightgray" }));

    // fromObjectRecursive will create new Observable for each nested object (expect arrays and functions)
    viewModel.set("myNestedObject", fromObjectRecursive({
        client: "JohnDoe",
        favoriteColor: { hisColor: "Green" } // hisColor is an Observable
    }));

    // Binding function on event
    viewModel.set("onLabelTap", () => {
        console.log("Tapped");
    });

    // when the observable was created recursivly chaning the ensted object's property will trigger propertyChange
    viewModel.get("myNestedObject").favoriteColor.hisColor = "Lightblue"; // myNestedObject.favoriteColor.myColor is now "Lightblue"

    // bind the view-model to the view's bindingContext property (in this case the curent page)
    page.bindingContext = viewModel;
    // << observable-basics-set

    // >> property-change-event
    viewModel.addEventListener(Observable.propertyChangeEvent, (args) => {
        // args is of type PropertyChangeData
        console.log("propertyChangeEvent [eventName]: ", args.eventName);
        console.log("propertyChangeEvent [propertyName]: ", args.propertyName);
        console.log("propertyChangeEvent [value]: ", args.value);
        console.log("propertyChangeEvent [oldValue]: ", args.oldValue);
    });
    // << property-change-event

    viewModel.set("myNumber", 24); // will trigger propertyChangeEvent

    // >> observable-basics-get
    console.log(viewModel.get("muString")); // Jonh Doe
    console.log(viewModel.get("myNumber")); // 42
    console.log(viewModel.get("myBoolean")); // true
    console.log(viewModel.get("myObject").myColor); // Red
    console.log(viewModel.get("myNestedObject").favoriteColor); // { "hisColor": "Lightblue" }
    // << observable-basics-get
}
exports.onNavigatingTo = onNavigatingTo;
