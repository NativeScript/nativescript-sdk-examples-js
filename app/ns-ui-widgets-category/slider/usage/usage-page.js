// >> slider-value-change-event
export function onSliderLoaded(argsloaded) {
    const sliderComponent = argsloaded.object;
    sliderComponent.on("valueChange", (args) => {
        const slider = args.object;
        console.log(`Slider new value ${slider.value}`);
    });
}

// << slider-value-change-event
