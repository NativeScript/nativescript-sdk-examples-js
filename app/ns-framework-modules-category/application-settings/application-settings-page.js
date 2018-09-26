const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-framework-modules-category/application-settings/basics/basics-page"),
    new link("Native Access", "ns-framework-modules-category/application-settings/native-access/native-access-page")
];
const navigationLinksTsc = [
    new link("Basics", "ns-framework-modules-category/application-settings/basics/basics-ts-page"),
    new link("Native Access", "ns-framework-modules-category/application-settings/native-access/native-access-ts-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples: false,
        tsclinks: navigationLinksTsc
    });
}
exports.onNavigatingTo = onNavigatingTo;
