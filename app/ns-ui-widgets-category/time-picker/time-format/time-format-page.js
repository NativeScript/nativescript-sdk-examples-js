// >> timepicker-time-format-code
import { isAndroid, isIOS } from "@nativescript/core";

export function onPickerLoaded(args) {
    const timePicker = args.object;

    if (isAndroid) {
        timePicker.android.setIs24HourView(java.lang.Boolean.TRUE);
        timePicker.hour = 23;
        timePicker.minute = 59;
    } else if (isIOS) {
        // a bit hacky solution
        // important set the country not the language for locale
        const local = NSLocale.alloc().initWithLocaleIdentifier("NL");
        timePicker.ios.locale = local;
        timePicker.hour = 23;
        timePicker.minute = 59;
    }
}
// << timepicker-time-format-code
