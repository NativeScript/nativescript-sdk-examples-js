import { Color, Observable } from "@nativescript/core";

export function onNavigatingTo(args) {
    const page = args.object;

    const vm = new Observable();
    const cssSnippet = "label.borderWidth = 2;\nlabel.borderColor = new Color'orangered');\nlabel.borderRadius = 10;";
    vm.set("snippet", cssSnippet);

    page.bindingContext = vm;
}

export function onLabelLoaded(args) {
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
}
