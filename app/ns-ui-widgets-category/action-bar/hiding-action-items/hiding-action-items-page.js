var observable = require("tns-core-modules/data/observable");

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = observable.fromObject({"isEditing" : false, title : "Hiding Action Items"});
}

function onEdit(args) {
    console.log("Edit item tapped.");
    var page = args.object.page;
    page.bindingContext.set("isEditing", true);
}

function onSave(args) {
    console.log("Save item tapped.");
    var page = args.object.page;
    page.bindingContext.set("isEditing", false);
}

function onCancel(args) {
    console.log("Cancel item tapped.");
    var page = args.object.page;
    page.bindingContext.set("isEditing", false);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onEdit = onEdit;
exports.onSave = onSave;
exports.onCancel = onCancel;