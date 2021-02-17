import { Frame, ObservableArray, fromObject } from "@nativescript/core";

function linksSort(value) {
    value.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        const expression = (titleA > titleB) ? 1 : 0;

        return (titleA < titleB) ? -1 : expression;
    });
}

function ListViewLinksModel(info) {
    info = info || {};
    linksSort(info.links);
    const viewModel = new fromObject({
        "links": new ObservableArray(info.links),
        "actionBarTitle": info.actionBarTitle,
        "showTypeScriptExamples": info.showTypeScriptExamples ? info.showTypeScriptExamples : false,
        "tsclinks": info.tsclinks ? new ObservableArray(info.tsclinks) : undefined
    });

    viewModel.set("onItemTap", (args) => {
        const linkItem = viewModel.get("links").getItem(args.index);
        console.log("linkItem", linkItem);
        Frame.topmost().navigate({
            moduleName: linkItem.link,
            context: { "title": linkItem.title }
        });
    });
    viewModel.set("onSecondItemTap", (args) => {
        const linkItem = viewModel.get("tsclinks").getItem(args.index);
        Frame.topmost().navigate({
            moduleName: linkItem.link,
            context: { "title": linkItem.title }
        });
    });
    viewModel.set("onButtonTap", (args) => {
        const value = viewModel.get("showTypeScriptExamples");
        viewModel.set("showTypeScriptExamples", !value);
    });

    return viewModel;
}

export default ListViewLinksModel;
