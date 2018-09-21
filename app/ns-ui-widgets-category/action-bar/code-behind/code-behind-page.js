// >> actionbar-code-behind
const ActionBar = require("tns-core-modules/ui/action-bar").ActionBar;
const NavigationButton = require("tns-core-modules/ui/action-bar").NavigationButton;

function onLoaded(args) {
    const page = args.object;

    const newActionBar = new ActionBar();
    newActionBar.title = "Code-Behind ActionBar";
    const newNavigaitonButton = new NavigationButton();
    newNavigaitonButton.text = "Go Back";
    newActionBar.navigationButton = newNavigaitonButton;

    page.actionBar = newActionBar;
    page.actionBarHidden = false;
}
exports.onLoaded = onLoaded;
// << actionbar-code-behind
