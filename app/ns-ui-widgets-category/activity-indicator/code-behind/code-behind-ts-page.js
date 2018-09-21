"use strict";
exports.__esModule = true;
// >> activity-indicator-require-ts
var activity_indicator_1 = require("tns-core-modules/ui/activity-indicator");
function onNavigatingTo(args) {
    var page = args.object;
    var myStack = page.getViewById("myStack");
    // >> activity-indicator-code-behind-ts
    var myloadingObject = { isLoading: true };
    var indicator = new activity_indicator_1.ActivityIndicator();
    // Bind the busy property of the indicator to the isLoading property of the image
    indicator.bind({
        sourceProperty: "isLoading",
        targetProperty: "busy"
    }, myloadingObject);
    console.log(indicator.busy); // busy is a writable property
    myStack.addChild(indicator);
    // << activity-indicator-code-behind-ts
}
exports.onNavigatingTo = onNavigatingTo;
