"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var trace_1 = require("tns-core-modules/trace");
var types_1 = require("utils/types");
var array = new observable_array_1.ObservableArray();
var TimestampConsoleWriter = (function () {
    function TimestampConsoleWriter() {
    }
    TimestampConsoleWriter.prototype.write = function (message, category, type) {
        if (!console) {
            return;
        }
        var msgType = types_1.isUndefined(type) ? trace_1.messageType.log : type;
        switch (msgType) {
            case trace_1.messageType.log:
                array.push({
                    "messageType": "log",
                    "date": new Date().toISOString(),
                    "message": message,
                    "category": category
                });
                break;
            case trace_1.messageType.info:
                array.push({
                    "messageType": "info",
                    "date": new Date().toISOString(),
                    "message": message,
                    "category": category
                });
                break;
            case trace_1.messageType.warn:
                array.push({
                    "messageType": "warning",
                    "date": new Date().toISOString(),
                    "message": message,
                    "category": category
                });
                break;
            case trace_1.messageType.error:
                array.push({
                    "messageType": "error",
                    "date": new Date().toISOString(),
                    "message": message,
                    "category": category
                });
                break;
            default:
                break;
        }
    };
    return TimestampConsoleWriter;
}());
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    trace_1.disable();
    trace_1.setCategories(trace_1.categories.Navigation);
    trace_1.enable();
    vm.set("array", array);
    trace_1.clearWriters();
    trace_1.addWriter(new TimestampConsoleWriter());
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
