"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var text_field_1 = require("tns-core-modules/ui/text-field");
var label_1 = require("tns-core-modules/ui/label");
function onStackLayoutLoaded(args) {
    var stackLayout = args.object;
    var observableSource = observable_1.fromObject({
        myTextSource: ""
    });
    var targetTextField = new text_field_1.TextField();
    targetTextField.marginBottom = 16;
    targetTextField.hint = "Enter text to trigger two-way binding";
    var targetLabel = new label_1.Label();
    targetLabel.textWrap = true;
    targetLabel.className = "h2";
    stackLayout.addChild(targetTextField);
    stackLayout.addChild(targetLabel);
    var textFieldBindingOptions = {
        sourceProperty: "myTextSource",
        targetProperty: "text",
        twoWay: true
    };
    targetTextField.bind(textFieldBindingOptions, observableSource);
    var labelBindingOptions = {
        sourceProperty: "myTextSource",
        targetProperty: "text",
        twoWay: false
    };
    targetLabel.bind(labelBindingOptions, observableSource);
}
exports.onStackLayoutLoaded = onStackLayoutLoaded;
