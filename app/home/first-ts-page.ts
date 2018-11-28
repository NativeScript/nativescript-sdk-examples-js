import { AnimationCurve } from "tns-core-modules/ui/enums";

// >> frame-navigate-base-ts
import { getFrameById } from "tns-core-modules/ui/frame";
// >> (hide)
export function navigate() {
    // << (hide)
    // Example using `getFrameById(frameId)` to get a `Frame` reference
    // As an alternative, we could use `topmost()` method or `page.frame` property
    const frame = getFrameById("my-frame-id");
    frame.navigate("home/second-page");
    // >> (hide)
}
// << (hide)
// << frame-navigate-base-ts

import { NavigationEntry } from "tns-core-modules/ui/frame";

export function navigateByModule() {
    // >> frame-navigate-module-ts
    const frame = getFrameById("my-frame-id");

    // import { NavigationEntry } from "tns-core-modules/ui/frame";
    const navigationEntry: NavigationEntry = {
        moduleName: "home/second-page",
        context: { info: "something you want to pass to your page" },
        animated: false
    };
    frame.navigate(navigationEntry);
    // << frame-navigate-module-ts
}

export function navigateWithBackstackVisible() {
    // >> frame-navigate-backstackvisible-ts
    const frame = getFrameById("my-frame-id");

    // import { NavigationEntry } from "tns-core-modules/ui/frame";
    const navigationEntry: NavigationEntry = {
        moduleName: "home/second-page",
        backstackVisible: false
    };
    frame.navigate(navigationEntry);
    // << frame-navigate-backstackvisible-ts
}

export function navigateWithClearHistory() {
    // >> frame-navigate-clearhistory-ts
    const frame = getFrameById("my-frame-id");

    // import { NavigationEntry } from "tns-core-modules/ui/frame";
    const navigationEntry: NavigationEntry = {
        moduleName: "home/second-page",
        clearHistory: true
    };
    frame.navigate(navigationEntry);
    // << frame-navigate-clearhistory-ts
}

export function navigateWithTransition() {
    // >> frame-navigate-transitions-ts
    const frame = getFrameById("my-frame-id");

    // import { NavigationEntry } from "tns-core-modules/ui/frame";
    // import { AnimationCurve } from "tns-core-modules/ui/enums";
    const navigationEntry: NavigationEntry = {
        moduleName: "home/second-page",
        animated: true,
        // Set up a transition property on page navigation.
        transition: {
            name: "slide",
            duration: 380,
            curve: AnimationCurve.easeIn
        }
    };
    frame.navigate(navigationEntry);
    // << frame-navigate-transitions-ts
}

