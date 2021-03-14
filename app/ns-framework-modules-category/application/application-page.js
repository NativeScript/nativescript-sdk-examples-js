import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
import { isIOS, isAndroid } from "@nativescript/core";

const navigationLinks = [
    new Link(
        "Check Platform",
        "ns-framework-modules-category/application/check-platform/check-platform-page"
    ),
    new Link(
        "Application Events",
        "ns-framework-modules-category/application/application-events/application-events-page"
    )
];
const navigationLinksTsc = [
    new Link(
        "Check Platform",
        "ns-framework-modules-category/application/check-platform/check-platform-ts-page"
    ),
    new Link(
        "Application Events",
        "ns-framework-modules-category/application/application-events/application-events-ts-page"
    )
];
export function onNavigatingTo(args) {
    const page = args.object;
    if (isIOS && navigationLinks.filter((e) => e.title === "iOS Notification Observer").length < 1) {
        navigationLinks.push(
            new Link(
                "iOS Notification Observer",
                "ns-framework-modules-category/application/ios-notification-observer/ios-notification-observer-page"
            )
        );
        navigationLinksTsc.push(
            new Link(
                "iOS Notification Observer",
                "ns-framework-modules-category/application/ios-notification-observer/ios-notification-observer-ts-page"
            )
        );
    } else if (isAndroid && navigationLinks.filter((e) => e.title === "Android Broadcast Receiver").length < 1) {
        navigationLinks.push(
            new Link(
                "Android Broadcast Receiver",
                "ns-framework-modules-category/application/android-broadcast-receiver/android-broadcast-receiver-page"
            )
        );
        navigationLinksTsc.push(
            new Link(
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

