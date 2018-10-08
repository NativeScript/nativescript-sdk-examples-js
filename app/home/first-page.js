
const getFrameById = require("tns-core-modules/ui/frame").getFrameById;
// >> (hide)
exports.navigate = function() {
    // << (hide)
    // Example using `getFrameById(frameId)` to get a `Frame` reference
    // As an alternative, we could use `topmost()` method or `page.frame` property
    const frame = getFrameById("my-frame");
    frame.navigate("home/second-page");
    // >> (hide)
};
// << (hide)
// << frame-navigate-base

exports.navigateByModule = function() {
    // >> frame-navigate-module
    const frame = getFrameById("my-frame");

    const navigationEntry = {
        moduleName: "home/second-page",
        context: { info: "something you want to pass to your page" },
        animated: false
    };
    frame.navigate(navigationEntry);
    // << frame-navigate-module
};
