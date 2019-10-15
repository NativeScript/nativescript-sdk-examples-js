// >> switch-checked-change-event-ts
import { Switch } from "tns-core-modules/ui/switch";
export function onSwitchLoaded(argsloaded) {
    const mySwitch: Switch = <Switch> argsloaded.object;
    mySwitch.on("checkedChange", (args) => {
        let sw: Switch = <Switch> args.object;
        let isChecked = sw.checked;
        console.log(`Switch new value ${isChecked}`);
    });
}
// << switch-checked-change-event-ts
