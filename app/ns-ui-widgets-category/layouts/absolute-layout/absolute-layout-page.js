// >> absolute-layout-import
const AbsoluteLayout = require("tns-core-modules/ui/layouts/absolute-layout").AbsoluteLayout;
// << absolute-layout-import
const Button = require("tns-core-modules/ui/button/").Button;
const Color = require("tns-core-modules/color/").Color;
// TODO: This should be in "pageNavigatingTo" but that method is defined in the Page base class
exports.onNavigatingTo = function(args) {
    const page = args.object;
    const stack = page.getViewById("stack");

    // >> absolute-layout-code-behind
    const absoluteLayout = new AbsoluteLayout();

    // >> (hide)
    const button1 = new Button();
    button1.text = "Left: 10, Top: 5";
    button1.backgroundColor = "#0099CC";
    const button2 = new Button();
    button2.text = "Left: 30, Top: 80";
    button2.backgroundColor = "#C3C3E5";
    const button3 = new Button();
    button3.text = "Left: 150, Top: 25";
    button3.backgroundColor = "#CCFFFF";
    const button4 = new Button();
    button4.text = "Left: 70, Top: 150";
    button4.backgroundColor = "#8C489F";
    button4.color = new Color("lightgray");
    // << (hide)
    absoluteLayout.addChild(button1);
    absoluteLayout.addChild(button2);
    absoluteLayout.addChild(button3);
    absoluteLayout.addChild(button4);

    AbsoluteLayout.setLeft(button1, 10);
    AbsoluteLayout.setTop(button1, 5);
    AbsoluteLayout.setLeft(button2, 30);
    AbsoluteLayout.setTop(button2, 80);
    AbsoluteLayout.setLeft(button3, 150);
    AbsoluteLayout.setTop(button3, 25);
    AbsoluteLayout.setLeft(button4, 70);
    AbsoluteLayout.setTop(button4, 150);
    // << absolute-layout-code-behind

    stack.removeChildren();
    stack.addChild(absoluteLayout);
};
