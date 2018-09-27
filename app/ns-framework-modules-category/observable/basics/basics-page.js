// >> observable-basics-imports
const Observable = require("tns-core-modules/data/observable").Observable;
const fromObject = require("tns-core-modules/data/observable").fromObject;
const fromObjectRecursive = require("tns-core-modules/data/observable").fromObjectRecursive;
// << observable-basics-imports

function onNavigatedTo(args) {
    console.log("onLoaded BASICS");
    // >> observable-class
    // creating an Observable and setting title propertu with a string value
    const page = args.object;
    const viewModel = new Observable();

    // String binding using set with key-value
    viewModel.set("clientName", "Jonh Doe");

    // Number binding using set with key-value
    viewModel.set("mySize", 26);

    // Boolean binding using set with key-value
    viewModel.set("isVisible", true);

    // Binding event callback using set with key-value
    viewModel.set("onLabelTap", (args) => {
        // args is of type EventData
        console.log("Tapped on", args.object); // <Label>
        console.log("Name: ", args.object.text); // The text value
    });

    // using get to obtain the value of specific key
    console.log(viewModel.get("clientName")); // Jonh Doe
    console.log(viewModel.get("mySize")); // 42
    console.log(viewModel.get("isVisible")); // true

    // bind the view-model to the view's bindingContext property (e.g. the curent page or  view from navigatingTo or loaded event)
    page.bindingContext = viewModel;
    // << observable-class

    // >> observable-from-object
    // fromObject creates an Observable instance and sets its properties according to the supplied JS object
    const newViewModel = fromObject({ "myColor": "Lightgray" });
    // the above is equal to
    /*
        let newViewModel = new Observable();
        newViewModel.set("myColor", "Lightgray");
    */
    // << observable-from-object

    // >> observable-from-object-recursive
    // fromObjectRecursive will create new Observable for each nested object (expect arrays and functions)
    const nestedViewModel = fromObjectRecursive({
        client: "John Doe",
        favoriteColor: { hisColor: "Green" } // hisColor is an Observable (using recursive creation of Observables)
    });
    // the above is equal to
    /*
        let newViewModel2 = new Observable();
        newViewModel2.set("client", "John Doe");
        newViewModel2.set("favoriteColor", fromObject( {hisColor: "Green" }));
    */
    // << observable-from-object-recursive

    // >> property-change-event
    const myListener = viewModel.addEventListener(Observable.propertyChangeEvent, (args) => {
        // args is of type PropertyChangeData
        console.log("propertyChangeEvent [eventName]: ", args.eventName);
        console.log("propertyChangeEvent [propertyName]: ", args.propertyName);
        console.log("propertyChangeEvent [value]: ", args.value);
        console.log("propertyChangeEvent [oldValue]: ", args.oldValue);
    });
    // << property-change-event
}
exports.onNavigatedTo = onNavigatedTo;

// dummy funciton for snippet demonstrationg
function removeListener() {
    // >> property-change-event-remove-listener
    viewModel.removeEventListener(Observable.propertyChangeEvent, myListener);
    // << property-change-event-remove-listener
}
