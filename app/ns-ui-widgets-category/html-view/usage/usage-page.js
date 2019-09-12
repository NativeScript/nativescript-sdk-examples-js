const Observable = require("tns-core-modules/data/observable").Observable;
// >> html-view-code-behind
const HtmlView = require("tns-core-modules/ui/html-view").HtmlView;
// >> (hide)

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
// << (hide)
function createHtmlView() {
    
    const myHtmlView = new HtmlView();
    myHtmlView.html = "<span><h1><font color=\"blue\">NativeScript HtmlView</font></h1></br><h3>This component accept simple HTML strings</h3></span>";
    

    return myHtmlView;
}
// << html-view-code-behind