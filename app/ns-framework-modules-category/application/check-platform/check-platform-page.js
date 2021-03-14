import { Application } from "@nativescript/core";

export function onGridLoaded(args) {
    const grid = args.object;
    const lbl = grid.getViewById("lbl");
    const iconLabel = grid.getViewById("iconLabel");
    iconLabel.className = "far";
    iconLabel.textAlignment = "center";
    iconLabel.verticalAlignment = "middle";
    iconLabel.fontSize = 40;
    lbl.textAlignment = "center";
    lbl.verticalAlignment = "middle";
    lbl.fontSize = 24;
    // >> application-platform-js
    if (Application.android) {
        console.log("We are running on Android device!");
        // >> (hide)
        iconLabel.text = String.fromCharCode(0xff17b);
        lbl.text = "Android Applicaiton";
        // << (hide)
    } else if (Application.ios) {
        console.log("We are running on iOS device");
        // >> (hide)
        iconLabel.text = String.fromCharCode(0xf179);
        lbl.text = "iOS Applicaiton";
        // << (hide)
    }
    // << application-platform-js
}
export function onNavigatingTo(args) {
    const page = args.object;
    page.actionBar.title = args.context.title;
}

