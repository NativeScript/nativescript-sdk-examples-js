// >> page-creation-js
export function onPageLoaded(args) {
    console.log("Page Loaded");
    const page = args.object;
}

// << page-creation-js

/*
// >> page-code-create-js
import { Label, StackLayout, Page } from "@nativescript/core";

export function createPage() {
    // Creating of the page content
    const stack = new StackLayout();
    const label = new Label();
    label.text = "Hello, world!";
    stack.addChild(label);

    const page = new Page();
    // A page can have only one single root view set via the content property (in this case a StackLayout)
    page.content = stack;

    return page;
}
// << page-code-create-js
*/
