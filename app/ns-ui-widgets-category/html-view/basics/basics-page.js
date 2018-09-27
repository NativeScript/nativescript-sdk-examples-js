const Observable = require("tns-core-modules/data/observable").Observable;
// >> html-view-require
const HtmlView = require("tns-core-modules/ui/html-view").HtmlView;
// << html-view-require

function onPageLoaded(args) {
    const page = args.object;
    const container = page.getViewById("container");
    const vm = new Observable();

    const myHtmlString = "<span><h1><font color=\"blue\">NativeScript HtmlView</font></h1></br><h2>This component accept simple HTML strings</h2></span>";

    vm.set("htmlString", myHtmlString);
    page.bindingContext = vm;

    container.removeChildren();
    container.addChild(createHtmlView());
}
exports.onPageLoaded = onPageLoaded;

function createHtmlView() {
    // >> html-view-code-behind
    const myHtmlView = new HtmlView();
    myHtmlView.html = "<span><h1><font color=\"blue\">NativeScript HtmlView</font></h1></br><h3>This component accept simple HTML strings</h3></span>";
    // << html-view-code-behind

    return myHtmlView;
}
