const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-framework-modules-category/observable//basics/basics-page"),
    new link("Two-Way Binding", "ns-framework-modules-category/observable/two-way/two-way-page"),
    new link("MVVM Pattern", "ns-framework-modules-category/observable/mvvm-pattern/mvvm-pattern-page"),
    new link("Parents Binding", "ns-framework-modules-category/observable/parent-binding/parent-binding-page"),
    new link("Plain Object Binding", "ns-framework-modules-category/observable/plain-object-binding/plain-object-binding-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
