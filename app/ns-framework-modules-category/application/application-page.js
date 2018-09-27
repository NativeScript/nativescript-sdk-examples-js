const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const platformModule = require("tns-core-modules/platform");
const navigationLinks = [
    new link(
        "Check Platform",
        "ns-framework-modules-category/application/check-platform/check-platform-page"
    ),
    new link(
        "Application Events",
        "ns-framework-modules-category/application/application-events/application-events-page"
    )
];
const navigationLinksTsc = [
    new link(
        "Check Platform",
        "ns-framework-modules-category/application/check-platform/check-platform-ts-page"
    ),
    new link(
        "Application Events",
        "ns-framework-modules-category/application/application-events/application-events-ts-page"
    )
];
function onNavigatingTo(args) {
    const page = args.object;
    if (platformModule.isIOS && navigationLinks.filter((e) => e.title === "iOS Notification Observer").length < 1) {
        navigationLinks.push(
            new link(
                "iOS Notification Observer",
                "/application/ios-notification-observer/ios-notification-observer-page"
            )
        );
        navigationLinksTsc.push(
            new link(
                "iOS Notification Observer",
                "/application/ios-notification-observer/ios-notification-observer-ts-page"
            )
        );
    } else if (platformModule.isAndroid && navigationLinks.filter((e) => e.title === "Android Broadcast Receiver").length < 1) {
        navigationLinks.push(
            new link(
                "Android Broadcast Receiver",
                "ns-framework-modules-category/application/android-broadcast-receiver/android-broadcast-receiver-page"
            )
        );
        navigationLinksTsc.push(
            new link(
                "Android Broadcast Receiver",
                "ns-framework-modules-category/application/android-broadcast-receiver/android-broadcast-receiver-ts-page"
            )
        );
    }
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples: false,
        tsclinks: navigationLinksTsc
    });
}
exports.onNavigatingTo = onNavigatingTo;
