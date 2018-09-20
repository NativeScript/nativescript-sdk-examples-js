const Observable = require("tns-core-modules/data/observable").Observable;
const Color = require("tns-core-modules/color").Color;

exports.onNavigatingTo = function(args) {
    const page = args.object;

    const vm = new Observable();
    const cssSnippet = "label.borderWidth = 2;\nlabel.borderColor = new Color'orangered');\nlabel.borderRadius = 10;";
    vm.set("snippet", cssSnippet);

    page.bindingContext = vm;
};

exports.onLabelLoaded = function(args) {
    const label = args.object;
    label.backgroundColor = new Color("lightslategray");
    label.color = "#FFFFFF";
    label.fontSize = 14;
    label.padding = 16;

    // >> border-radius-code
    label.borderWidth = 2;
    label.borderColor = new Color("orangered");
    label.borderRadius = 10;
    // << border-radius-code
};
