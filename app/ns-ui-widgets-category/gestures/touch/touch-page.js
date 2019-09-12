const Observable = require("tns-core-modules/data/observable").Observable;
function onPageLoaded(args) {
    const page = args.object;
    const vm = new Observable();
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
// >> gest-touch
function onTouch(args) {
    console.log("Object that triggered the event: " + args.object);
    console.log("View that triggered the event: " + args.view);
    console.log("Event name: " + args.eventName);
    console.log("Touch action (up, down, cancel or move)" + args.action);
    console.log("Touch point: [" + args.getX() + ", " + args.getY() + "]");
    console.log("activePointers: " + args.getActivePointers().length);
    // >> (hide)
    let grid = args.object;
    const page = grid.page;
    const vm = page.bindingContext;
    vm.set("coordX", args.getX());
    vm.set("coordY", args.getY());
    // << (hide)
}
exports.onTouch = onTouch;
// << gest-touch
