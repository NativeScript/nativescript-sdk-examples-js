var ListViewLinksModel = require("../../links-view-model");
var link = require("../../link");
var navigationLinks = [
    new link("Create TextView", "/ui/text-view/create-text-view/create-text-view-page"),
    new link("Time Picker Binding", "/ui/time-picker/time-picker-binding/time-picker-binding-page"),
];
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = new ListViewLinksModel({ links: navigationLinks, actionBarTitle: args.context.title });
}
exports.onNavigatingTo = onNavigatingTo;
