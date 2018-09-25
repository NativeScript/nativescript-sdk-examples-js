// >> tab-view-import
import { TabView, TabViewItem, SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
// << tab-view-import
import * as dialogs from "tns-core-modules/ui/dialogs";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Label } from "tns-core-modules/ui/label";

export function onLoaded(args) {
    const stackLayout: StackLayout = <StackLayout>args.object;

    // >> creating-tab-view-code-ts

    // creating TabView Item content body
    const stackLayout0 = new StackLayout();
    const label0 = new Label();
    label0.text = "Tab 0";
    stackLayout0.addChild(label0);

    const stackLayout1 = new StackLayout();
    const label1 = new Label();
    label1.text = "Tab 1";
    stackLayout1.addChild(label1);

    const tabViewItem0 = new TabViewItem();
    tabViewItem0.title = "Tab 0";
    tabViewItem0.view = stackLayout0;

    const tabViewItem1 = new TabViewItem();
    tabViewItem1.title = "Tab 1";
    tabViewItem1.view = stackLayout1;

    // creating TabView
    const tabView = new TabView();
    // setting up its items and the selected index
    const items = [];
    items.push(tabViewItem0);
    items.push(tabViewItem1);
    tabView.items = items;

    tabView.selectedIndex = 1;
    // handling selectedIndexChangedEvent
    tabView.on(TabView.selectedIndexChangedEvent, (argstv: SelectedIndexChangedEventData) => {
        dialogs.alert(`Selected index has changed ( Old index: ${argstv.oldIndex} New index: ${argstv.newIndex})`)
            .then(() => {
                console.log("Dialog closed!");
            });
    });
    // << creating-tab-view-code-ts

    stackLayout.addChild(tabView);
}
