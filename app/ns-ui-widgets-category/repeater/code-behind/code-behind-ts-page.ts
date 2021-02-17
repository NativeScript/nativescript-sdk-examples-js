import { ObservableArray } from "@nativescript/core";
import { StackLayout } from "@nativescript/core";
import { Page } from "@nativescript/core";
// >> repeater-import
import { Repeater } from "@nativescript/core";
// << repeater-import
// >> creating-repeater-code-ts
export function onPageLoaded(args) {
    const page: Page = <Page>args.object;
    const stackLayoutContainer: StackLayout = <StackLayout>page.getViewById("stackLayoutId");
    const secondColorsArray = new ObservableArray(["red", "green", "blue"]);

    const repeater = new Repeater();
    const stackLayout = new StackLayout();
    stackLayout.orientation = "horizontal";
    repeater.itemsLayout = stackLayout;
    repeater.items = secondColorsArray;

    stackLayoutContainer.addChild(repeater);
}
// << creating-repeater-code-ts
