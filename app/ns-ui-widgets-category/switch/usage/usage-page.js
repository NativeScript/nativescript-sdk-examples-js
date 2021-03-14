// >> switch-checked-change-event
export function onSwitchLoaded(argsloaded) {
    const mySwitch = argsloaded.object;
    mySwitch.on("checkedChange", (args) => {
        const sw = args.object;
        const isChecked = sw.checked;
        console.log(`Switch new value ${isChecked}`);
    });
}
// << switch-checked-change-event
