import { Observable } from "@nativescript/core";
// >> html-view-code-behind
import { HtmlView } from "@nativescript/core";
// >> (hide)

export function onPageLoaded(args) {
    const page = args.object;
    const container = page.getViewById("container");
    const vm = new Observable();

    const myHtmlString = "<span><h1><font color=\"blue\">NativeScript HtmlView</font></h1></br><h2>This component accept simple HTML strings</h2></span>";

    vm.set("htmlString", myHtmlString);
    page.bindingContext = vm;

    container.removeChildren();
    container.addChild(createHtmlView());
}

// << (hide)
function createHtmlView() {

    const myHtmlView = new HtmlView();
    myHtmlView.html = "<span><h1><font color=\"blue\">NativeScript HtmlView</font></h1></br><h3>This component accept simple HTML strings</h3></span>";

    return myHtmlView;
}
// << html-view-code-behind
