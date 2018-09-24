// >> date-picker-require-ts
import { DatePicker } from "tns-core-modules/ui/date-picker";
// << date-picker-require-ts
import { EventData } from "tns-core-modules/data/observable";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";

export function onStackLoaded(args: EventData) {
    const stack = <StackLayout>args.object;

    // >> date-picker-code-behind-ts
    const datePicker = new DatePicker();
    datePicker.day = 20;
    datePicker.month = 4;
    datePicker.year = 1980;
    // datePicker.date = new Date(1980, 4, 20); // using Date object

    datePicker.minDate = new Date(1970, 12, 31);
    datePicker.maxDate = new Date(2040, 4, 20);
    // << date-picker-code-behind-ts

    stack.addChild(datePicker);
}
