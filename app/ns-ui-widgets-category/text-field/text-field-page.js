const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-ui-widgets-category/text-field/basics/basics-page"),
    new link("Binding", "ns-ui-widgets-category/text-field/binding/binding-page"),
    new link("Code Behind", "ns-ui-widgets-category/text-field/code-behind/code-behind-page"),
    new link("Keyboard Type", "ns-ui-widgets-category/text-field/keyboard-type/keyboard-type-page")
];
const navigationLinksTsc = [
    new link("Basics", "ns-ui-widgets-category/text-field/basics/basics-ts-page"),
    new link("Binding", "ns-ui-widgets-category/text-field/binding/binding-ts-page"),
    new link("Code Behind", "ns-ui-widgets-category/text-field/code-behind/code-behind-ts-page")
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
