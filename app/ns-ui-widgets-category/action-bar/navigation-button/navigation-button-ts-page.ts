// >> action-bar-nav-btn-ts
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { NavigationButton } from "tns-core-modules/ui/action-bar";
import { Frame } from "tns-core-modules/ui/frame";
import { Page } from "tns-core-modules/ui/page";
import { GestureEventData } from "tns-core-modules/ui/gestures";

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = fromObject({
        title: "ActionBar's Navigation Button demo"
    });
}

export function onNavBtnTap(args: GestureEventData) {
    // This code will be called only in Android.
    console.log("Navigation button tapped!");

    const navigationButton = <NavigationButton>args.object;
    const frame = <Frame>navigationButton.page.frame;
    frame.goBack();
}
// << action-bar-nav-btn-ts
