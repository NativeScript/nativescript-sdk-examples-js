// details-page.ts
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

// Event handler for Page "navigatedTo" event attached in details-page.xml e.g.
export function onNavigatedTo(args: EventData): void {
    const page: Page = <Page>args.object;
    const context: any = page.navigationContext;

    page.bindingContext = fromObject(context);
}
