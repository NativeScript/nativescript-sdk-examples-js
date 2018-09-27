
// >> mvvm-code-behind-ts
import { HelloWorldModel } from "./main-view-ts-model";
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;

    // using the view model as binding context for the current page
    const mainViewModel = new HelloWorldModel();
    page.bindingContext = mainViewModel;
}
// << mvvm-code-behind-ts
