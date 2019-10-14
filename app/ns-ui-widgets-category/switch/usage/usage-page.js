// >> switch-checked-change-event
function onSwitchLoaded(argsloaded) {
    const mySwitch = argsloaded.object;
    mySwitch.on("checkedChange", (args) => {
        const sw = args.object;
        const isChecked = sw.checked;
        console.log(`Switch new value ${isChecked}`);
    });
}
exports.onSwitchLoaded = onSwitchLoaded;
// << switch-checked-change-event
