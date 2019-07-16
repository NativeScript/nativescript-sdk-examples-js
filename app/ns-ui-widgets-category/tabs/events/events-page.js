const fromObject = require("tns-core-modules/data/observable").fromObject;

exports.onNavigatingTo = (args) => {
    const page = args.object;
    const vm = fromObject({
        selectedIndex: 1
    });

    page.bindingContext = vm;
};

// >> tabs-events-js
exports.onTabsLoaded = (args) => {
    // Using the loaded event to ger a reference to the Tabs
    const tabs = args.object;

    // Using selectedIndexChanged
    tabs.on("selectedIndexChanged", (args) => {
        // args is of type SelectedIndexChangedEventData
        const oldIndex = args.oldIndex;
        const newIndex = args.newIndex;
        console.log(`oldIndex: ${oldIndex}; newIndex: ${newIndex}`);

        args.object.page.bindingContext.set("selectedIndex", newIndex);
    });
};
// << tabs-events-js
