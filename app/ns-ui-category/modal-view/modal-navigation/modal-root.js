exports.onShowingModally = (args) => {
    // args is of type ShownModallyData
    console.log(`${args.eventName}`); // showingModally
};

exports.onShownModally = (args) => {
    // args is of type ShownModallyData
    console.log(` ${args.closeCallback}`);
    console.log(` ${args.context}`);
    console.log(` ${args.eventName}`);  // shownModally
    console.log(` ${args.object}`);
};

