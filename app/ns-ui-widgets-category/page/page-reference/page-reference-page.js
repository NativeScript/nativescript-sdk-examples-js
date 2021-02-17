// >> page-reference-via-event
export function onPageLoaded(args) {
    console.log("Page Loaded!");
    const page = args.object;
    console.log("Page reference from loaded event: ", page);
}

export function onNavigatedTo(args) {
    console.log("Page onNavigatedTo!");
    const page = args.object;
    console.log("Page reference from navigatedTo event: ", page);
}

// << page-reference-via-event

// >> page-reference-via-page-prop
export function onStackLoaded(args) {
    console.log("Root StackLayout Loaded!");
    const stack = args.object;
    const page = stack.page;
    console.log("Page reference from page child element: ", page);
}


export function onButtonTapped(args) {
    console.log("Button Tapped!");
    const button = args.object;
    const page = button.page;
    console.log("Page reference from button tap event: ", page);
}
// << page-reference-via-page-prop

// >> page-reference-via-currrent-page-prop
import { Frame } from "@nativescript/core";

export function onNavigatingTo(args) {
    console.log("Page navigatingTo");
    const rootFrame = Frame.getFrameById("root-frame");
    const page = rootFrame.currentPage;
    console.log("Page reference from currentPage property of Frame: ", page);
}

// << page-reference-via-currrent-page-prop
