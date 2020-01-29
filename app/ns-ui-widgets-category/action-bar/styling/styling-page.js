const frameModule = require("tns-core-modules/ui/frame");

function goBack() {
    frameModule.Frame.topmost().goBack();
}
exports.goBack = goBack;
