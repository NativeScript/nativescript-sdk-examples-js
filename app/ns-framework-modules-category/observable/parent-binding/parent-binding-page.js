// >> parent-binding-code
const fromObject = require("data/observable").fromObject;

function onNavigatingTo(args) {
    const page = args.object;
    const viewModel = fromObject({
        items: [1, 2, 3],
        test: "Parent binding! (the value came from the `test` property )"
    });

    page.bindingContext = viewModel;
}
exports.onNavigatingTo = onNavigatingTo;
// << parent-binding-code
