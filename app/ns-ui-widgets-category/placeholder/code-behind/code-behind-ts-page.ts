import { Placeholder } from "@nativescript/core";
import { isIOS, isAndroid } from "@nativescript/core";
import { ad } from "@nativescript/core/utils";
import {StackLayout} from "@nativescript/core";
// >> code-behind-placeholder-code-ts
export function onLayoutLoaded (ltargs) {
    let layout: StackLayout = ltargs.object;
    let placeholder = new Placeholder();
    placeholder.on("creatingView", (args) => {
        let nativeView;
        if (isIOS) {
            nativeView = UITextView.new();
            nativeView.text = "Native View (iOS)";
        } else if (isAndroid) {
            nativeView = new android.widget.TextView(ad.getApplicationContext());
            nativeView.setText("Native View (Android)");
        }

        args.view = nativeView;
    });
    layout.addChild(placeholder);
}
// << code-behind-placeholder-code-ts
