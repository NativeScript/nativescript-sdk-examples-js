import { GestureEventData } from "@nativescript/core";
// >> import-button-widget-ts
import { Button } from "@nativescript/core";
// << import-button-widget-ts
export function onNavigatingTo(args) {
    const page = args.object;
    const container = page.getViewById("container");

    // >> button-code-create-ts
    const myButton = new Button();
    myButton.text = "Tap me!";
    myButton.className = "btn btn-primary btn-active";
    myButton.on(Button.tapEvent, (data: GestureEventData) => {
        // data is of type GestureEventData
        alert("Button Tapped!");
    });
    // << button-code-create-ts

    container.addChild(myButton);
}
