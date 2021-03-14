// >> date-picker-require
import { DatePicker } from "@nativescript/core";
// << date-picker-require

export function onStackLoaded(args) {
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
}
