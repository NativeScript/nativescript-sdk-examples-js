import { Frame, Label, Page, StackLayout } from "@nativescript/core";

export function onLoaded() {
    // >> frame-nav-dynamic-page-code
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
    // << frame-nav-dynamic-page-code
}
