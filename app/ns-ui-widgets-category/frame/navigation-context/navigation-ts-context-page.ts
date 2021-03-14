// >> nav-context-pass-ts
import { Button, EventData, Frame, NavigationEntry, Page } from "@nativescript/core";

export function onNavigate(args: EventData) {
    let button = <Button>args.object;
    let page = <Page>button.page;
    let frame = <Frame>page.frame;

    let navEntryWithContext: NavigationEntry = {
        moduleName: "home/second-ts-page",
        context: {
            name: "John",
            age: 25,
            isProgramer: true
        }
    };

    frame.navigate(navEntryWithContext);
}
// << nav-context-pass-ts

// >> nav-context-pass-binding-ts
const navEntryWithBindingContext: NavigationEntry = {
    moduleName: "home/second-ts-page",
    // when using bindingContext the landing page will automatically
    // receive and set this object as page.bindingContext with navigatedTo event
    bindingContext: {
        name: "John",
        age: 25,
        isProgramer: true
    }
};
// << nav-context-pass-binding-ts
