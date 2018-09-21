// >> action-bar-nav-btn-js
const fromObject = require("tns-core-modules/data/observable").fromObject;

exports.onNavigatingTo = function(args) {
    const page = args.object;
    page.bindingContext = fromObject({
        title: "ActionBar's Navigation Button demo"
    });
};

exports.onNavBtnTap = function(args) {
    // This code will be called only in Android.
    console.log("Navigation button tapped!");

    const navigationButton = args.object;
    const frame = navigationButton.page.frame;
    frame.goBack();
};
// << action-bar-nav-btn-js
