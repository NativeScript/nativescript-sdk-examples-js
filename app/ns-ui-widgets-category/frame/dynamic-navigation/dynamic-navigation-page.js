const Page = require("tns-core-modules/ui/page").Page;
const StackLayout = require("tns-core-modules/ui/layouts/stack-layout")
    .StackLayout;
const Label = require("tns-core-modules/ui/label").Label;
const getFrameById = require("tns-core-modules/ui/frame").getFrameById;

exports.onLoaded = function() {
    // >> frame-nav-dynamic-page-code
    const frame = getFrameById("my-frame-id");
    frame.navigate({
        create: () => {
            const stack = new StackLayout();
            const label = new Label();
            label.text = "Hello, world!";
            stack.addChild(label);

            const page = new Page();
            page.content = stack;

            return page;
        }
    });
    // << frame-nav-dynamic-page-code
};
