/*
// >> page-code-create-ts
import { Page } from "tns-core-modules/ui/page";
import { Label } from "tns-core-modules/ui/label";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";

export function createPage(): Page {
    const stack = new StackLayout();
    const label = new Label();
    label.text = "Hello, world!";
    stack.addChild(label);

    const page = new Page();
    // Each page can have a single root view set via the content property
    page.content = label;
    return page;
}
// << page-code-create-ts
*/

// >> page-creation-ts
// main-page.ts
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

export function onPageLoaded(args: EventData): void {
    console.log("Page Loaded");
    const page = args.object as Page;
}
// << page-creation-ts
