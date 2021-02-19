// tslint:disable:max-line-length
import { Button, Page, StackLayout } from "@nativescript/core";

// >> style-code-behind-ts
export function onPageLoaded(args) {
    const page: Page = <Page>args.object;
    // >> (hide)
    const stacklayout: StackLayout = <StackLayout>page.getViewById("container");
    // << (hide)

    page.css = "Button { background-color: red; color: white; } .testClass { color: blue; } #myButton { color: yellow; } .testClass:pressed { color: green; }";

    // Using the globaly defined style e.g. Button { background-color: red; }
    const btn = new Button();
    btn.text = "Sample button";

    // Atttaching CSS class to a component
    const btnWithClass = new Button();
    btnWithClass.text = "Button with class";
    btnWithClass.className = "testClass";

    // Using component's ID to apply CSS styling
    const btnStyledViaID = new Button();
    btnStyledViaID.text = "Button with ID";
    btnStyledViaID.id = "myButton";
    // >> (hide)
    stacklayout.addChild(btn);
    stacklayout.addChild(btnWithClass);
    stacklayout.addChild(btnStyledViaID);
    // << (hide)
}
// << style-code-behind-ts
