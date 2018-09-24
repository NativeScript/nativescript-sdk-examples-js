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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXRyYWNlLXdyaXRlci10cy1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VzdG9tLXRyYWNlLXdyaXRlci10cy1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQTREO0FBQzVELDJFQUF1RTtBQUN2RSxnREFBd0g7QUFDeEgscUNBQXdDO0FBR3hDLElBQU0sS0FBSyxHQUFHLElBQUksa0NBQWUsRUFBRSxDQUFDO0FBQ3BDO0lBQ0k7SUFBYyxDQUFDO0lBRVIsc0NBQUssR0FBWixVQUFhLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSTtRQUNoQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsSUFBTSxPQUFPLEdBQUcsbUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUUzRCxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUssbUJBQVcsQ0FBQyxHQUFHO2dCQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNQLGFBQWEsRUFBRSxLQUFLO29CQUNwQixNQUFNLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7b0JBQ2hDLFNBQVMsRUFBRSxPQUFPO29CQUNsQixVQUFVLEVBQUUsUUFBUTtpQkFDdkIsQ0FBQyxDQUFDO2dCQUNMLEtBQUssQ0FBQztZQUNSLEtBQUssbUJBQVcsQ0FBQyxJQUFJO2dCQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNQLGFBQWEsRUFBRSxNQUFNO29CQUNyQixNQUFNLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7b0JBQ2hDLFNBQVMsRUFBRSxPQUFPO29CQUNsQixVQUFVLEVBQUUsUUFBUTtpQkFDdkIsQ0FBQyxDQUFDO2dCQUNMLEtBQUssQ0FBQztZQUNSLEtBQUssbUJBQVcsQ0FBQyxJQUFJO2dCQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNQLGFBQWEsRUFBRSxTQUFTO29CQUN4QixNQUFNLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7b0JBQ2hDLFNBQVMsRUFBRSxPQUFPO29CQUNsQixVQUFVLEVBQUUsUUFBUTtpQkFDdkIsQ0FBQyxDQUFDO2dCQUNMLEtBQUssQ0FBQztZQUNSLEtBQUssbUJBQVcsQ0FBQyxLQUFLO2dCQUNsQixLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNQLGFBQWEsRUFBRSxPQUFPO29CQUN0QixNQUFNLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7b0JBQ2hDLFNBQVMsRUFBRSxPQUFPO29CQUNsQixVQUFVLEVBQUUsUUFBUTtpQkFDdkIsQ0FBQyxDQUFDO2dCQUNMLEtBQUssQ0FBQztZQUNSO2dCQUNFLEtBQUssQ0FBQztRQUNWLENBQUM7SUFDSCxDQUFDO0lBQ1AsNkJBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDO0FBRUQsd0JBQStCLElBQUk7SUFDL0IsSUFBTSxJQUFJLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxJQUFNLEVBQUUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztJQUM1QixlQUFPLEVBQUUsQ0FBQztJQUVWLHFCQUFhLENBQUMsa0JBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyQyxjQUFNLEVBQUUsQ0FBQztJQUVULEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXZCLG9CQUFZLEVBQUUsQ0FBQztJQUNmLGlCQUFTLENBQUMsSUFBSSxzQkFBc0IsRUFBRSxDQUFDLENBQUM7SUFFeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDN0IsQ0FBQztBQWRELHdDQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlQXJyYXl9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5pbXBvcnQge2VuYWJsZSwgZGlzYWJsZSwgY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllcywgbWVzc2FnZVR5cGUsIGNsZWFyV3JpdGVycywgYWRkV3JpdGVyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90cmFjZVwiO1xyXG5pbXBvcnQge2lzVW5kZWZpbmVkfSBmcm9tIFwidXRpbHMvdHlwZXNcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuLy8gPj4gdHJhY2UtY3JlYXRlLWN1c3RvbS13cml0ZXItdHNcclxuY29uc3QgYXJyYXkgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KCk7XHJcbmNsYXNzIFRpbWVzdGFtcENvbnNvbGVXcml0ZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICBwdWJsaWMgd3JpdGUobWVzc2FnZSwgY2F0ZWdvcnksIHR5cGUpIHtcclxuICAgICAgICBpZiAoIWNvbnNvbGUpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgY29uc3QgbXNnVHlwZSA9IGlzVW5kZWZpbmVkKHR5cGUpID8gbWVzc2FnZVR5cGUubG9nIDogdHlwZTtcclxuICBcclxuICAgICAgICBzd2l0Y2ggKG1zZ1R5cGUpIHtcclxuICAgICAgICAgIGNhc2UgbWVzc2FnZVR5cGUubG9nOlxyXG4gICAgICAgICAgICAgIGFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VUeXBlXCI6IFwibG9nXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBtZXNzYWdlVHlwZS5pbmZvOlxyXG4gICAgICAgICAgICAgIGFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VUeXBlXCI6IFwiaW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgICBcImRhdGVcIjogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgbWVzc2FnZVR5cGUud2FybjpcclxuICAgICAgICAgICAgICBhcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlVHlwZVwiOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogY2F0ZWdvcnlcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIG1lc3NhZ2VUeXBlLmVycm9yOlxyXG4gICAgICAgICAgICAgIGFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VUeXBlXCI6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogY2F0ZWdvcnlcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxufVxyXG4vLyA8PCB0cmFjZS1jcmVhdGUtY3VzdG9tLXdyaXRlci10c1xyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncykge1xyXG4gICAgY29uc3QgcGFnZTogUGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG4gICAgY29uc3Qgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xyXG4gICAgZGlzYWJsZSgpO1xyXG4gICAgLy8gPj4gdHJhY2UtYWRkLWN1c3RvbS13cml0ZXItdHNcclxuICAgIHNldENhdGVnb3JpZXMoY2F0ZWdvcmllcy5OYXZpZ2F0aW9uKTtcclxuICAgIGVuYWJsZSgpO1xyXG4gICAgLy8gPj4gKGhpZGUpXHJcbiAgICB2bS5zZXQoXCJhcnJheVwiLCBhcnJheSk7XHJcbiAgICAvLyA8PCAoaGlkZSlcclxuICAgIGNsZWFyV3JpdGVycygpO1xyXG4gICAgYWRkV3JpdGVyKG5ldyBUaW1lc3RhbXBDb25zb2xlV3JpdGVyKCkpO1xyXG4gICAgLy8gPDwgdHJhY2UtYWRkLWN1c3RvbS13cml0ZXItdHNcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcclxufVxyXG4iXX0=