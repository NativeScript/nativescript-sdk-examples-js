let tabViewModule = require("tns-core-modules/ui/tab-view");
let StackLayout = require("tns-core-modules/ui/layouts/stack-layout").StackLayout;
let Label = require("tns-core-modules/ui/label").Label;
// >> creating-tab-view-code

function onPageLoaded (args) {
    let page = args.object;
    let stackLayout = page.getViewById("stackLayoutId");

    let items = [];

    let StackLayout0 = new StackLayout();
    let label0 = new Label();
    label0.text = "Tab 0";
    StackLayout0.addChild(label0);
    let tabEntry0 = new tabViewModule.TabViewItem();
    tabEntry0.title = "Tab 0";
    tabEntry0.view = StackLayout0;
    items.push(tabEntry0);

    let StackLayout1 = new StackLayout();
    let label1 = new Label();
    label1.text = "Tab 1";
    StackLayout1.addChild(label1);
    let tabEntry1 = new tabViewModule.TabViewItem();
    tabEntry1.title = "Tab 1";
    tabEntry1.view = StackLayout1;
    items.push(tabEntry1);

    let tabView = new tabViewModule.TabView();
    tabView.items = items;
    tabView.selectedIndex = 1;
    tabView.on(tabViewModule.TabView.selectedIndexChangedEvent, (args) => {
        alert("Selected index has changed ( Old index: "+args.oldIndex+" New index: "+args.newIndex+" )");
    });


    stackLayout.addChild(tabView);
}

exports.onPageLoaded = onPageLoaded;
// << creating-tab-view-code