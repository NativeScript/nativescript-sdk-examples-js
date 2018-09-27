// >> wrap-layout-import
const WrapLayout = require("tns-core-modules/ui/layouts/wrap-layout").WrapLayout;
// << wrap-layout-import
const Button = require("tns-core-modules/ui/button/").Button;

exports.onNavigatingTo = function (args) {
    const page = args.object;
    // >> wrap-layout-code-behind
    const myWrap = new WrapLayout();
    // >> (hide)
    const button1 = new Button();
    button1.backgroundColor = "#0099CC";
    button1.width = 150;
    button1.height = 100;
    button1.margin = 4;

    const button2 = new Button();
    button2.backgroundColor = "#FFFF66";
    button2.width = 100;
    button2.height = 150;
    button2.margin = 4;

    const button3 = new Button();
    button3.backgroundColor = "#8C489F";
    button3.width = 200;
    button3.height = 120;
    button3.margin = 4;

    const button4 = new Button();
    button4.backgroundColor = "#CCFFFF";
    button4.width = 100;
    button4.height = 50;
    button4.margin = 4;

    const button5 = new Button();
    button5.backgroundColor = "#AA0078";
    button5.width = 250;
    button5.height = 100;
    button5.margin = 4;
    // << (hide)

    // Add views to stack layout
    myWrap.addChild(button1);
    myWrap.addChild(button2);
    myWrap.addChild(button3);
    myWrap.addChild(button4);
    myWrap.addChild(button5);
    // << wrap-layout-code-behind

    page.content = myWrap;
};
