import { isAndroid, isIOS } from "tns-core-modules/platform";
// >> placeholder-code-android-ts
export function creatingView(args) {
    if (isAndroid) {
        const nativeView = new android.widget.TextView(args.context);
        nativeView.setSingleLine(true);
        nativeView.setEllipsize(android.text.TextUtils.TruncateAt.END);
        nativeView.setText("Native View - Android");
        args.view = nativeView;

    } else if (isIOS) {
        const nativeView = UILabel.new();
        nativeView.text = "Native View - iOS";
        args.view = nativeView;
    }
}
 // << placeholder-code-android-ts
