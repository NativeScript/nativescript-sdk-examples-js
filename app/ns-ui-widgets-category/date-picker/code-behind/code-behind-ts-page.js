"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_picker_1 = require("tns-core-modules/ui/date-picker");
function onStackLoaded(args) {
    var stack = args.object;
    var datePicker = new date_picker_1.DatePicker();
    datePicker.day = 20;
    datePicker.month = 4;
    datePicker.year = 1980;
    datePicker.minDate = new Date(1970, 12, 31);
    datePicker.maxDate = new Date(2040, 4, 20);
    stack.addChild(datePicker);
}
exports.onStackLoaded = onStackLoaded;
