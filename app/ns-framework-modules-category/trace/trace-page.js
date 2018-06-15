const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Custom Trace Writer", "ns-framework-modules-category/trace/custom-trace-writer/custom-trace-writer-page"),
    new link("Trace Specific Categories", "ns-framework-modules-category/trace/trace-specific-categories/trace-specific-categories-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
