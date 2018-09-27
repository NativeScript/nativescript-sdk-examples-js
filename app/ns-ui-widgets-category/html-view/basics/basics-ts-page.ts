import { EventData, Observable } from "tns-core-modules/data/observable";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Page } from "tns-core-modules/ui/page";
// >> html-view-require-ts
import { HtmlView } from "tns-core-modules/ui/html-view";
// << html-view-require-ts

function onPageLoaded(args: EventData) {
    const page = <Page>args.object;
    const container = <StackLayout>page.getViewById("container");
    const vm = new Observable();
    const myHtmlString = `<span>
        <h1><font color=\"blue\">NativeScript HtmlView</font></h1></br>
        <h3>This component accept simple HTML strings</h3>
    </span>`;

    vm.set("htmlString", myHtmlString);
    page.bindingContext = vm;

    container.removeChildren();
    container.addChild(createHtmlView());
}
exports.onPageLoaded = onPageLoaded;

function createHtmlView() {
    // >> html-view-code-behind-ts
    const myHtmlView = new HtmlView();

    myHtmlView.html = `<span>
        <h1><font color=\"blue\">NativeScript HtmlView</font></h1></br>
        <h3>This component accept simple HTML strings</h3>
    </span>`;
    // << html-view-code-behind-ts

    return myHtmlView;
}
