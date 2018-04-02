const Observable = require("tns-core-modules/data/observable").Observable;
const Color = require("tns-core-modules/color").Color;

let counter = 1;
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    vm.set("counter", counter);
    page.bindingContext = vm;
}

function increase(args) {
    const button = args.object;
    const vm = button.page.bindingContext;
    button.backgroundColor = new Color("#3078FE");

    setTimeout(() => {
        vm.set("counter", counter++);
        button.backgroundColor = new Color("#30BCFF");
    }, 1000);
}

function decrease(args) {
    const button = args.object;
    const vm = button.page.bindingContext;
    button.backgroundColor = new Color("#3078FE");

    // >> settimeout-timer-code
    setTimeout(() => {
        vm.set("counter", counter--);
        button.backgroundColor = new Color("#30BCFF");
    }, 1000);
    // << settimeout-timer-code
}

exports.onNavigatingTo = onNavigatingTo;
exports.increase = increase;
exports.decrease = decrease;
