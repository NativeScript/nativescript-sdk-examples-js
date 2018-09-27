import { fromObject } from "tns-core-modules/data/observable";
import { TextField } from "tns-core-modules/ui/text-field";
import { Label } from "tns-core-modules/ui/label";

export function onStackLayoutLoaded(args) {
    const stackLayout = args.object;

    // >> two-way-binding-code-ts
    const observableSource = fromObject({
        myTextSource: "" // initial binding value (in this case empty string)
    });

    // create the TextField
    const targetTextField = new TextField();
    // >> (hide)
    targetTextField.marginBottom = 16;
    targetTextField.hint = "Enter text to trigger two-way binding";
    // << (hide)
    // create the Label
    const targetLabel = new Label();
    // >> (hide)
    targetLabel.textWrap = true;
    targetLabel.className = "h2";
    // << (hide)
    stackLayout.addChild(targetTextField);
    stackLayout.addChild(targetLabel);

    // binding the TextField with BindingOptions
    const textFieldBindingOptions = {
        sourceProperty: "myTextSource",
        targetProperty: "text",
        twoWay: true
    };
    targetTextField.bind(textFieldBindingOptions, observableSource);

    // binding the Label with BindingOptions
    const labelBindingOptions = {
        sourceProperty: "myTextSource",
        targetProperty: "text",
        twoWay: false // we don't need two-way for the Label as it can not accept user input
    };
    targetLabel.bind(labelBindingOptions, observableSource);
    // << two-way-binding-code-ts
}
