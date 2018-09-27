"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var TODAY = new Date();
    vm.set("date", TODAY);
    vm.set("minDate", new Date(1975, 0, 29));
    vm.set("maxDate", new Date(2045, 4, 12));
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onDatePickerLoaded(data) {
    var datePicker = data.object;
    datePicker.on("dateChange", function (args) {
        console.dir(args);
    });
    datePicker.on("dayChange", function (args) {
        console.dir(args);
    });
    datePicker.on("monthChange", function (args) {
        console.dir(args);
    });
    datePicker.on("yearChange", function (args) {
        console.dir(args);
    });
}
exports.onDatePickerLoaded = onDatePickerLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNpY3MtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtEQUF5RTtBQUl6RSx3QkFBK0IsSUFBZTtJQUMxQyxJQUFNLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9CLElBQU0sRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBRzVCLElBQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDekIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUV6QyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBWEQsd0NBV0M7QUFFRCw0QkFBbUMsSUFBZTtJQUM5QyxJQUFNLFVBQVUsR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzNDLFVBQVUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQUMsSUFBSTtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxJQUFJO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxVQUFVLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFDLElBQUk7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQztJQUNILFVBQVUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQUMsSUFBSTtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQWRELGdEQWNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPj4gZGF0ZS1waWNrZXItZGF0ZXMtdHNcbmltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZtID0gbmV3IE9ic2VydmFibGUoKTtcblxuICAgIC8vIGluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSB0aGUgRGF0ZVBpY2tlciBwcm9wZXJ0aWVzIGFyZSBiaW5kZWQgdmlhIE9ic2VydmFibGVwcm9wZXJ0aWVzXG4gICAgY29uc3QgVE9EQVkgPSBuZXcgRGF0ZSgpO1xuICAgIHZtLnNldChcImRhdGVcIiwgVE9EQVkpOyAvLyB0aGUgYmluZGVkIGRhdGUgcHJvcGVydHkgYWNjZXB0cyBEYXRlIG9iamVjdFxuICAgIHZtLnNldChcIm1pbkRhdGVcIiwgbmV3IERhdGUoMTk3NSwgMCwgMjkpKTsgLy8gdGhlIGJpbmRlZCBtaW5EYXRlIHByb3BlcnR5IGFjY2VwdHMgRGF0ZSBvYmplY3RcbiAgICB2bS5zZXQoXCJtYXhEYXRlXCIsIG5ldyBEYXRlKDIwNDUsIDQsIDEyKSk7IC8vIHRoZSBiaW5kZWQgbWF4RGF0ZSBwcm9wZXJ0eSBhY2NlcHRzIERhdGUgb2JqZWN0XG5cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkRhdGVQaWNrZXJMb2FkZWQoZGF0YTogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgZGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPmRhdGEub2JqZWN0O1xuICAgIGRhdGVQaWNrZXIub24oXCJkYXRlQ2hhbmdlXCIsIChhcmdzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGlyKGFyZ3MpO1xuICAgIH0pO1xuICAgIGRhdGVQaWNrZXIub24oXCJkYXlDaGFuZ2VcIiwgKGFyZ3MpID0+IHtcbiAgICAgICAgY29uc29sZS5kaXIoYXJncyk7XG4gICAgfSk7XG4gICAgZGF0ZVBpY2tlci5vbihcIm1vbnRoQ2hhbmdlXCIsIChhcmdzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGlyKGFyZ3MpO1xuICAgIH0pO1xuICAgIGRhdGVQaWNrZXIub24oXCJ5ZWFyQ2hhbmdlXCIsIChhcmdzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGlyKGFyZ3MpO1xuICAgIH0pO1xufVxuLy8gPDwgZGF0ZS1waWNrZXItZGF0ZXMtdHNcbiJdfQ==