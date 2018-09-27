// >> stack-layout-import
const StackLayout = require("tns-core-modules/ui/layouts/stack-layout").StackLayout;
// << stack-layout-import
const Button = require("tns-core-modules/ui/button/").Button;

exports.onNavigatingTo = function (args) {
    const page = args.object;
    // >> stack-layout-code-behind
    const myStack = new StackLayout();
    // Set the orientation property
    myStack.orientation = "horizontal";
    // >> (hide)
    const button1 = new Button();
    button1.backgroundColor = "#0099CC";
    button1.width = 100;
    button1.margin = 8;
    const button2 = new Button();
    button2.backgroundColor = "#CCFFFF";
    button2.width = 100;
    button2.margin = 8;
    const button3 = new Button();
    button3.backgroundColor = "#8C489F";
    button3.width = 100;
    button3.margin = 8;
    // << (hide)

    // Add views to stack layout
    myStack.addChild(button1);
    myStack.addChild(button2);
    myStack.addChild(button3);
    // << stack-layout-code-behind

    page.content = myStack;
};
