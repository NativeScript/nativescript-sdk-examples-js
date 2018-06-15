const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const platformModule = require("tns-core-modules/platform");
const navigationLinks = [
    new link("Check Platform", "ns-framework-modules-category/application/check-platform/check-platform-page"),
    new link("Application Events", "ns-framework-modules-category/application/application-events/application-events-page"),
    new link("Android Broadcast Receiver", "ns-framework-modules-category/application/android-broadcast-receiver/android-broadcast-receiver-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    if ((platformModule.isIOS) && (navigationLinks.filter((e) => e.title === "iOS Notification Observer").length < 1)) {
        navigationLinks.push(new link("iOS Notification Observer", "/application/ios-notification-observer/ios-notification-observer-page"));
    }
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
