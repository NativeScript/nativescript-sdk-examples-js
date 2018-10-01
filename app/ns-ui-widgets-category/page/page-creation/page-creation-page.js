// >> page-creation-js
function onPageLoaded(args) {
    console.log("Page Loaded");
    const page = args.object;
}
exports.onPageLoaded = onPageLoaded;
// << page-creation-js

/*
// >> page-code-create-js
const Page = require("tns-core-modules/ui/page").Page;
const Label = require("tns-core-modules/ui/label").Label;
const StackLayout = require("tns-core-modules/ui/layouts/stack-layout").StackLayout;

function createPage() {
    // Creating of the page content
    const stack = new StackLayout();
    const label = new Label();
    label.text = "Hello, world!";
    stack.addChild(label);

    const page = new Page();
    // A page can have only one single root view set via the content property (in this case a StackLayout)
    page.content = stack;

    return page;
}
exports.createPage = createPage;
// << page-code-create-js
*/
