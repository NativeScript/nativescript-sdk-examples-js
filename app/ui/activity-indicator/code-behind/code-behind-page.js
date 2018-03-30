// >> activity-indicator-require
const ActivityIndicator = require("tns-core-modules/ui/activity-indicator").ActivityIndicator;
// << activity-indicator-require
const Image = require("tns-core-modules/ui/image").Image;

function onNavigatingTo(args) {
    const page = args.object;
    const myStsck = page.getViewById("myStack");

    // >> activity-indicator-code-behind
    const image = new Image();
    image.isLoading = true; // mock image downloading in progress

    const indicator = new ActivityIndicator();
    // Bind the busy property of the indicator to the isLoading property of the image
    indicator.bind({
        sourceProperty: "isLoading",
        targetProperty: "busy"
    }, image);

    myStsck.addChild(indicator);
    // << activity-indicator-code-behind
}
exports.onNavigatingTo = onNavigatingTo;
