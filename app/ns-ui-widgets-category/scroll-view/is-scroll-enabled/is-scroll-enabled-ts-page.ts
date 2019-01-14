// >> scroll-view-is-enabled-ts
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";

export function onPageLoaded(args) {
    let page = <Page>args.object;

    page.bindingContext = fromObject({scrollEnabled: true});
}
export function onTap(args: EventData) {
    let page: Page  = (<Button>args.object).page;
    let viewModel = page.bindingContext;
    viewModel.scrollEnabled = !viewModel.scrollEnabled;

}
// << scroll-view-is-enabled-ts
