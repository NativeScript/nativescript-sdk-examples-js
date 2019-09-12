const Observable = require("tns-core-modules/data/observable").Observable;
function onPageLoaded(args) {
    const page = args.object;
    const vm = new Observable();
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
let startScale = 1;
// >> gest-pinch
function onPinch(args) {
    console.log("Object that triggered the event: " + args.object);
    console.log("View that triggered the event: " + args.view);
    console.log("Event name: " + args.eventName);
    console.log("Pinch scale: " + args.scale + " state: " + args.state);
    // >> (hide)
    let scale = 0;
    let state = 0;
    let grid = args.object;
    const page = grid.page;
    const vm = page.bindingContext;
    vm.set("scale", args.scale);
    vm.set("state", args.state);
    if (args.scale && args.scale !== 1) {
        let newScale = startScale * args.scale;
        grid.scaleX = newScale;
        grid.scaleY = newScale;
    }
    // << (hide)
}
exports.onPinch = onPinch;
// << gest-pinch
