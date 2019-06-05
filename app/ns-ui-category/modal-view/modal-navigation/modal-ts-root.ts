import { ShownModallyData } from "tns-core-modules/ui/page";

export function onShowingModally(args: ShownModallyData) {
    // args is of type ShownModallyData
    console.log(`${args.eventName}`); // showingModally
}

export function onShownModally(args: ShownModallyData) {
    // args is of type ShownModallyData
    console.log(` ${args.context}`);
    console.log(` ${args.eventName}`); // shownModally
    console.log(` ${args.object}`);
}

