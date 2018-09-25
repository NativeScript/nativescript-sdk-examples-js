"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var color_1 = require("tns-core-modules/color");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var cssSnippet = "label.borderWidth = 2;\nlabel.borderColor = new Color'orangered');\nlabel.borderRadius = 10;";
    vm.set("snippet", cssSnippet);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onLabelLoaded(args) {
    var label = args.object;
    label.backgroundColor = new color_1.Color("lightslategray");
    label.color = new color_1.Color("#FFFFFF");
    label.fontSize = 14;
    label.padding = 16;
    label.borderWidth = 2;
    label.borderColor = new color_1.Color("orangered");
    label.borderRadius = 10;
}
exports.onLabelLoaded = onLabelLoaded;
