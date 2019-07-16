const Label = require("tns-core-modules/ui/label").Label;
const StackLayout = require("tns-core-modules/ui/layouts/stack-layout").StackLayout;
const Color = require("tns-core-modules/color/color").Color;
// >> bottom-navigation-properties-js
const TabStrip = require("tns-core-modules/ui/bottom-navigation").TabStrip;
const TabStripItem = require("tns-core-modules/ui/bottom-navigation").TabStripItem;
const TabContentItem = require("tns-core-modules/ui/bottom-navigation").TabContentItem;

exports.onBottomNavLoaded = (args) => {
    // BottomNavigation
    const bottomNav = args.object;
    /*
        Using the items property to assign array of TabContentItem components (with content)
        Note: The number of TabContentItem components should be equal to the number of TabStripItem components
    */
    const tabContentItemsArray = createTabsContentArray();
    bottomNav.items = tabContentItemsArray;

    /*
        Using the tabStrip property to createa a TabStrip with multiple TabStripItems (tabs)
        Note: The number of TabStripItem components should be equal to the number of TabContentItem components
    */
    const tabStrip = createTabStrip();
    bottomNav.tabStrip = tabStrip;

    /*
        Using the selectedIndex property
    */
    bottomNav.selectedIndex = 1;

    /*
        Using the nativeView property (correspnding to bottomNav.ios or bottomNav.android depending on the used platform)
    */
    console.log("bottomNav.nativeView: ", bottomNav.nativeView);
};
// << bottom-navigation-properties-js

function createTabStrip() {
    // TabStrip
    const tabStrip = new TabStrip();
    tabStrip.iosIconRenderingMode = "automatic"; // iOS only (automatic is the default value)

    // An array of TabStripItem
    const tabStripItems = [];
    for (let index = 0; index < 3; index++) {
        // Each item is of type TabStripItem
        const item = new TabStripItem();
        /*
            Using TabStripItem title property
        */
        item.title = `${index === 0 ? "Home" : (index === 1 ? "Account" : "Search")}`;
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
    for (let index = 0; index < 3; index++) {
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
    label.text = `${index === 0 ? "Home" : (index === 1 ? "Account" : "Search")}`;
    label.className = "h2 text-center";
    label.color = new Color("red");
    const stack = new StackLayout();
    stack.verticalAlignment = "middle";
    stack.addChild(label);

    return stack;
}
