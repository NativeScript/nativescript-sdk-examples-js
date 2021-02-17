import { Label, Observable } from "@nativescript/core";
// >> label-code-create

export function onNavigatingTo(args) {
    const page = args.object;
    const container = page.getViewById("container");
    const vm = new Observable();

    const myLabel = new Label();
    myLabel.text = "The quick brown fox jumps over the lazy dog.";

    // Styling a label via css type
    myLabel.text = "The quick brown fox jumps over the lazy dog.";
    let pageCSS = "label {background-color: #C6C6C6; color: #bc7474; font-size: 14; padding:10;} ";

    const mySecondLabel = new Label();
    mySecondLabel.text = "The quick brown fox jumps over the lazy dog.";
    // Styling a label via css class
    mySecondLabel.className = "title";
    pageCSS += ".title {background-color: #7974bc; color: #54ff5f; font-size: 20; padding:10;} ";

    const myThirdLabel = new Label();
    myThirdLabel.text = "The quick brown fox jumps over the lazy dog.";
    // Turning on text wrapping for a label
    myThirdLabel.textWrap = true;
    // Styling a label via css control identifier
    myThirdLabel.id = "testLabel";
    pageCSS += "#testLabel {background-color: #bc7474; color: whitesmoke; font-size: 25; padding:10;}";

    // Binding text property of a label to an observable model
    const myFourthlabel = new Label();
    myFourthlabel.textAlignment = "center";
    myFourthlabel.fontSize = 24;
    const expValue = "Expected Value";
    const bindingOptions = {
        sourceProperty: "sourceProperty",
        targetProperty: "text"
    };
    myFourthlabel.bind(bindingOptions, vm);
    vm.set("sourceProperty", expValue);
    // set to the page css property the CSS style defined in the pageCSS
    page.css = pageCSS;

    container.addChild(myLabel);
    container.addChild(mySecondLabel);
    container.addChild(myThirdLabel);
    container.addChild(myFourthlabel);
    page.bindingContext = vm;
}

// << label-code-create
