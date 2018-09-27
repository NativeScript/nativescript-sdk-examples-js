// >> dock-layout-import
const DockLayout = require("tns-core-modules/ui/layouts/dock-layout").DockLayout;
// << dock-layout-import
const Button = require("tns-core-modules/ui/button/").Button;

exports.onNavigatingTo = function(args) {
    const page = args.object;
    const grid = page.getViewById("grid");

    // >> dock-layout-code
    const myDockLayout = new DockLayout();
    // >> (hide)
    const button1 = new Button();
    button1.text = "Left";
    button1.backgroundColor = "#0099CC";
    const button2 = new Button();
    button2.text = "Right";
    button2.backgroundColor = "#8C489F";
    const button3 = new Button();
    button3.text = "Top";
    button3.backgroundColor = "#AA0078";
    const button4 = new Button();
    button4.text = "Bottom";
    button4.backgroundColor = "#B3B3D7";
    button4.color = "lightgray";
    const button5 = new Button();
    button5.text = "Fill";
    button5.backgroundColor = "#CCFFFF";
    // << (hide)
    myDockLayout.addChild(button1);
    myDockLayout.addChild(button2);
    myDockLayout.addChild(button3);
    myDockLayout.addChild(button4);
    myDockLayout.addChild(button5);
    myDockLayout.stretchLastChild = true;

    // const DockLayout = require("tns-core-modules/ui/layouts/dock-layout").DockLayout;
    DockLayout.setDock(button1, "left");
    DockLayout.setDock(button2, "right");
    DockLayout.setDock(button3, "top");
    DockLayout.setDock(button4, "bottom");
    // << dock-layout-code

    grid.removeChildren();
    grid.addChild(myDockLayout);

};
