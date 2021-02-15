const placeholderModule = require("tns-core-modules/ui/placeholder");
const platformModule = require("@nativescript/core");
const utils = require("tns-core-modules/utils/utils");
// >> code-behind-placeholder-code
function onLayoutLoaded (ltargs) {
    const layout = ltargs.object;
    const placeholder = new placeholderModule.Placeholder();
    placeholder.on("creatingView", (args) => {
        let nativeView;
        if (platformModule.isIOS) {
            nativeView = UITextView.new();
            nativeView.text = "Native View (iOS)";
        } else if (platformModule.isAndroid) {
            nativeView = new android.widget.TextView(utils.ad.getApplicationContext());
            nativeView.setText("Native View (Android)");
        }

        args.view = nativeView;
    });
    layout.addChild(placeholder);
}
exports.onLayoutLoaded = onLayoutLoaded;
// << code-behind-placeholder-code
