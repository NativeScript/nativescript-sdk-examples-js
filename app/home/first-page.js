// >> frame-navigate-base
const getFrameById = require("tns-core-modules/ui/frame").getFrameById;
// >> (hide)
exports.navigate = function() {
    // << (hide)
    // Example using `getFrameById(frameId)` to get a `Frame` reference
    // As an alternative, we could use `topmost()` method or `page.frame` property
    const frame = getFrameById("my-frame-id");
    frame.navigate("home/second-page");
    // >> (hide)
};
// << (hide)
// << frame-navigate-base

exports.navigateByModule = function() {
    // >> frame-navigate-module
    const frame = getFrameById("my-frame-id");

    const navigationEntry = {
        moduleName: "home/second-page",
        context: { info: "something you want to pass to your page" },
        animated: false
    };
    frame.navigate(navigationEntry);
    // << frame-navigate-module
};

exports.navigateWithBackstackVisible = function() {
    // >> frame-navigate-backstackvisible
    const frame = getFrameById("my-frame-id");

    const navigationEntry = {
        moduleName: "home/second-page",
        backstackVisible: false
    };
    frame.navigate(navigationEntry);
    // << frame-navigate-backstackvisible
};

exports.navigateWithClearHistory = function() {
    // >> frame-navigate-clearhistory
    const frame = getFrameById("my-frame-id");

    const navigationEntry = {
        moduleName: "home/second-page",
        clearHistory: true
    };
    frame.navigate(navigationEntry);
    // << frame-navigate-clearhistory
};

exports.navigateWithTransition = function() {
        // >> frame-navigate-transitions
        const frame = getFrameById("my-frame-id");

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
        // const getFrameById = require("tns-core-modules/ui/frame").getFrameById;
        // const myFrame = getFrameById("firstFrame");
        myFrame.transition = { name: "flip" };
        myFrame.navigate("main-page");
        // << frame-navigate-default-transition

        // >> frame-navigate-defailt-transition-app
        // const frameModule = require("tns-core-modules/ui/frame");
        frameModule.Frame.defaultTransition = { name: "fade" };
        // << frame-navigate-defailt-transition-app
};


exports.navigatePlatformSpecificTransitions = function() {
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
    const frame = getFrameById("my-frame");
    frame.navigate(navigationEntry);
    // << frame-navigate-platform-specific-transitions
};

// >> frame-navigate-custom-transitions-android-ts
const transition = require("tns-core-modules/ui/transition");
const floatType = java.lang.Float.class.getField("TYPE").get(null);
const CustomTransition = (function (_super) {
    __extends(CustomTransition, _super);
    function CustomTransition() {
        _super.apply(this, arguments);
    }
    CustomTransition.prototype.createAndroidAnimator = function(transitionType) {
        const scaleValues = java.lang.reflect.Array.newInstance(floatType, 2);
        switch (transitionType) {
            case transition.AndroidTransitionType.enter:
            case transition.AndroidTransitionType.popEnter:
                scaleValues[0] = 0;
                scaleValues[1] = 1;
                break;
            case transition.AndroidTransitionType.exit:
            case transition.AndroidTransitionType.popExit:
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
})(transition.Transition);
exports.CustomTransition = CustomTransition;
// << frame-navigate-custom-transitions-android-ts

// >> frame-navigate-custom-transitions-ios-ts
// const transition = require("tns-core-modules/ui/transition");
const CustomTransitionIOS = (function (_super) {
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
})(transition.Transition);
exports.CustomTransitionIOS = CustomTransitionIOS;
// << frame-navigate-custom-transitions-ios-ts


exports.goBack = function() {
    // >> frame-navigate-go-back
    // const getFrameById = require("tns-core-modules/ui/frame").getFrameById;
    const myFrame = getFrameById("my-frame");
    myFrame.goBack();
    // << frame-navigate-go-back
};
