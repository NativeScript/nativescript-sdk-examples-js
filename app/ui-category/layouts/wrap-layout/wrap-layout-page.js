const WrapLayout = require("tns-core-modules/ui/layouts/wrap-layout").WrapLayout;
const Button = require("tns-core-modules/ui/button/").Button;

exports.onNavigatingTo = function (args) {
    const page = args.object;
    // >> wrap-layout-code-behind
    const myWrap = new WrapLayout();
    // >> (hide)
    const btn1 = new Button();
    btn1.backgroundColor = "#0099CC";
    btn1.width = 150;
    btn1.height = 100;
    btn1.margin = 4;

    const btn2 = new Button();
    btn2.backgroundColor = "#FFFF66";
    btn2.width = 100;
    btn2.height = 150;
    btn2.margin = 4;

    const btn3 = new Button();
    btn3.backgroundColor = "#8C489F";
    btn3.width = 200;
    btn3.height = 120;
    btn3.margin = 4;

    const btn4 = new Button();
    btn4.backgroundColor = "#CCFFFF";
    btn4.width = 100;
    btn4.height = 50;
    btn4.margin = 4;

    const btn5 = new Button();
    btn5.backgroundColor = "#AA0078";
    btn5.width = 250;
    btn5.height = 100;
    btn5.margin = 4;
    // << (hide)

    // Add views to stack layout
    myWrap.addChild(btn1);
    myWrap.addChild(btn2);
    myWrap.addChild(btn3);
    myWrap.addChild(btn4);
    myWrap.addChild(btn5);
    // << wrap-layout-code-behind

    page.content = myWrap;
};
