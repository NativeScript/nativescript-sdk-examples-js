import { EventData } from "tns-core-modules/data/observable";
import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { Label } from "tns-core-modules/ui/label";
import * as application from "tns-core-modules/application";

export function onGridLoaded(args: EventData) {
    const grid = <GridLayout>args.object;
    const lbl = <Label>grid.getViewById("lbl");
    const iconLabel = <Label>grid.getViewById("iconLabel");
    iconLabel.className = "fa";
    iconLabel.textAlignment = "center";
    iconLabel.verticalAlignment = "middle";
    iconLabel.fontSize = 40;
    lbl.textAlignment = "center";
    lbl.verticalAlignment = "middle";
    lbl.fontSize = 24;
    // >> application-platform-ts
    if (application.android) {
        console.log("We are running on Android device!");
        // >> (hide)
        iconLabel.text = String.fromCharCode(0xff17b);
        lbl.text = "Android Applicaiton";
        // << (hide)
    } else if (application.ios) {
        console.log("We are running on iOS device");
        // >> (hide)
        iconLabel.text = String.fromCharCode(0xf179);
        lbl.text = "iOS Applicaiton";
        // << (hide)
    }
    // << application-platform-ts
}

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.actionBar.title = args.context.title;
}
