// >> progress-value-change-event-ts
import { PropertyChangeData } from "tns-core-modules/data/observable";
import { Progress } from "tns-core-modules/ui/progress";

export function onProgressLoaded(args) {
    const sliderComponent: Progress = <Progress>args.object;
    sliderComponent.on("valueChange", (pargs: PropertyChangeData) => {
        console.log(`New Value: ${pargs.value}`);
    });
}
// << progress-value-change-event-ts
