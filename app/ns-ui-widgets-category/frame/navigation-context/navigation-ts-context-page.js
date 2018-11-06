"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onNavigate(args) {
    var button = args.object;
    var page = button.page;
    var frame = page.frame;
    var navEntryWithContext = {
        moduleName: "home/second-ts-page",
        context: {
            name: "John",
            age: 25,
            isProgramer: true
        }
    };
    frame.navigate(navEntryWithContext);
}
exports.onNavigate = onNavigate;
var navEntryWithBindingContext = {
    moduleName: "home/second-ts-page",
    bindingContext: {
        name: "John",
        age: 25,
        isProgramer: true
    }
};
