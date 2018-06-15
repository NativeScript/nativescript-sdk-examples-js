// >> virtual-array-require
const VirtualArray = require("tns-core-modules/data/virtual-array").VirtualArray;
// << virtual-array-require

function onNavigatingTo(args) {
    const page = args.object;

    // >> virtual-array-creation
    const virtualArray = new VirtualArray(100);
    virtualArray.loadSize = 15;

    virtualArray.on(VirtualArray.itemsLoadingEvent, (args) => {

        // Argument (args) is ItemsLoading Interface.
        // args.index is start index of the page where the requested index is located.
        // args.count number of requested items.

        const itemsToLoad = [];
        for (let i = 0; i < args.count; i++) {
            itemsToLoad.push(i + args.index);
        }

        virtualArray.load(args.index, itemsToLoad);
    });
    // << virtual-array-creation

    // >> virtual-array-change
    virtualArray.on(VirtualArray.changeEvent, (args) => {
        // Argument (args) is ChangedData<T> Interface.
        console.log(args.eventName); // args.eventName is "change".
        console.log(args.action); // args.action is "update".
        console.log(args.removed.length); // args.removed.length and result.addedCount are equal to number of loaded items with load() method.
    });
    // << virtual-array-change

    page.bindingContext = { items: virtualArray };
}
exports.onNavigatingTo = onNavigatingTo;
