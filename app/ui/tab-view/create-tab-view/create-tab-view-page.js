// >> tab-view-require
const tabViewModule = require("tns-core-modules/ui/tab-view");
const dialogs = require("tns-core-modules/ui/dialogs");
// << tab-view-require
const StackLayout = require("tns-core-modules/ui/layouts/stack-layout").StackLayout;
const Label = require("tns-core-modules/ui/label").Label;
// >> creating-tab-view-code
function onPageLoaded(args) {
    const page = args.object;
    const stackLayout = page.getViewById("stackLayoutId");
    const items = [];
    // creating TabView Item content body
    const StackLayout0 = new StackLayout();
    const label0 = new Label();
    label0.text = "Tab 0";
    StackLayout0.addChild(label0);
    const tabEntry0 = new tabViewModule.TabViewItem();
    // creating TabView Item title
    tabEntry0.title = "Tab 0";
    tabEntry0.view = StackLayout0;
    items.push(tabEntry0);

    const StackLayout1 = new StackLayout();
    const label1 = new Label();
    label1.text = "Tab 1";
    StackLayout1.addChild(label1);
    const tabEntry1 = new tabViewModule.TabViewItem();
    tabEntry1.title = "Tab 1";
    tabEntry1.view = StackLayout1;
    items.push(tabEntry1);
    // creating TabView
    const tabView = new tabViewModule.TabView();
    // setting up its items and the selected index
    tabView.items = items;
    tabView.selectedIndex = 1;
    // handling selectedIndexChangedEvent
    tabView.on(tabViewModule.TabView.selectedIndexChangedEvent, (args) => {
        dialogs.alert(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex})`)
        .then(() => {
            console.log("Dialog closed!");
        });
    });


    stackLayout.addChild(tabView);
}

exports.onPageLoaded = onPageLoaded;
// << creating-tab-view-code
