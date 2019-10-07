// >> progress-value-change-event
function onProgressLoaded(args) {
    const sliderComponent = args.object;
    sliderComponent.on("valueChange", (pargs) => {
        console.log(`New Value: ${pargs.value}`);
    });
}

exports.onProgressLoaded = onProgressLoaded;
// << progress-value-change-event
