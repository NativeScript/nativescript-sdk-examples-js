// >> nav-context-receive-ts
import { Page, NavigatedData } from "tns-core-modules/ui/page";

// Event handler for Page "navigatedTo" event attached in details-page.xml e.g.
export function onNavigatedTo(args: NavigatedData): void {
    const page: Page = <Page>args.object;
    const navigationContext = page.navigationContext;

    // The navigation event arguments are of type NavigatedData and provide another way to grab the passed context
    const context = args.context;

    page.bindingContext = navigationContext;
}
// << nav-context-receive-ts
