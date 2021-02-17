import { Placeholder, Utils, isAndroid, isIOS } from "@nativescript/core";
// >> code-behind-placeholder-code
export function onLayoutLoaded (ltargs) {
    const layout = ltargs.object;
    const placeholder = new Placeholder();
    placeholder.on("creatingView", (args) => {
        let nativeView;
        if (isIOS) {
            nativeView = UITextView.new();
            nativeView.text = "Native View (iOS)";
        } else if (isAndroid) {
            nativeView = new android.widget.TextView(Utils.ad.getApplicationContext());
            nativeView.setText("Native View (Android)");
        }

        args.view = nativeView;
    });
    layout.addChild(placeholder);
}
// << code-behind-placeholder-code
