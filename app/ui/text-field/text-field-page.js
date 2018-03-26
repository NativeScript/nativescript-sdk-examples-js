const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "/ui/text-field/basics/basics-page"),
    new link("Binding", "/ui/text-field/binding/binding-page"),
    new link("Code Behind", "/ui/text-field/code-behind/code-behind-page"),
    new link("Keyboard Type", "/ui/text-field/keyboard-type/keyboard-type-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
