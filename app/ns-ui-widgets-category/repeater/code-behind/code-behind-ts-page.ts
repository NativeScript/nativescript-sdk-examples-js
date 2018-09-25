import { ObservableArray } from "tns-core-modules/data/observable-array";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Page } from "tns-core-modules/ui/page";
// >> repeater-import
import { Repeater } from "tns-core-modules/ui/repeater";
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
