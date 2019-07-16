const fromObject = require("tns-core-modules/data/observable").fromObject;

exports.onNavigatingTo = (args) => {
    const page = args.object;
    const vm = fromObject({
        selectedIndex: 1
    });

    page.bindingContext = vm;
};

// >> bottom-navigation-events-js
exports.onBottomNavLoaded = (args) => {
    // Using the loaded event to ger a reference to the BottomNavigation
    const bottomNavigation = args.object;

    // Using selectedIndexChanged
    bottomNavigation.on("selectedIndexChanged", (args) => {
        // args is of type SelectedIndexChangedEventData
        const oldIndex = args.oldIndex;
        const newIndex = args.newIndex;
        console.log(`oldIndex: ${oldIndex}; newIndex: ${newIndex}`);

        args.object.page.bindingContext.set("selectedIndex", newIndex);
    });
};
// << bottom-navigation-events-js
