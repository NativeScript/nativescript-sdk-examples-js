"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var dateConverter = {
        toView: function (value, format) {
            var result = format;
            var day = value.getDate();
            result = result.replace("DD", day < 10 ? "0" + day : day);
            var month = value.getMonth() + 1;
            result = result.replace("MM", month < 10 ? "0" + month : month);
            result = result.replace("YYYY", value.getFullYear());
            return result;
        },
        toModel: function (value, format) {
            var ddIndex = format.indexOf("DD");
            var day = parseInt(value.substr(ddIndex, 2), 10);
            var mmIndex = format.indexOf("MM");
            var month = parseInt(value.substr(mmIndex, 2), 10);
            var yyyyIndex = format.indexOf("YYYY");
            var year = parseInt(value.substr(yyyyIndex, 4), 10);
            var result = new Date(year, month - 1, day);
            return result;
        }
    };
    var vm = observable_1.fromObject({
        dateConverter: dateConverter,
        dateFormat: "DD/MM/YYYY",
        testDate: new Date()
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function firstTfLoaded(args) {
    var firstTextfield = args.object;
    setTimeout(function () {
        firstTextfield.focus();
    }, 100);
}
exports.firstTfLoaded = firstTfLoaded;
function onReturnPress(args) {
    var textField = args.object;
    console.log(textField.hint);
    console.log(textField.text);
    console.log(textField.secure);
    console.log(textField.keyboardType);
    console.log(textField.returnKeyType);
    console.log(textField.autocapitalizationType);
    console.log(textField.updateTextTrigger);
    console.log(textField.editable);
    console.log(textField.autocorrect);
    console.log(textField.maxLength);
    setTimeout(function () {
        textField.dismissSoftInput();
    }, 100);
}
exports.onReturnPress = onReturnPress;
function onFocus(args) {
    console.log("onFocus event");
}
exports.onFocus = onFocus;
function onBlur(args) {
    var textField = args.object;
    textField.dismissSoftInput();
    console.log("onBlur event");
}
exports.onBlur = onBlur;
