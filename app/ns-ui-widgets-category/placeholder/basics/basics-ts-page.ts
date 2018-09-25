// >> placeholder-import
import { Placeholder } from "tns-core-modules/ui/placeholder";
// << placeholder-import
import { isIOS, isAndroid } from "tns-core-modules/platform";
import { ad } from "tns-core-modules/utils/utils";
// >> placeholder-code-ts
export function creatingView(args) {
    let nativeView;
    if (isIOS) {
        nativeView = UITextView.new();
        nativeView.text = "Native View (iOS)";
    } else if (isAndroid) {
        nativeView = new android.widget.TextView(ad.getApplicationContext());
        nativeView.setText("Native View (Android)");
    }

    args.view = nativeView;
}
// << placeholder-code-ts
