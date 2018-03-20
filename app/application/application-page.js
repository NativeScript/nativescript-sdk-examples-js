const ListViewLinksModel = require("../links-view-model");
const link = require("../link");
const navigationLinks = [
    new link("Check Platform", "/application/check-platform/check-platform-page"),
    new link("Application Events", "/application/application-events/application-events-page"),
    new link("Android Broadcast Receiver", "/application/android-broadcast-receiver/android-broadcast-receiver-page"),
    new link("iOS Notification Observer", "/application/ios-notification-observer/ios-notification-observer-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
