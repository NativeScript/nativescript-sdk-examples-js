const Observable = require("tns-core-modules/data/observable").Observable;

exports.onNavigatingTo = function(args) {
    const page = args.object;

    const vm = new Observable();
    const cssSnippet = ".border-props {\n    border-width: 2;\n    border-color: orangered;\n    border-radius: 20;\n}";
    vm.set("snippet", cssSnippet);

    page.bindingContext = vm;
};
