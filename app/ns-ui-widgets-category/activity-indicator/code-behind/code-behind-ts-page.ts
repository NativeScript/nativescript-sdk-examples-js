// >> activity-indicator-require-ts
import { ActivityIndicator } from "@nativescript/core";
// << activity-indicator-require-ts
import { EventData, Page, StackLayout } from "@nativescript/core";

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const myStack = <StackLayout>page.getViewById("myStack");

    // >> activity-indicator-code-behind-ts
    const myloadingObject = { isLoading: true };

    const indicator = new ActivityIndicator();
    // Bind the busy property of the indicator to the isLoading property of the image
    indicator.bind({
        sourceProperty: "isLoading",
        targetProperty: "busy"
    }, myloadingObject);

    console.log(indicator.busy); // busy is a writable property
    myStack.addChild(indicator);
    // << activity-indicator-code-behind-ts
}
