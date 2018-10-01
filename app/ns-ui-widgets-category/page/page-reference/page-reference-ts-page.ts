// >> page-reference-via-event-ts
import { EventData } from "tns-core-modules/data/observable";
import { Page, NavigatedData } from "tns-core-modules/ui/page";

export function onPageLoaded(args: EventData) {
    console.log("Page loaded");
    const page = args.object as Page;
    console.log("Page reference from loaded event: ", page);
}

export function onNavigatedTo(args: NavigatedData) {
    console.log("Page navigatedTo");
    const page = args.object as Page;
    console.log("Page reference from navigatedTo event: ", page);
}
// << page-reference-via-event-ts

// >> page-reference-via-page-prop-ts
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Button } from "tns-core-modules/ui/button";

export function onStackLoaded(args: EventData) {
    console.log("Root StackLayout loaded");
    const stack = <StackLayout>args.object;
    const page = stack.page;
    console.log("Page reference from page child element: ", page);
}

export function onButtonTapped(args: EventData) {
    console.log("Button tap");
    const button = <Button>args.object;
    const page = button.page;
    console.log("Page reference from button tap event: ", page);
}
// << page-reference-via-page-prop-ts

// >> page-reference-via-currrent-page-prop-ts
import { getFrameById } from "tns-core-modules/ui/frame";

export function onNavigatingTo(args: EventData) {
    console.log("Page navigatingTo");
    const rootFrame = getFrameById("root-frame");
    const page = <Page>rootFrame.currentPage;
    console.log("Page reference from currentPage property of Frame: ", page);
}
// << page-reference-via-currrent-page-prop-ts
