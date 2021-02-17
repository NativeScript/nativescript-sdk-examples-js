import { Page } from "@nativescript/core";
import { StackLayout } from "@nativescript/core";
import { Label } from "@nativescript/core";
import { Frame } from "@nativescript/core";

export function onLoaded() {
    // >> frame-nav-dynamic-page-ts-code
    const frame = Frame.getFrameById("my-frame-id");

    frame.navigate({
        create: () => {
            const stack = new StackLayout();
            const label = new Label();
            label.text = "Hello, world!";
            stack.addChild(label);

            const page = new Page();
            page.content = stack;

            return page;
        }
    });
    // << frame-nav-dynamic-page-ts-code
}
