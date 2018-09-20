const Observable = require("tns-core-modules/data/observable").Observable;

function onPageLoaded(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("secondSwitchState", "ON");
    // >> switch-checked-change-event
    // set up the initial values for the switch components
    const mySwitch = page.getViewById("my-switch");
    mySwitch.on("checkedChange", (args) => {
        console.log("checkedChange ", args.object.checked);
        // >> (hide)
        if (args.object.checked) {
            vm.set("secondSwitchState", "ON");
        } else {
            vm.set("secondSwitchState", "OFF");
        }
        // << (hide)
    });
    // << switch-checked-change-event
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
