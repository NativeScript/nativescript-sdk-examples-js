// >> date-picker-require
const DatePicker = require("tns-core-modules/ui/date-picker").DatePicker;
// << date-picker-require

exports.onStackLoaded = function(args) {
    const stack = args.object;

    // >> date-picker-code-behind
    const datePicker = new DatePicker();
    datePicker.day = 20;
    datePicker.month = 4;
    datePicker.year = 1980;
    // datePicker.date = new Date(1980, 4, 20);

    datePicker.minDate = new Date(1970, 12, 31);
    datePicker.maxDate = new Date(2040, 4, 20);
    // << date-picker-code-behind

    stack.addChild(datePicker);
};
