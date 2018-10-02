
// >> frame-reference-topmost
const topmost = require("tns-core-modules/ui/frame").topmost;

const topmostFrame = topmost();
// << frame-reference-topmost

// >> frame-reference-get-id
const getFrameById = require("tns-core-modules/ui/frame").getFrameById;

const currentFrame = getFrameById("root-frame");
// << frame-reference-get-id

// >> frame-reference-via-frame-prop
function onTap(args) {
    const button = args.object;
    const page = button.page;
    const myFrame = page.frame;
    myFrame.navigate("secondary-page");
}
exports.onTap = onTap;
// << frame-reference-via-frame-prop
