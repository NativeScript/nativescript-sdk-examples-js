import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Label } from "tns-core-modules/ui/label";
import { getFrameById } from "tns-core-modules/ui/frame";

export function onLoaded() {
    // >> frame-nav-dynamic-page-ts-code
    const frame = getFrameById("my-frame-id");

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
