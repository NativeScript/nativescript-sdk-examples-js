const observableArrayModule = require("tns-core-modules/data/observable-array");
const stackLayoutModule = require("tns-core-modules/ui/layouts/stack-layout");
// >> repeater-require
const repeaterModule = require("tns-core-modules/ui/repeater");
// << repeater-require
// >> creating-repeater-code
function onPageLoaded(args) {
    const page = args.object;
    const stackLayoutContainer = page.getViewById("stackLayoutId");
    const secondColorsArray = new observableArrayModule.ObservableArray(["red", "green", "blue"]);

    const repeater = new repeaterModule.Repeater();
    const stackLayout = new stackLayoutModule.StackLayout();
    stackLayout.orientation = "horizontal";
    repeater.itemsLayout = stackLayout;
    repeater.items = secondColorsArray;

    stackLayoutContainer.addChild(repeater);
}

exports.onPageLoaded = onPageLoaded;
// << creating-repeater-code
