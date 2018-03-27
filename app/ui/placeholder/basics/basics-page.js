// >> placeholder-require
const placeholderModule = require("tns-core-modules/ui/placeholder");
// << placeholder-require
const platformModule = require("tns-core-modules/platform");
const utils = require("tns-core-modules/utils/utils");
// >> placeholder-code
function creatingView(args) {
    let nativeView;
    if (platformModule.isIOS) {
        nativeView = UITextView.new();
        nativeView.text = "Native View (iOS)";
    } else if (platformModule.isAndroid) {
        nativeView = new android.widget.TextView(utils.ad.getApplicationContext());
        nativeView.setText("Native View (Android)");
    }

    args.view = nativeView;
}
exports.creatingView = creatingView;
// << placeholder-code
