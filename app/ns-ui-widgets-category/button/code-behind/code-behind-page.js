// >> import-button-widget
const Button = require("tns-core-modules/ui/button").Button;
// << import-button-widget
function onNavigatingTo(args) {
    const page = args.object;
    const container = page.getViewById("container");

    // >> button-code-create
    const myButton = new Button();
    myButton.text = "Tap me!";
    myButton.className = "btn btn-primary btn-active";
    myButton.on("tap", (data) => {
        // args is of type EventData
        alert("Button Tapped!");
    });
    // << button-code-create

    container.addChild(myButton);
}
exports.onNavigatingTo = onNavigatingTo;
