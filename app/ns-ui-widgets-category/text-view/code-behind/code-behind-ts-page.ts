import { Observable } from "tns-core-modules/data/observable";
import {Page} from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Button } from "tns-core-modules/ui/button";
// >> text-view-import
import {TextView} from "tns-core-modules/ui/text-view";
// << text-view-import
// >> creating-text-view-code-ts
export function onNavigatingTo(args) {
    const page: Page = <Page> args.object;
    const vm = new Observable();
    // changing TextView editable property value on button tap
    vm.set("onTap", (btargs) => {
        const button: Button = <Button> btargs.object;
        const thirdTextview = (<TextView>button.page.getViewById("thirdTextViewId"));
        thirdTextview.editable = !thirdTextview.editable;
        if (thirdTextview.editable) {
            button.text = "Disable third TextView";
        } else {
            button.text = "Enable third TextView";
        }
    });
    page.bindingContext = vm;
}

export function onPageLoaded(args) {
    const page: Page = <Page> args.object;
    const vm = page.bindingContext;
    const stackLayout: StackLayout = <StackLayout> page.getViewById("stackLayoutId");
    // creating new TextView and changing the hint
    const firstTextview = new TextView();
    firstTextview.hint = "Enter text";
    // creating new TextView and binding the text property
    const secondTextview = new TextView();
    const options = {
        sourceProperty: "text",
        targetProperty: "secondTextProperty"
    };
    secondTextview.bind(options, vm);
    vm.set("secondTextProperty", "Sample TextView text");
    // creating new TextView and changing the text
    const thirdTextview = new TextView();
    thirdTextview.id = "thirdTextViewId";
    thirdTextview.text = "Third TextView";
    // adding the newly created TextViews in a StackLayout
    stackLayout.addChild(firstTextview);
    stackLayout.addChild(secondTextview);
    stackLayout.addChild(thirdTextview);
}
// << creating-text-view-code-ts
