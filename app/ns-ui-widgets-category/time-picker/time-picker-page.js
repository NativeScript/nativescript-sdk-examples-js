const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Getting Started", "ns-ui-widgets-category/time-picker/basics/basics-page"),
    new link("Time Picker Bindings", "ns-ui-widgets-category/time-picker/binding/binding-page"),
    new link("Time Format (12 vs 24 hours)", "ns-ui-widgets-category/time-picker/time-format/time-format-page")
];
const navigationLinksTsc = [
    new link("Getting Started", "ns-ui-widgets-category/time-picker/basics/basics-ts-page"),
    new link("Time Picker Bindings", "ns-ui-widgets-category/time-picker/binding/binding-ts-page"),
    new link("Time Format (12 vs 24 hours)", "ns-ui-widgets-category/time-picker/time-format/time-format-ts-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples:false,
        tsclinks: navigationLinksTsc
    });
}
exports.onNavigatingTo = onNavigatingTo;
