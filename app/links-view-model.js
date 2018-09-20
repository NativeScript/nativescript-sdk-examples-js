const observableModule = require("tns-core-modules/data/observable");
const observableArrayModule = require("tns-core-modules/data/observable-array");
const frameModule = require("tns-core-modules/ui/frame");

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

    const viewModel = new observableModule.fromObject({
        "links": new observableArrayModule.ObservableArray(info.links),
        "actionBarTitle": info.actionBarTitle,
        "showTypeScriptExamples": info.showTypeScriptExamples ? info.showTypeScriptExamples : false,
        "tsclinks": info.tsclinks ? new observableArrayModule.ObservableArray(info.tsclinks) : undefined
    });

    viewModel.set("onItemTap", (args) => {
        const linkItem = viewModel.get("links").getItem(args.index);
        frameModule.topmost().navigate({
            moduleName: linkItem.link,
            context: { "title": linkItem.title }
        });
    });
    viewModel.set("onSecondItemTap", (args) => {
        const linkItem = viewModel.get("tsclinks").getItem(args.index);
        frameModule.topmost().navigate({
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

module.exports = ListViewLinksModel;
