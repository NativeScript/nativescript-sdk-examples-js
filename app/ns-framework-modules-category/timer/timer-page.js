const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Interval", "ns-framework-modules-category/timer/interval/interval-page"),
    new link("Timeout", "ns-framework-modules-category/timer/timeout/timeout-page")
];
const navigationLinksTsc = [
    new link("Interval", "ns-framework-modules-category/timer/interval/interval-ts-page"),
    new link("Timeout", "ns-framework-modules-category/timer/timeout/timeout-ts-page")
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
