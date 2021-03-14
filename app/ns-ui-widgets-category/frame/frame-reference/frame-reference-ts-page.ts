// >> frame-reference-topmost-ts
import { Frame } from "@nativescript/core";

const topmostFrame: Frame = Frame.topmost();
// << frame-reference-topmost-ts

// >> frame-reference-get-id-ts

const currentFrame: Frame = Frame.getFrameById("root-frame");
// << frame-reference-get-id-ts

// >> frame-reference-via-frame-prop-ts
import { Button, Page } from "@nativescript/core";

export function onTap(args) {
    const button: Button = args.object;
    const page: Page = button.page;
    const myFrame: Frame = page.frame;
    myFrame.navigate("secondary-page");
}
// << frame-reference-via-frame-prop-ts
