// >> nav-context-pass-ts
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page } from "tns-core-modules/ui/page";
import { Frame, NavigationEntry } from "tns-core-modules/ui/frame";

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
