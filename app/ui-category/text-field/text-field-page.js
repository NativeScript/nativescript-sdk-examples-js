const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "/ui-category/text-field/basics/basics-page"),
    new link("Binding", "/ui-category/text-field/binding/binding-page"),
    new link("Code Behind", "/ui-category/text-field/code-behind/code-behind-page"),
    new link("Keyboard Type", "/ui-category/text-field/keyboard-type/keyboard-type-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
