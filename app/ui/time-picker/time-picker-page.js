const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Configure Time Picker", "/ui/time-picker/configure-time-picker/configure-time-picker-page"),
    new link("Time Picker Binding", "/ui/time-picker/time-picker-binding/time-picker-binding-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
