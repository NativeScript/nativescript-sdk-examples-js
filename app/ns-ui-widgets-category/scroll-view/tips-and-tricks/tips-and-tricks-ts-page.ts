// >> scroll-view-event-code-ts
import { Page } from "@nativescript/core";
import { ScrollEventData, ScrollView } from "@nativescript/core";

export function onScroll(args: ScrollEventData) {
    const scrollView = args.object as ScrollView;

    console.log("scrollX: " + args.scrollX);
    console.log("scrollY: " + args.scrollY);
}
// << scroll-view-event-code-ts
