// >> placeholder-import
import { Placeholder } from "@nativescript/core";
// << placeholder-import
import { Utils, isIOS, isAndroid } from "@nativescript/core";
// >> placeholder-code-ts
export function creatingView(args) {
    let nativeView;
    if (isIOS) {
        nativeView = UITextView.new();
        nativeView.text = "Native View (iOS)";
    } else if (isAndroid) {
        nativeView = new android.widget.TextView(Utils.ad.getApplicationContext());
        nativeView.setText("Native View (Android)");
    }

    args.view = nativeView;
}
// << placeholder-code-ts
