import { Observable, ObservableArray, Trace, Utils } from "@nativescript/core";
// >> trace-create-custom-writer
const array = new ObservableArray();
const TimestampConsoleWriter = (() => {

    function TimestampConsoleWriter() { }
    TimestampConsoleWriter.prototype.write = function (message, category, type) {
      if (!console) {
        return;
      }

      const msgType = Utils.isUndefined(type) ? Trace.messageType.log : type;

      switch (msgType) {
        case Trace.messageType.log:
            array.push({
                "messageType": "log",
                "date": new Date().toISOString(),
                "message": message,
                "category": category
            });
          break;
        case Trace.messageType.info:
            array.push({
                "messageType": "info",
                "date": new Date().toISOString(),
                "message": message,
                "category": category
            });
          break;
        case Trace.messageType.warn:
            array.push({
                "messageType": "warning",
                "date": new Date().toISOString(),
                "message": message,
                "category": category
            });
          break;
        case Trace.messageType.error:
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
  })();
// << trace-create-custom-writer
export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    Trace.disable();
    // >> trace-add-custom-writer
    Trace.setCategories(Trace.categories.Navigation);
    Trace.enable();
    // >> (hide)
    vm.set("array", array);
    // << (hide)
    Trace.clearWriters();
    Trace.addWriter(new TimestampConsoleWriter());
    // << trace-add-custom-writer
    page.bindingContext = vm;
}


