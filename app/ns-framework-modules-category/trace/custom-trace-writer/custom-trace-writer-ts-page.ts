// tslint:disable:max-line-length
import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { enable, disable, categories, setCategories, messageType, clearWriters, addWriter } from "tns-core-modules/trace";
import { isUndefined } from "utils/types";
import { Page } from "tns-core-modules/ui/page";
// >> trace-create-custom-writer-ts
const array = new ObservableArray();
class TimestampConsoleWriter {
    constructor() { }

    public write(message, category, type) {
        if (!console) {
            return;
        }

        const msgType = isUndefined(type) ? messageType.log : type;

        switch (msgType) {
            case messageType.log:
                array.push({
                    "messageType": "log",
                    "date": new Date().toISOString(),
                    "message": message,
                    "category": category
                });
                break;
            case messageType.info:
                array.push({
                    "messageType": "info",
                    "date": new Date().toISOString(),
                    "message": message,
                    "category": category
                });
                break;
            case messageType.warn:
                array.push({
                    "messageType": "warning",
                    "date": new Date().toISOString(),
                    "message": message,
                    "category": category
                });
                break;
            case messageType.error:
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
    }
}
// << trace-create-custom-writer-ts
export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();
    disable();
    // >> trace-add-custom-writer-ts
    setCategories(categories.Navigation);
    enable();
    // >> (hide)
    vm.set("array", array);
    // << (hide)
    clearWriters();
    addWriter(new TimestampConsoleWriter());
    // << trace-add-custom-writer-ts
    page.bindingContext = vm;
}
