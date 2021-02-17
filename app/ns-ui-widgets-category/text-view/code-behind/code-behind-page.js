import { Observable } from "@nativescript/core";
// >> text-view-require
import { TextView } from "@nativescript/core";
// << text-view-require
// >> creating-text-view-code
export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    // changing TextView editable property value on button tap
    vm.set("onTap", (btargs) => {
        const button = btargs.object;
        const thirdTextview = btargs.object.page.getViewById("thirdTextViewId");
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
    const page = args.object;
    const vm = page.bindingContext;
    const stackLayout = page.getViewById("stackLayoutId");
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


// << creating-text-view-code
