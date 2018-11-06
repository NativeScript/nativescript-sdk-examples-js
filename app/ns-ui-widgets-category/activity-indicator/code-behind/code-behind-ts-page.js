"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var activity_indicator_1 = require("tns-core-modules/ui/activity-indicator");
function onNavigatingTo(args) {
    var page = args.object;
    var myStack = page.getViewById("myStack");
    var myloadingObject = { isLoading: true };
    var indicator = new activity_indicator_1.ActivityIndicator();
    indicator.bind({
        sourceProperty: "isLoading",
        targetProperty: "busy"
    }, myloadingObject);
    console.log(indicator.busy);
    myStack.addChild(indicator);
}
exports.onNavigatingTo = onNavigatingTo;
