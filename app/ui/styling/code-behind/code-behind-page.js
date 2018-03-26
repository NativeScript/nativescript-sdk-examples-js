const buttonModule = require("tns-core-modules/ui/button");
const labelModule = require("tns-core-modules/ui/label");
// >> style-code-behind
function onPageLoaded(args) {
    const page = args.object;
    const stacklayout = page.getViewById("layoutContainer");
    page.css = ".title { font-size: 20 } .secondTitle { font-size: 10 } button { background-color: red; } .test { color: blue; } #myButton { color: yellow; } .lastButton:pressed { color: green; }";

    // Creating a button, while using the globaly defined style for this component type
    const btn = new buttonModule.Button();
    btn.text = "Sample button";
    stacklayout.addChild(btn);

    // Attaching CSS class to a label
    const label = new labelModule.Label();
    label.text = "Sample label";
    label.className = "secondTitle";
    stacklayout.addChild(label);

    // Atttaching CSS class to the component
    const btnWithClass = new buttonModule.Button();
    btnWithClass.text = "Button with class";
    btnWithClass.className = "test";
    stacklayout.addChild(btnWithClass);

    // Attaching id to a button component
    const btnWithId = new buttonModule.Button();
    btnWithId.text = "Button with Id";
    btnWithId.id = "myButton";
    stacklayout.addChild(btnWithId);

    // Button with state selector
    const btnStateSelector = new buttonModule.Button();
    btnStateSelector.text = "Button with state selector";
    btnStateSelector.class = "lastButton";
    stacklayout.addChild(btnStateSelector);
}

exports.onPageLoaded = onPageLoaded;
// << style-code-behind
