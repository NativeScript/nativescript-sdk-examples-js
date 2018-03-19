// >> import-button-widget
const Button = require("tns-core-modules/ui/button").Button;
// << import-button-widget
function onNavigatingTo(args) {
    let page = args.object;
    let container = page.getViewById("container");

    // >> button-code-create
    let myButton = new Button();
    myButton.text = "Tap me!";
    myButton.className = "btn btn-primary btn-active";
    myButton.on("tap", () => {
        console.log("My newly created button is tapped!");
    });
    // << button-code-create

    container.addChild(myButton);
}
exports.onNavigatingTo = onNavigatingTo;
