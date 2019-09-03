const frameModule = require("tns-core-modules/ui/frame");

function goBack() {
    frameModule.topmost().goBack();
}
exports.goBack = goBack;
