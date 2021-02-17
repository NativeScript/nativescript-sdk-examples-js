import { ObservableArray, Repeater, StackLayout } from "@nativescript/core";
// >> repeater-require
// << repeater-require
// >> creating-repeater-code
export function onPageLoaded(args) {
    const page = args.object;
    const stackLayoutContainer = page.getViewById("stackLayoutId");
    const secondColorsArray = new ObservableArray(["red", "green", "blue"]);

    const repeater = new Repeater();
    const stackLayout = new StackLayout();
    stackLayout.orientation = "horizontal";
    repeater.itemsLayout = stackLayout;
    repeater.items = secondColorsArray;

    stackLayoutContainer.addChild(repeater);
}


// << creating-repeater-code
