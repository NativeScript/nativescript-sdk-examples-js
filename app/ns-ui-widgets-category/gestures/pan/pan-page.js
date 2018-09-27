const Observable = require("tns-core-modules/data/observable").Observable;

// >> gest-pan
function onPan(args) {
    // args is of type PanGestureEventData
    console.log(`${args.eventName} event triggered for ${args.view}`);
    console.log(`deltaX: ${args.deltaX}`);
    console.log(`deltaY: ${args.deltaY}`);
    console.log(`state: ${args.state}`);

    // >> (hide)
    const page = args.object.page;
    const vm = page.bindingContext;
    vm.set("deltaX", args.deltaX);
    vm.set("deltaY", args.deltaY);
    // << (hide)
}
exports.onPan = onPan;
// << gest-pan

function onPageLoaded(args) {
    const page = args.object;
    const vm = new Observable();
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
