import { Observable } from "@nativescript/core";
export function onPageLoaded(args) {
    const page = args.object;
    const vm = new Observable();
    page.bindingContext = vm;
}

// >> gest-rotation
export function onRotation(args) {
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
// << gest-rotation
