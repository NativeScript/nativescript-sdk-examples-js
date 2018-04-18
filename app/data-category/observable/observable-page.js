const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "data-category/observable//basics/basics-page"),
    new link("Two-Way Binding", "data-category/observable/two-way/two-way-page"),
    new link("MVVM Pattern", "data-category/observable/mvvm-pattern/mvvm-pattern-page"),
    new link("Parents Binding", "data-category/observable/parent-binding/parent-binding-page"),
    new link("Plain Object Binding", "data-category/observable/plain-object-binding/plain-object-binding-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
