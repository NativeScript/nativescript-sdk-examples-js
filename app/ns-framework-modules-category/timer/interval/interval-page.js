const Observable = require("tns-core-modules/data/observable").Observable;
// >> require-timer
const timerModule = require("tns-core-modules/timer");
// << require-timer
const color = ["green", "yellow", "red"];
let id;
let status = true;

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    vm.set("buttonText", "Disable color change");
    vm.set("buttoncolor", "gray");
    // >> set-interval-example
    id = timerModule.setInterval(() => {
        const randNumber = Math.floor(Math.random() * (color.length));
        vm.set("buttoncolor", color[randNumber]);
    }, 1000);
    // << set-interval-example
    page.bindingContext = vm;
}

function onButtonTap(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    if (status) {
    // >> clear-interval-example
        timerModule.clearInterval(id);
    // << clear-interval-example
        vm.set("buttonText", "Enable color change");
    } else {
        id = timerModule.setInterval(() => {
            const randNumber = Math.floor(Math.random() * (color.length));
            vm.set("buttoncolor", color[randNumber]);
        }, 1000);

        vm.set("buttonText", "Disable color change");
    }
    status = !status;
}
exports.onNavigatingTo = onNavigatingTo;
exports.onButtonTap = onButtonTap;
