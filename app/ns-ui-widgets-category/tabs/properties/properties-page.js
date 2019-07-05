const Label = require("tns-core-modules/ui/label").Label;
const StackLayout = require("tns-core-modules/ui/layouts/stack-layout").StackLayout;
const Color = require("tns-core-modules/color/color").Color;
// >> tabs-properties-js
const TabStrip = require("tns-core-modules/ui/tabs").TabStrip;
const TabStripItem = require("tns-core-modules/ui/tabs").TabStripItem;
const TabContentItem = require("tns-core-modules/ui/tabs").TabContentItem;

exports.onTabsLoaded = (args) => {
    // Tabs
    const tabs = args.object;
    /*
        Using the items property to assign array of TabContentItem components (with content)
        Note: The number of TabContentItem components should be equal to the number of TabStripItem components
    */
    const tabContentItemsArray = createTabsContentArray();
    tabs.items = tabContentItemsArray;

    /*
        Using the tabStrip property to createa a TabStrip with multiple TabStripItems (tabs)
        Note: The number of TabStripItem components should be equal to the number of TabContentItem components
    */
    const tabStrip = createTabStrip();
    tabs.tabStrip = tabStrip;

    /*
        Using the Tabs properties
    */
    tabs.selectedIndex = 1;
    tabs.swipeEnabled = true;

    /*
        offscreenTabLimit:  Sets the number of TabContentItem to be preloaded.
    */
    tabs.offscreenTabLimit = 1;
    tabs.tabsPosition = "top"; //  Suppported values: 'top' or 'bottom'

    /*
        Using the nativeView property (correspnding to tabs.ios or tabs.android depending on the used platform)
    */
    console.log("tabs.nativeView: ", tabs.nativeView);
};
// << tabs-properties-js

function createTabStrip() {
    // TabStrip
    const tabStrip = new TabStrip();
    tabStrip.iosIconRenderingMode = "automatic"; // iOS only (automatic is the default value)

    // An array of TabStripItem
    const tabStripItems = [];
    for (let index = 0; index < 5; index++) {
        // Each item is of type TabStripItem
        const item = new TabStripItem();
        /*
            Using TabStripItem title property
        */
        item.title = `Tab ${index + 1}`;
        /*
            Using TabStripItem title property
        */
        item.iconSource = index === 0 ? "res://baseline_home_black_24pt" : (index === 1 ? "res://baseline_account_balance_black_24pt" : "res://baseline_search_black_24pt");
        tabStripItems.push(item);
    }
    tabStrip.items = tabStripItems;

    return tabStrip;
}

function createTabsContentArray() {
    // array of TabContentItem
    const arr = [];
    for (let index = 0; index < 5; index++) {
        // item is of type TabContentItem
        const item = new TabContentItem();
        // The createContent is a custom method that returns a StackLayout with a Label as a chils
        item.view = createContent(index);
        arr.push(item);
    }

    return arr;
}

function createContent(index) {
    const label = new Label();
    label.text = `Content ${index + 1}`;
    label.className = "h2 text-center";
    label.color = new Color("red");
    label.id = "label";
    const stack = new StackLayout();
    stack.verticalAlignment = "middle";
    stack.addChild(label);

    // Testing the offscreenTabLimit property
    stack.on("loaded", (args) => {
        console.log(`>>> Loaded [${(args.object).getViewById("label").text}]`);
    });

    stack.on("unloaded", (args) => {
        console.log(`>>> Unloaded [${(args.object).getViewById("label").text}]`);
    });

    return stack;
}
