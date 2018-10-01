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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXRyYWNlLXdyaXRlci10cy1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VzdG9tLXRyYWNlLXdyaXRlci10cy1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0RBQThEO0FBQzlELDJFQUF5RTtBQUN6RSxnREFBMEg7QUFDMUgscUNBQTBDO0FBRzFDLElBQU0sS0FBSyxHQUFHLElBQUksa0NBQWUsRUFBRSxDQUFDO0FBQ3BDO0lBQ0k7SUFBZ0IsQ0FBQztJQUVWLHNDQUFLLEdBQVosVUFBYSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUk7UUFDaEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1gsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQU0sT0FBTyxHQUFHLG1CQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFM0QsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssbUJBQVcsQ0FBQyxHQUFHO2dCQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNQLGFBQWEsRUFBRSxLQUFLO29CQUNwQixNQUFNLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7b0JBQ2hDLFNBQVMsRUFBRSxPQUFPO29CQUNsQixVQUFVLEVBQUUsUUFBUTtpQkFDdkIsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQztZQUNWLEtBQUssbUJBQVcsQ0FBQyxJQUFJO2dCQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNQLGFBQWEsRUFBRSxNQUFNO29CQUNyQixNQUFNLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7b0JBQ2hDLFNBQVMsRUFBRSxPQUFPO29CQUNsQixVQUFVLEVBQUUsUUFBUTtpQkFDdkIsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQztZQUNWLEtBQUssbUJBQVcsQ0FBQyxJQUFJO2dCQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNQLGFBQWEsRUFBRSxTQUFTO29CQUN4QixNQUFNLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7b0JBQ2hDLFNBQVMsRUFBRSxPQUFPO29CQUNsQixVQUFVLEVBQUUsUUFBUTtpQkFDdkIsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQztZQUNWLEtBQUssbUJBQVcsQ0FBQyxLQUFLO2dCQUNsQixLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNQLGFBQWEsRUFBRSxPQUFPO29CQUN0QixNQUFNLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7b0JBQ2hDLFNBQVMsRUFBRSxPQUFPO29CQUNsQixVQUFVLEVBQUUsUUFBUTtpQkFDdkIsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQztZQUNWO2dCQUNJLEtBQUssQ0FBQztRQUNkLENBQUM7SUFDTCxDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDO0FBRUQsd0JBQStCLElBQUk7SUFDL0IsSUFBTSxJQUFJLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxJQUFNLEVBQUUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztJQUM1QixlQUFPLEVBQUUsQ0FBQztJQUVWLHFCQUFhLENBQUMsa0JBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyQyxjQUFNLEVBQUUsQ0FBQztJQUVULEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXZCLG9CQUFZLEVBQUUsQ0FBQztJQUNmLGlCQUFTLENBQUMsSUFBSSxzQkFBc0IsRUFBRSxDQUFDLENBQUM7SUFFeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDN0IsQ0FBQztBQWRELHdDQWNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IGVuYWJsZSwgZGlzYWJsZSwgY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllcywgbWVzc2FnZVR5cGUsIGNsZWFyV3JpdGVycywgYWRkV3JpdGVyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdHJhY2VcIjtcbmltcG9ydCB7IGlzVW5kZWZpbmVkIH0gZnJvbSBcInV0aWxzL3R5cGVzXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuLy8gPj4gdHJhY2UtY3JlYXRlLWN1c3RvbS13cml0ZXItdHNcbmNvbnN0IGFycmF5ID0gbmV3IE9ic2VydmFibGVBcnJheSgpO1xuY2xhc3MgVGltZXN0YW1wQ29uc29sZVdyaXRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHB1YmxpYyB3cml0ZShtZXNzYWdlLCBjYXRlZ29yeSwgdHlwZSkge1xuICAgICAgICBpZiAoIWNvbnNvbGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1zZ1R5cGUgPSBpc1VuZGVmaW5lZCh0eXBlKSA/IG1lc3NhZ2VUeXBlLmxvZyA6IHR5cGU7XG5cbiAgICAgICAgc3dpdGNoIChtc2dUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIG1lc3NhZ2VUeXBlLmxvZzpcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlVHlwZVwiOiBcImxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBjYXRlZ29yeVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBtZXNzYWdlVHlwZS5pbmZvOlxuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VUeXBlXCI6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBjYXRlZ29yeVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBtZXNzYWdlVHlwZS53YXJuOlxuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VUeXBlXCI6IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBjYXRlZ29yeVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBtZXNzYWdlVHlwZS5lcnJvcjpcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlVHlwZVwiOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IGNhdGVnb3J5XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8gPDwgdHJhY2UtY3JlYXRlLWN1c3RvbS13cml0ZXItdHNcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XG4gICAgY29uc3QgcGFnZTogUGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZtID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICBkaXNhYmxlKCk7XG4gICAgLy8gPj4gdHJhY2UtYWRkLWN1c3RvbS13cml0ZXItdHNcbiAgICBzZXRDYXRlZ29yaWVzKGNhdGVnb3JpZXMuTmF2aWdhdGlvbik7XG4gICAgZW5hYmxlKCk7XG4gICAgLy8gPj4gKGhpZGUpXG4gICAgdm0uc2V0KFwiYXJyYXlcIiwgYXJyYXkpO1xuICAgIC8vIDw8IChoaWRlKVxuICAgIGNsZWFyV3JpdGVycygpO1xuICAgIGFkZFdyaXRlcihuZXcgVGltZXN0YW1wQ29uc29sZVdyaXRlcigpKTtcbiAgICAvLyA8PCB0cmFjZS1hZGQtY3VzdG9tLXdyaXRlci10c1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcbn1cbiJdfQ==