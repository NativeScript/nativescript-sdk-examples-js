// >> action-bar-hiding-action-items-js
const fromObject = require("tns-core-modules/data/observable").fromObject;

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = fromObject({
        isEditing: false,
        title: "Hiding Action Items"
    });
}
exports.onNavigatingTo = onNavigatingTo;

function onEdit(args) {
    const page = args.object.page;
    page.bindingContext.set("isEditing", true);
}
exports.onEdit = onEdit;

function onSave(args) {
    const page = args.object.page;
    page.bindingContext.set("isEditing", false);
}
exports.onSave = onSave;

function onCancel(args) {
    const page = args.object.page;
    page.bindingContext.set("isEditing", false);
}
exports.onCancel = onCancel;
// << action-bar-hiding-action-items-js
