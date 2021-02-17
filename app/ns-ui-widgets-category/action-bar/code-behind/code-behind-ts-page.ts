// >> actionbar-code-behind-ts
import { EventData } from "@nativescript/core";
import { ActionBar, NavigationButton } from "@nativescript/core";
import { Page } from "@nativescript/core";

export function onLoaded(args: EventData) {
    const page = <Page>args.object;

    const newActionBar = new ActionBar();
    newActionBar.title = "Code-Behind ActionBar";
    const newNavigationButton = new NavigationButton();
    newNavigationButton.text = "Go Back";
    newActionBar.navigationButton = newNavigationButton;

    page.actionBar = newActionBar;
    page.actionBarHidden = false;
}
// << actionbar-code-behind-ts
