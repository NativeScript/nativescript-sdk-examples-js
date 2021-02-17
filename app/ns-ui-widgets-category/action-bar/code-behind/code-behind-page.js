// >> actionbar-code-behind
import { ActionBar, NavigationButton } from "@nativescript/core";

export function onLoaded(args) {
    const page = args.object;

    const newActionBar = new ActionBar();
    newActionBar.title = "Code-Behind ActionBar";
    const newNavigaitonButton = new NavigationButton();
    // for ios
    newNavigaitonButton.text = "Go Back";
    // for android
    newNavigaitonButton.android.systemIcon = "ic_menu_back";
    // or newNavigaitonButton.icon = "~\images\nav-image.png";
    newActionBar.navigationButton = newNavigaitonButton;

    page.actionBar = newActionBar;
    page.actionBarHidden = false;
}
// << actionbar-code-behind
