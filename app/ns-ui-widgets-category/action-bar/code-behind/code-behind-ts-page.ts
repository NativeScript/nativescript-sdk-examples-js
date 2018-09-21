// >> actionbar-code-behind-ts
import { EventData } from "tns-core-modules/data/observable";
import { ActionBar, NavigationButton } from "tns-core-modules/ui/action-bar";
import { Page } from "tns-core-modules/ui/page";

export function onLoaded(args: EventData) {
    const page = <Page>args.object;

    const newActionBar = new ActionBar();
    newActionBar.title = "Code-Behind ActionBar";
    const newNavigaitonButton = new NavigationButton();
    newNavigaitonButton.text = "Go Back";
    newActionBar.navigationButton = newNavigaitonButton;

    page.actionBar = newActionBar;
    page.actionBarHidden = false;
}
// << actionbar-code-behind-ts
