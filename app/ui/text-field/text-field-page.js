const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "/ui/text-field/basics-text-field/basics-text-field-page"),
    new link("TextField Binding", "/ui/text-field/text-field-binding/text-field-binding-page"),
    new link("TextField (Code-Behind)", "/ui/text-field/create-text-field/create-text-field-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
