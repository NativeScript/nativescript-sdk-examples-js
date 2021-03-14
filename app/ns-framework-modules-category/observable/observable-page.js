import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Basics", "ns-framework-modules-category/observable/basics/basics-page"),
    new Link("Two-Way Binding", "ns-framework-modules-category/observable/two-way/two-way-page"),
    new Link("MVVM Pattern", "ns-framework-modules-category/observable/mvvm-pattern/mvvm-pattern-page"),
    new Link("Parents Binding", "ns-framework-modules-category/observable/parent-binding/parent-binding-page"),
    new Link("Plain Object Binding", "ns-framework-modules-category/observable/plain-object-binding/plain-object-binding-page")
];
const navigationLinksTsc = [
    new Link("Basics", "ns-framework-modules-category/observable//basics/basics-ts-page"),
    new Link("Two-Way Binding", "ns-framework-modules-category/observable/two-way/two-way-ts-page"),
    new Link("MVVM Pattern", "ns-framework-modules-category/observable/mvvm-pattern/mvvm-pattern-ts-page"),
    new Link("Parents Binding", "ns-framework-modules-category/observable/parent-binding/parent-binding-ts-page"),
    new Link("Plain Object Binding", "ns-framework-modules-category/observable/plain-object-binding/plain-object-binding-ts-page")
];
export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples: false,
        tsclinks: navigationLinksTsc
    });
}

