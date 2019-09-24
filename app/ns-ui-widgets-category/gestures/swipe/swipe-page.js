const Observable = require("tns-core-modules/data/observable").Observable;
function onPageLoaded(args) {
    const page = args.object;
    const vm = new Observable();
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
// >> gest-swipe
function onSwipe(args) {
    console.log("Swipe!");
    console.log(`Object that triggered the event: ${args.object}`);
    console.log(`View that triggered the event: ${args.view}`);
    console.log(`Event name: ${args.eventName}`);
    console.log(`Swipe Direction: ${args.direction}`);
    // >> (hide)
    const grid = args.object;
    const page = grid.page;
    const vm = page.bindingContext;
    vm.set("direction", args.direction);
    // << (hide)
}
exports.onSwipe = onSwipe;
// << gest-swipe
