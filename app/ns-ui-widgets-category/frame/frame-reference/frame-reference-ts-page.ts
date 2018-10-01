// >> frame-reference-topmost-ts
import { Frame, topmost } from "tns-core-modules/ui/frame";

const topmostFrame: Frame = topmost();
// << frame-reference-topmost-ts

// >> frame-reference-get-id-ts
import { getFrameById } from "tns-core-modules/ui/frame";

const currentFrame: Frame = getFrameById("root-frame");
// << frame-reference-get-id-ts

// >> frame-reference-via-frame-prop-ts
import { Button } from "tns-core-modules/ui/button";
import { Page } from "tns-core-modules/ui/page";

export function onTap(args) {
    const button: Button = args.object;
    const page: Page = button.page;
    const myFrame: Frame = page.frame;
    myFrame.navigate("secondary-page");
}
// << frame-reference-via-frame-prop-ts
