// >> slider-value-change-event
function onSliderLoaded(argsloaded) {
    const sliderComponent = argsloaded.object;
    sliderComponent.on("valueChange", (args) => {
        const slider = args.object;
        console.log(`Slider new value ${slider.value}`);
    });
}

exports.onSliderLoaded = onSliderLoaded;
// << slider-value-change-event
