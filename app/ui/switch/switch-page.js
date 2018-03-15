var ListViewLinksModel = require("../../links-view-model");
var link = require("../../link");
var navigationLinks = [
    new link("Basics", "/ui/switch/basics-switch/basics-switch-page"),
    new link("TextField Binding", "/ui/text-field/text-field-binding/text-field-binding-page"),
    new link("TextField (Code-Behind)", "/ui/text-field/create-text-field/create-text-field-page"),
];
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = new ListViewLinksModel({ links: navigationLinks, actionBarTitle: args.context.title });
}
exports.onNavigatingTo = onNavigatingTo;
