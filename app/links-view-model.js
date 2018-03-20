const observableModule = require("tns-core-modules/data/observable");
const observableArrayModule = require("tns-core-modules/data/observable-array");
const frameModule = require("tns-core-modules/ui/frame");

function linksSort(value) {
    value.sort(function (a, b) {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
    });
}

function ListViewLinksModel(info) {
    info = info || {};
    linksSort(info.links);

    const viewModel = new observableModule.fromObject({
        "links": new observableArrayModule.ObservableArray(info.links),
        "actionBarTitle": info.actionBarTitle
    });

    viewModel.set("onItemTap", function (args) {
        const linkItem = viewModel.get("links").getItem(args.index);
        frameModule.topmost().navigate({
            moduleName: linkItem.link,
            context: { "title": linkItem.title },
        });
    })

    return viewModel;
}

module.exports = ListViewLinksModel;
