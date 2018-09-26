import { EventData } from "tns-core-modules/data/observable/";
import { Button } from "tns-core-modules/ui/button/";
import { Page } from "tns-core-modules/ui/page/";
// >> stack-layout-import-ts
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
// << stack-layout-import-ts

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    // >> stack-layout-code-behind-ts
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
    // << stack-layout-code-behind-ts
    page.content = myStack;
}
