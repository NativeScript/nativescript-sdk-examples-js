// >> plain-object-binding-code
const fromObject = require("tns-core-modules/data/observable").fromObject;

function onNavigatingTo(args) {
    const page = args.object;

    const list = [];
    for (let i = 0; i < 15; i++) {
        list.push(new Date());
    }

    const viewModel = fromObject({
        items: list
    });

    page.bindingContext = viewModel;
}
exports.onNavigatingTo = onNavigatingTo;
// << plain-object-binding-code
