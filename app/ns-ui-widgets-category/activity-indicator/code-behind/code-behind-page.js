// >> activity-indicator-require
const ActivityIndicator = require("tns-core-modules/ui/activity-indicator").ActivityIndicator;
// << activity-indicator-require

function onNavigatingTo(args) {
    const page = args.object;
    const myStack = page.getViewById("myStack");

    // >> activity-indicator-code-behind
    const myloadingObject = { isLoading: true };

    const indicator = new ActivityIndicator();
    // Bind the busy property of the indicator to the isLoading property of the image
    indicator.bind({
        sourceProperty: "isLoading",
        targetProperty: "busy"
    }, myloadingObject);

    console.log(indicator.busy); // busy is a writable property
    myStack.addChild(indicator);
    // << activity-indicator-code-behind
}
exports.onNavigatingTo = onNavigatingTo;
