// >> frame-navigate-base-ts
import { getFrameById } from "tns-core-modules/ui/frame";
// >> (hide)
export function navigate() {
    // << (hide)
    // Example using `getFrameById(frameId)` to get a `Frame` reference
    // As an alternative, we could use `topmost()` method or `page.frame` property
    const frame = getFrameById("my-unique-frame");
    frame.navigate("home/second-page");
    // >> (hide)
}
// << (hide)
// << frame-navigate-base-ts

import { NavigationEntry } from "tns-core-modules/ui/frame";

export function navigateByModule() {
    // >> frame-navigate-module-ts
    const frame = getFrameById("my-unique-frame");

    // import { NavigationEntry } from "tns-core-modules/ui/frame";
    const navigationEntry: NavigationEntry = {
        moduleName: "home/second-page",
        context: { info: "something you want to pass to your page" },
        animated: false
    };
    frame.navigate(navigationEntry);
    // << frame-navigate-module-ts
}
