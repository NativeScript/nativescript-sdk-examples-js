const Observable = require("tns-core-modules/data/observable").Observable;

const timerModule  = require("tns-core-modules/timer");

const counter  = 0;
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    vm.set("counter", counter);
    page.bindingContext = vm;
}

function  increase(args) {
    let button = args.object;
    const vm = button.page.bindingContext;
    button.backgroundColor = new Color("#3078FE");

    setTimeout(() => {
        counter++;
        button.backgroundColor = new Color("#30BCFF");
    }, 1000);
}

function decrease(args) {
    let button = args.object;
    const vm = button.page.bindingContext;
    button.backgroundColor = new Color("#3078FE");

    // >> settimeout-timer-code
    setTimeout(() => {
        counter--;
        button.backgroundColor = new Color("#30BCFF");
    }, 1000);
    // << settimeout-timer-code
}

exports.onNavigatingTo = onNavigatingTo;
exports.checkPlatformType = checkPlatformType;
exports.deviceInfo = deviceInfo;
