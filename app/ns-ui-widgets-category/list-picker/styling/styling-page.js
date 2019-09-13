// >> picker-styling-code-behind
const fromObject = require("tns-core-modules/data/observable").fromObject;

function onNavigatingTo(args) {

    const items = ["Batman", "Joker", "Bane"];

    const page = args.object;
    const vm = fromObject({
        items: items
    });
    page.bindingContext = vm;

}
exports.onNavigatingTo = onNavigatingTo;

// << picker-styling-code-behind
