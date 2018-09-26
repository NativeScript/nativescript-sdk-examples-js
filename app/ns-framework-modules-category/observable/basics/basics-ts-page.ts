import { NavigatedData, Page } from "tns-core-modules/ui/page";
// >> observable-basics-imports-ts
import { fromObject, fromObjectRecursive, Observable, PropertyChangeData } from "tns-core-modules/data/observable";
// << observable-basics-imports-ts

export function onNavigatedTo(data: NavigatedData) {
    console.log("onNavigatedTo BASICS");
    // >> observable-class-ts
    // creating an Observable and setting title propertu with a string value
    const viewModel = new Observable();

    // String binding using set with key-value
    viewModel.set("clientName", "Jonh Doe");

    // Number binding using set with key-value
    viewModel.set("mySize", 24);

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

    // bind the view-model to the view's bindingContext property (e.g. the curent view from loaded event)
    const view = <Page>data.object;
    view.bindingContext = viewModel;
    // << observable-class-ts

    // >> observable-from-object-ts
    // fromObject creates an Observable instance and sets its properties according to the supplied JS object
    const newViewModel = fromObject({ "myColor": "Lightgray" });
    // the above is equal to
    /*
        let newViewModel = new Observable();
        newViewModel.set("myColor", "Lightgray");
    */
    // << observable-from-object-ts

    // >> observable-from-object-recursive-ts
    // fromObjectRecursive will create new Observable for each nested object (expect arrays and functions)
    const nestedViewModel = fromObjectRecursive({
        client: "John Doe",
        favoriteColor: { hisColor: "Green" } // hisColor is an Observable (using recursive creation of Observables)
    });
    // the above is equal to
    /*
        const newViewModel2 = new Observable();
        newViewModel2.set("client", "John Doe");
        newViewModel2.set("favoriteColor", fromObject( {hisColor: "Green" }));
    */
    // << observable-from-object-recursive-ts

    // >> property-change-event-ts
    const myListener = viewModel.addEventListener(Observable.propertyChangeEvent, (args: PropertyChangeData) => {
        // args is of type PropertyChangeData
        console.log("propertyChangeEvent [eventName]: ", args.eventName);
        console.log("propertyChangeEvent [propertyName]: ", args.propertyName);
        console.log("propertyChangeEvent [value]: ", args.value);
        console.log("propertyChangeEvent [oldValue]: ", args.oldValue);
    });
    // << property-change-event-ts
}

// dummy funciton for snippet demonstrationg
function removeListener() {
    let viewModel = new Observable();
    const myListener = viewModel.addEventListener(Observable.propertyChangeEvent, (args: PropertyChangeData) => {
        // args is of type PropertyChangeData
    });
    // >> property-change-event-remove-listener-ts
    viewModel.removeEventListener(Observable.propertyChangeEvent, myListener);
    // << property-change-event-remove-listener-ts
}
