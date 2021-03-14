// >> progress-value-change-event
export function onProgressLoaded(args) {
    const sliderComponent = args.object;
    sliderComponent.on("valueChange", (pargs) => {
        console.log(`New Value: ${pargs.value}`);
    });
}


// << progress-value-change-event
