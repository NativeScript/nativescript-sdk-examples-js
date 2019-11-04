// >> action-bar-basic-usage-sdk-js
const frameModule = require("tns-core-modules/ui/frame");

function goBack() {
    frameModule.topmost().goBack();
}
function openSettings() {
    // implement the custom logic
}
exports.goBack = goBack;
exports.openSettings = openSettings;
// << action-bar-basic-usage-sdk-js
