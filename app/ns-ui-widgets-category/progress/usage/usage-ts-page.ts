// >> progress-value-change-event-ts
import { Progress, PropertyChangeData } from "@nativescript/core";

export function onProgressLoaded(args) {
    const sliderComponent: Progress = <Progress>args.object;
    sliderComponent.on("valueChange", (pargs: PropertyChangeData) => {
        console.log(`New Value: ${pargs.value}`);
    });
}
// << progress-value-change-event-ts
