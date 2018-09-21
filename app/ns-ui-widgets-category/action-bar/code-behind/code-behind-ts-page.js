"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var action_bar_1 = require("tns-core-modules/ui/action-bar");
function onLoaded(args) {
    var page = args.object;
    var newActionBar = new action_bar_1.ActionBar();
    newActionBar.title = "Code-Behind ActionBar";
    var newNavigaitonButton = new action_bar_1.NavigationButton();
    newNavigaitonButton.text = "Go Back";
    newActionBar.navigationButton = newNavigaitonButton;
    page.actionBar = newActionBar;
    page.actionBarHidden = false;
}
exports.onLoaded = onLoaded;
