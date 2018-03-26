const observableModule = require("tns-core-modules/data/observable");
// >> scroll-view-event-code
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();

    vm.set("status", "not scrolling");

    page.bindingContext = vm;
}
function onScroll(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    vm.set("status", "scrolling");
    setTimeout(() => {
        vm.set("status", "not scrolling");
    }, 300);

    console.log(`scrollX:  ${args.scrollX}`);
    console.log(`scrollY: ${args.scrollY}`);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onScroll = onScroll;
// << scroll-view-event-code
