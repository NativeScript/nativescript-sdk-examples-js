import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Getting Started", "ns-ui-widgets-category/time-picker/basics/basics-page"),
    new Link("Time Picker Bindings", "ns-ui-widgets-category/time-picker/binding/binding-page"),
    new Link("Time Format (12 vs 24 hours)", "ns-ui-widgets-category/time-picker/time-format/time-format-page")
];
const navigationLinksTsc = [
    new Link("Getting Started", "ns-ui-widgets-category/time-picker/basics/basics-ts-page"),
    new Link("Time Picker Bindings", "ns-ui-widgets-category/time-picker/binding/binding-ts-page"),
    new Link("Time Format (12 vs 24 hours)", "ns-ui-widgets-category/time-picker/time-format/time-format-ts-page")
];
export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples:false,
        tsclinks: navigationLinksTsc
    });
}

