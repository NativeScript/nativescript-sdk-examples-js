// >> action-bar-hiding-action-items-js
const observable = require("tns-core-modules/data/observable");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = observable.fromObject({ "isEditing" : false, title : "Hiding Action Items" });
}

function onEdit(args) {
    console.log("Edit item tapped.");
    const page = args.object.page;
    page.bindingContext.set("isEditing", true);
}

function onSave(args) {
    console.log("Save item tapped.");
    const page = args.object.page;
    page.bindingContext.set("isEditing", false);
}

function onCancel(args) {
    console.log("Cancel item tapped.");
    const page = args.object.page;
    page.bindingContext.set("isEditing", false);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onEdit = onEdit;
exports.onSave = onSave;
exports.onCancel = onCancel;
// << action-bar-hiding-action-items-js
