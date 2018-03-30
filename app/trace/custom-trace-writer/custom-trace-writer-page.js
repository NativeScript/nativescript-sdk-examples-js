const Observable = require("tns-core-modules/data/observable").Observable;
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const traceModule = require("tns-core-modules/trace");
const types = require("utils/types");
// >> trace-create-custom-writer
const array = new ObservableArray();
const TimestampConsoleWriter = (() => {

    function TimestampConsoleWriter() { }
    TimestampConsoleWriter.prototype.write = function (message, category, type) {
      if (!console) {
        return;
      }

      const msgType = types.isUndefined(type) ? traceModule.messageType.log : type;

      switch (msgType) {
        case traceModule.messageType.log:
            array.push({
                "messageType": "log",
                "date": new Date().toISOString(),
                "message": message,
                "category": category
            });
          break;
        case traceModule.messageType.info:
            array.push({
                "messageType": "info",
                "date": new Date().toISOString(),
                "message": message,
                "category": category
            });
          break;
        case traceModule.messageType.warn:
            array.push({
                "messageType": "warning",
                "date": new Date().toISOString(),
                "message": message,
                "category": category
            });
          break;
        case traceModule.messageType.error:
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
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    traceModule.disable();
    // >> trace-add-custom-writer
    traceModule.setCategories(traceModule.categories.Navigation);
    traceModule.enable();
    // >> (hide)
    vm.set("array", array);
    // << (hide)
    traceModule.clearWriters();
    traceModule.addWriter(new TimestampConsoleWriter());
    // << trace-add-custom-writer
    page.bindingContext = vm;
}

exports.onNavigatingTo = onNavigatingTo;
