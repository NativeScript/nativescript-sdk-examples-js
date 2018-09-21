"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = observable_1.fromObject({
        isEditing: false,
        title: "Hiding Action Items"
    });
}
exports.onNavigatingTo = onNavigatingTo;
function onEdit(args) {
    var page = args.object.page;
    page.bindingContext.set("isEditing", true);
}
exports.onEdit = onEdit;
function onSave(args) {
    var page = args.object.page;
    page.bindingContext.set("isEditing", false);
}
exports.onSave = onSave;
function onCancel(args) {
    var page = args.object.page;
    page.bindingContext.set("isEditing", false);
}
exports.onCancel = onCancel;
