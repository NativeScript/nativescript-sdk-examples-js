// >> frame-navigate-base
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
