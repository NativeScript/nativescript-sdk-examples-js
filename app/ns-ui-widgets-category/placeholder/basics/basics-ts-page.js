"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("tns-core-modules/platform");
var utils_1 = require("tns-core-modules/utils/utils");
function creatingView(args) {
    var nativeView;
    if (platform_1.isIOS) {
        nativeView = UITextView.new();
        nativeView.text = "Native View (iOS)";
    }
    else if (platform_1.isAndroid) {
        nativeView = new android.widget.TextView(utils_1.ad.getApplicationContext());
        nativeView.setText("Native View (Android)");
    }
    args.view = nativeView;
}
exports.creatingView = creatingView;
