// >> frame-navigate-base
import { AndroidTransitionType } from "@nativescript/core/ui/transition";
import { Frame, Transition } from "@nativescript/core";

// >> (hide)
export function navigate() {
    // << (hide)
    // Example using `Frame.getFrameById(frameId)` to get a `Frame` reference
    // As an alternative, we could use `topmost()` method or `page.frame` property
    const frame = Frame.getFrameById("my-frame-id");
    frame.navigate("home/second-page");
    // >> (hide)
}
// << (hide)
// << frame-navigate-base

export function navigateByModule() {
    // >> frame-navigate-module
    const frame = Frame.getFrameById("my-frame-id");

    const navigationEntry = {
        moduleName: "home/second-page",
        context: { info: "something you want to pass to your page" },
        animated: false
    };
    frame.navigate(navigationEntry);
    // << frame-navigate-module
}

export function navigateWithBackstackVisible() {
    // >> frame-navigate-backstackvisible
    const frame = Frame.getFrameById("my-frame-id");

    const navigationEntry = {
        moduleName: "home/second-page",
        backstackVisible: false
    };
    frame.navigate(navigationEntry);
    // << frame-navigate-backstackvisible
}

export function navigateWithClearHistory() {
    // >> frame-navigate-clearhistory
    const frame = Frame.getFrameById("my-frame-id");

    const navigationEntry = {
        moduleName: "home/second-page",
        clearHistory: true
    };
    frame.navigate(navigationEntry);
    // << frame-navigate-clearhistory
}

export function navigateWithTransition() {
        // >> frame-navigate-transitions
        const frame = Frame.getFrameById("my-frame-id");

        const navigationEntry = {
            moduleName: "home/second-page",
            animated: true,
            // Set up a transition property on page navigation.
            transition: {
                name: "slide",
                duration: 380,
                curve: "easeIn"
            }
        };
        frame.navigate(navigationEntry);
        // << frame-navigate-transitions

        // >> frame-navigate-default-transition
        // import { Frame } from "@nativescript/core";
        // const myFrame = Frame.getFrameById("firstFrame");
        myFrame.transition = { name: "flip" };
        myFrame.navigate("main-page");
        // << frame-navigate-default-transition

        // >> frame-navigate-defailt-transition-app
        // import { Frame } from "@nativescript/core";
        Frame.defaultTransition = { name: "fade" };
        // << frame-navigate-defailt-transition-app
}


export function navigatePlatformSpecificTransitions() {
    // >> frame-navigate-platform-specific-transitions
    const navigationEntry = {
        moduleName: "main-page",
        animated: true,
        // Set up platform specific transitions.
        transitioniOS: {
            name: "curl",
            duration: 380,
            curve: "easeIn"
        },
        transitionAndroid: {
            name: "explode",
            duration: 300,
            curve: "easeOut"
        }
    };
    const frame = Frame.getFrameById("my-frame");
    frame.navigate(navigationEntry);
    // << frame-navigate-platform-specific-transitions
}

// >> frame-navigate-custom-transitions-android-ts
// import { Transition } from "@nativescript/core";
// import { AndroidTransitionType } from "@nativescript/core/ui/transition";
const floatType = java.lang.Float.class.getField("TYPE").get(null);

export const CustomTransition = (function (_super) {
    __extends(CustomTransition, _super);
    function CustomTransition() {
        _super.apply(this, arguments);
    }
    CustomTransition.prototype.createAndroidAnimator = function(transitionType) {
        const scaleValues = java.lang.reflect.Array.newInstance(floatType, 2);
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
        const objectAnimators = java.lang.reflect.Array.newInstance(android.animation.Animator.class, 2);
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
    };

    return CustomTransition;
})(Transition.Transition);
// << frame-navigate-custom-transitions-android-ts

// >> frame-navigate-custom-transitions-ios-ts
// import { Transition } from "@nativescript/core";
export const CustomTransitionIOS = (function (_super) {
    __extends(CustomTransition, _super);
    function CustomTransition() {
        _super.apply(this, arguments);
    }
    CustomTransition.prototype.animateIOSTransition = function(containerView, fromView, toView, operation, completion) {
        toView.transform = CGAffineTransformMakeScale(0, 0);
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
            fromView.transform = CGAffineTransformMakeScale(0, 0);
        }, completion);
    };

    return CustomTransitionIOS;
})(Transition.Transition);
// << frame-navigate-custom-transitions-ios-ts


export function goBack() {
    // >> frame-navigate-go-back
    // import { Frame } from "@nativescript/core";
    const myFrame = Frame.getFrameById("my-frame");
    myFrame.goBack();
    // << frame-navigate-go-back
}
