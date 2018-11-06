"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onNavigatedTo(args) {
    var page = args.object;
    var navigationContext = page.navigationContext;
    var context = args.context;
    page.bindingContext = navigationContext;
}
exports.onNavigatedTo = onNavigatedTo;
