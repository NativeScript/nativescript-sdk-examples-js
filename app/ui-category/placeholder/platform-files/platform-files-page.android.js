// >> placeholder-code-android
function creatingView(args) {
    const nativeView = new android.widget.TextView(args.context);
    nativeView.setSingleLine(true);
    nativeView.setEllipsize(android.text.TextUtils.TruncateAt.END);
    nativeView.setText("Native View - Android");
    args.view = nativeView;
}
exports.creatingView = creatingView;
// << placeholder-code-android
