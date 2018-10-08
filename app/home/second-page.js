const fromObject = require("tns-core-modules/data/observable").fromObject;

function onNavigatedTo(args) {
    const page = args.object;
    const context = page.navigationContext;

    page.bindingContext = fromObject(context);
}
exports.onNavigatedTo = onNavigatedTo;
