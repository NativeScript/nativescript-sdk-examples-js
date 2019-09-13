const Observable = require("tns-core-modules/data/observable").Observable;
function onPageLoaded(args) {
    const page = args.object;
    const vm = new Observable();
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
// >> gest-rotation
function onRotation(args) {
    console.log(`Object that triggered the event: ${args.object}`);
        console.log(`View that triggered the event: ${args.view}`);
        console.log(`Event name: ${args.eventName}`);
        console.log(`Rotate angle: ${args.rotation} state: ${args.state}`);
        // >> (hide)
        const grid = args.object;
        const page = grid.page;
        const vm = page.bindingContext;
        vm.set("angle", args.rotation);
        vm.set("state", args.state);

        if (this.state === 3) {
            const layout = args.object;
            layout.rotate = 0;
            layout.animate({
                rotate: args.rotation,
                duration: 200
            });
        }
        // << (hide)
}
exports.onRotation = onRotation;
// << gest-rotation
