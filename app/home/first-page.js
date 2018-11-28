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
};
