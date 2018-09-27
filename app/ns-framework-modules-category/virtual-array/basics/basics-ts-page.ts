// >> virtual-array-require-ts
import { VirtualArray, ChangedData } from "tns-core-modules/data/virtual-array";
// << virtual-array-require-ts

export function onNavigatingTo(data) {
    const page = data.object;

    // >> virtual-array-creation-ts
    const virtualArray = new VirtualArray(100);
    virtualArray.loadSize = 15;

    virtualArray.on(VirtualArray.itemsLoadingEvent, (args: any) => {

        // Argument (args) is ItemsLoading Interface.
        // args.index is start index of the page where the requested index is located.
        // args.count number of requested items.
        const itemsToLoad = [];
        for (let i = 0; i < args.count; i++) {
            itemsToLoad.push(i + args.index);
        }

        virtualArray.load(args.index, itemsToLoad);
    });
    // << virtual-array-creation-ts

    // >> virtual-array-change-ts
    virtualArray.on(VirtualArray.changeEvent, (args: any) => {
        // Argument (args) is ChangedData<T> Interface.
        console.log(args.eventName); // args.eventName is "change".
        console.log(args.action); // args.action is "update".
        // args.removed.length and result.addedCount are equal to number of loaded items with load() method.
        console.log(args.removed.length);
    });
    // << virtual-array-change-ts

    page.bindingContext = { items: virtualArray };
}
