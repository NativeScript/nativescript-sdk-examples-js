const StackLayout = require("tns-core-modules/ui/layouts/stack-layout").StackLayout;
const Button = require("tns-core-modules/ui/button/").Button;

exports.onNavigatingTo = function (args) {
    const page = args.object;
    // >> stack-layout-code-behind
    const myStack = new StackLayout();
    // Set the orientation property
    myStack.orientation = "horizontal";
    // >> (hide)
    const btn1 = new Button();
    btn1.backgroundColor = "#0099CC";
    btn1.width = 100;
    btn1.margin = 8;
    const btn2 = new Button();
    btn2.backgroundColor = "#CCFFFF";
    btn2.width = 100;
    btn2.margin = 8;
    const btn3 = new Button();
    btn3.backgroundColor = "#8C489F";
    btn3.width = 100;
    btn3.margin = 8;
    // << (hide)

    // Add views to stack layout
    myStack.addChild(btn1);
    myStack.addChild(btn2);
    myStack.addChild(btn3);
    // << stack-layout-code-behind

    page.content = myStack;
};
