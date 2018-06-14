const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Configure Time Picker", "ns-ui-widgets-category/time-picker/basics/basics-page"),
    new link("Time Picker Binding", "ns-ui-widgets-category/time-picker/binding/binding-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
