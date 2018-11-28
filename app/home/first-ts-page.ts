import { AnimationCurve } from "tns-core-modules/ui/enums";
import * as frameModule from "tns-core-modules/ui/frame";
import { isAndroid, isIOS } from "tns-core-modules/platform";

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


    // >> frame-navigate-default-transition-ts
    // const getFrameById = require("tns-core-modules/ui/frame").getFrameById;
    // const frame = getFrameById("firstFrame");
    frame.transition = { name: "flip" };
    frame.navigate("main-page");
    // << frame-navigate-default-transition-ts

    // >> frame-navigate-defailt-transition-app-ts
    // import * as frameModule from "tns-core-modules/ui/frame";
    frameModule.Frame.defaultTransition = { name: "fade" };
    // << frame-navigate-defailt-transition-app-ts
}

export function navigatePlatformSpecificTransitions() {
    // >> frame-navigate-platform-specific-transitions-ts
    const navigationEntry: NavigationEntry = {
        moduleName: "main-page",
        animated: true,
        // Set up platform specific transitions.
        transitioniOS: {
            name: "curl",
            duration: 380,
            curve: AnimationCurve.easeInOut
        },
        transitionAndroid: {
            name: "explode",
            duration: 300,
            curve: AnimationCurve.spring
        }
    };
    const frame = getFrameById("my-frame");
    frame.navigate(navigationEntry);
    // << frame-navigate-platform-specific-transitions-ts
}

// >> frame-navigate-custom-transitions-ios-ts
// import { Transition } from "tns-core-modules/ui/transition";
declare let UINavigationControllerOperation: any; // or use tns-platform-declarations

export class CustomTransitionIOS extends Transition {
    public animateIOSTransition(containerView: UIView,
                                fromView: UIView,
                                toView: UIView,
                                operation: UINavigationControllerOperation,
                                completion: (finished: boolean) => void): void {
        const originalToViewTransform = toView.transform;
        const originalFromViewTransform = fromView.transform;

        // http://stackoverflow.com/questions/216076/uiview-scale-to-0-using-cgaffinetransformmakescale
        const scaleTransform = CGAffineTransformMakeScale(0.0001, 0.0001);

        toView.transform = scaleTransform;
        fromView.transform = CGAffineTransformIdentity;

        switch (operation) {
            case UINavigationControllerOperation.UINavigationControllerOperationPush:
                containerView.insertSubviewAboveSubview(toView, fromView);
                break;
            case UINavigationControllerOperation.UINavigationControllerOperationPop:
                containerView.insertSubviewBelowSubview(toView, fromView);
                break;
            default:
                break;
        }

        const duration = this.getDuration();
        const curve = this.getCurve();
        UIView.animateWithDurationAnimationsCompletion(duration, () => {
            UIView.setAnimationCurve(curve);
            toView.transform = CGAffineTransformIdentity;
            fromView.transform = scaleTransform;
        }, (finished: boolean) => {
            toView.transform = originalToViewTransform;
            fromView.transform = originalFromViewTransform;
            completion(finished);
        });
    }
}
// << frame-navigate-custom-transitions-ios-ts

// >> frame-navigate-custom-transitions-android-ts
import { Transition, AndroidTransitionType } from "tns-core-modules/ui/transition";
export class CustomTransition extends Transition {
    public createAndroidAnimator(transitionType: string): android.animation.Animator {
        const scaleValues = (<any>Array).create("float", 2);
        switch (transitionType) {
            case AndroidTransitionType.enter:
            case AndroidTransitionType.popEnter:
                scaleValues[0] = 0;
                scaleValues[1] = 1;
                break;
            case AndroidTransitionType.exit:
            case AndroidTransitionType.popExit:
                scaleValues[0] = 1;
                scaleValues[1] = 0;
                break;
            default:
                break;
        }
        const objectAnimators = (<any>Array).create(android.animation.Animator, 2);
        objectAnimators[0] = android.animation.ObjectAnimator.ofFloat(null, "scaleX", scaleValues);
        objectAnimators[1] = android.animation.ObjectAnimator.ofFloat(null, "scaleY", scaleValues);

        const animatorSet = new android.animation.AnimatorSet();
        animatorSet.playTogether(objectAnimators);

        const duration = this.getDuration();
        if (duration !== undefined) {
            animatorSet.setDuration(duration);
        }

        animatorSet.setInterpolator(this.getCurve());
        return animatorSet;
    }
}
// << frame-navigate-custom-transitions-android-ts

export function goBack() {
    // >> frame-navigate-go-back-ts
    // import { getFrameById } from "tns-core-modules/ui/frame";
    const myFrame = getFrameById("my-frame");
    myFrame.goBack();
    // << frame-navigate-go-back-ts
}

