var ListViewLinksModel = require("../../links-view-model");
var link = require("../../link");
var navigationLinks = [
    new link("Configure Time Picker", "/ui/time-picker/configure-time-picker/configure-time-picker-page"),
    new link("Time Picker Binding", "/ui/time-picker/time-picker-binding/time-picker-binding-page"),
];
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = new ListViewLinksModel({ links: navigationLinks, actionBarTitle: args.context.title });
}
exports.onNavigatingTo = onNavigatingTo;
