"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var label_1 = require("tns-core-modules/ui/label");
function onNavigatingTo(args) {
    var page = args.object;
    var container = page.getViewById("container");
    var vm = new observable_1.Observable();
    var myLabel = new label_1.Label();
    myLabel.text = "The quick brown fox jumps over the lazy dog.";
    myLabel.text = "The quick brown fox jumps over the lazy dog.";
    var pageCSS = "Label {background-color: #C6C6C6; color: #bc7474; font-size: 14; padding:10;} ";
    var mySecondLabel = new label_1.Label();
    mySecondLabel.text = "The quick brown fox jumps over the lazy dog.";
    mySecondLabel.className = "title";
    pageCSS += ".title {background-color: #7974bc; color: #54ff5f; font-size: 20; padding:10;} ";
    var myThirdLabel = new label_1.Label();
    myThirdLabel.text = "The quick brown fox jumps over the lazy dog.";
    myThirdLabel.textWrap = true;
    myThirdLabel.id = "testLabel";
    pageCSS += "#testLabel {background-color: #bc7474; color: whitesmoke; font-size: 25; padding:10;}";
    var myFourthlabel = new label_1.Label();
    myFourthlabel.textAlignment = "center";
    myFourthlabel.fontSize = 24;
    var expValue = "NativeScript is Awesome!";
    var bindingOptions = {
        sourceProperty: "sourceProperty",
        targetProperty: "text"
    };
    myFourthlabel.bind(bindingOptions, vm);
    vm.set("sourceProperty", expValue);
    page.css = pageCSS;
    container.addChild(myLabel);
    container.addChild(mySecondLabel);
    container.addChild(myThirdLabel);
    container.addChild(myFourthlabel);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
