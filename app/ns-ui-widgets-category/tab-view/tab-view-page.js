import ListViewLinksModel from "../../links-view-model";
import { isAndroid } from "@nativescript/core";
import Link from "../../link";

const navigationLinks = [
    new Link("Basics", "ns-ui-widgets-category/tab-view/basics/basics-page"),
    new Link("Styling", "ns-ui-widgets-category/tab-view/styling/styling-page"),
    new Link("Title Icon Fonts", "ns-ui-widgets-category/tab-view/title-icon-fonts/title-icon-fonts-page"),
    new Link("Code Behind", "ns-ui-widgets-category/tab-view/code-behind/code-behind-page"),
    new Link("Navigation", "ns-ui-widgets-category/tab-view/navigation/navigation")
];
const navigationLinksTsc = [
    new Link("Code Behind", "ns-ui-widgets-category/tab-view/code-behind/code-behind-ts-page"),
    new Link("Navigation", "ns-ui-widgets-category/tab-view/navigation/navigation-ts-page")
];
export function onNavigatingTo(args) {
    const page = args.object;
    if ((isAndroid) && (navigationLinks.filter((e) => e.title === "Tabs Position Android").length < 1)) {
        navigationLinks.push(new Link("Tabs Position Android", "/ns-ui-widgets-category/tab-view/tabs-position-android/tabs-position-android-page"));
        navigationLinks.push(new Link("Offscreen Tab Limit Android", "/ns-ui-widgets-category/tab-view/offscreen-tab-limit-android/offscreen-tab-limit-android-page"));
    }
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples:false,
        tsclinks: navigationLinksTsc
    });
}

