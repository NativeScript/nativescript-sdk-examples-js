// >> scroll-view-event-code-ts
import { Page } from "tns-core-modules/ui/page";
import { ScrollEventData, ScrollView } from "tns-core-modules/ui/scroll-view";

export function onScroll(args: ScrollEventData) {
    const scrollView = args.object as ScrollView;

    console.log("scrollX: " + args.scrollX);
    console.log("scrollY: " + args.scrollY);
}
// << scroll-view-event-code-ts
