
// >> frame-reference-topmost
import { Frame } from "@nativescript/core";

const topmostFrame = Frame.topmost();
// << frame-reference-topmost

// >> frame-reference-get-id

const currentFrame = Frame.getFrameById("root-frame");
// << frame-reference-get-id

// >> frame-reference-via-frame-prop
export function onTap(args) {
    const button = args.object;
    const page = button.page;
    const myFrame = page.frame;
    myFrame.navigate("secondary-page");
}
// << frame-reference-via-frame-prop
