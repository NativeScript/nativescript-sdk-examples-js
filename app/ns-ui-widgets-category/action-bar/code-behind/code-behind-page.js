// >> actionbar-code-behind
const ActionBar = require("tns-core-modules/ui/action-bar").ActionBar;
const NavigationButton = require("tns-core-modules/ui/action-bar").NavigationButton;

function onLoaded(args) {
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
exports.onLoaded = onLoaded;
// << actionbar-code-behind
