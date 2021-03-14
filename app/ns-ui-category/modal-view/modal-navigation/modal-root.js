export function onShowingModally(args) {
    // args is of type ShownModallyData
    console.log(`${args.eventName}`); // showingModally
}

export function onShownModally(args) {
    // args is of type ShownModallyData
    console.log(` ${args.context}`);
    console.log(` ${args.eventName}`); // shownModally
    console.log(` ${args.object}`);
}

