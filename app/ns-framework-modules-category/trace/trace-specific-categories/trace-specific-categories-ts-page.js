"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var trace_1 = require("tns-core-modules/trace");
var timer_1 = require("tns-core-modules/timer");
var dialogs = require("tns-core-modules/ui/dialogs");
function onNavigatingTo(args) {
    trace_1.disable();
    trace_1.setCategories(trace_1.categories.concat(trace_1.categories.Binding, trace_1.categories.Layout, trace_1.categories.Style, trace_1.categories.ViewHierarchy, trace_1.categories.VisualTreeEvents));
    trace_1.enable();
    trace_1.addCategories(trace_1.categories.Navigation);
    timer_1.setTimeout(function () {
        console.log("-----------------------------------------------------");
        console.log("New trace category has been added");
        console.log("Category: NativeLifecycle");
        console.log("-----------------------------------------------------");
        dialogs.alert("NativeLifecycle trace category has been added.")
            .then(function () {
            console.log("Dialog closed!");
        });
        trace_1.addCategories(trace_1.categories.NativeLifecycle);
    }, 2000);
    trace_1.write("I (heart) NativeScript!", trace_1.categories.Debug);
}
exports.onNavigatingTo = onNavigatingTo;
function checkIsDebugCategorySet() {
    if (trace_1.isCategorySet(trace_1.categories.Debug)) {
        dialogs.alert("Debug category has been set")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
    else {
        dialogs.alert("Debug category has not been set")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
}
exports.checkIsDebugCategorySet = checkIsDebugCategorySet;
function checkIsDebugVisualTreeEventsSet() {
    if (trace_1.isCategorySet(trace_1.categories.VisualTreeEvents)) {
        dialogs.alert("VisualTreeEvents category has been set")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
    else {
        dialogs.alert("VisualTreeEvents category has not been set")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
}
exports.checkIsDebugVisualTreeEventsSet = checkIsDebugVisualTreeEventsSet;
function enableTracing() {
    if (trace_1.isEnabled() === false) {
        trace_1.enable();
        dialogs.alert("Trace has been enabled")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
    else {
        dialogs.alert("Trace has been already enabled")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
}
exports.enableTracing = enableTracing;
function disableTracing() {
    if (trace_1.isEnabled()) {
        trace_1.disable();
        dialogs.alert("Trace has been disabled")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
    else {
        dialogs.alert("Trace has been already disabled")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
}
exports.disableTracing = disableTracing;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2Utc3BlY2lmaWMtY2F0ZWdvcmllcy10cy1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhY2Utc3BlY2lmaWMtY2F0ZWdvcmllcy10cy1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsZ0RBQW9JO0FBRXBJLGdEQUFvRDtBQUNwRCxxREFBdUQ7QUFDdkQsd0JBQStCLElBQUk7SUFDL0IsZUFBTyxFQUFFLENBQUM7SUFFVixxQkFBYSxDQUFDLGtCQUFVLENBQUMsTUFBTSxDQUMzQixrQkFBVSxDQUFDLE9BQU8sRUFDbEIsa0JBQVUsQ0FBQyxNQUFNLEVBQ2pCLGtCQUFVLENBQUMsS0FBSyxFQUNoQixrQkFBVSxDQUFDLGFBQWEsRUFDeEIsa0JBQVUsQ0FBQyxnQkFBZ0IsQ0FDOUIsQ0FBQyxDQUFDO0lBQ0gsY0FBTSxFQUFFLENBQUM7SUFHVCxxQkFBYSxDQUFDLGtCQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFckMsa0JBQVUsQ0FBQztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQztRQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQztRQUNyRSxPQUFPLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDO2FBQzFELElBQUksQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNQLHFCQUFhLENBQUMsa0JBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM5QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFVCxhQUFLLENBQUMseUJBQXlCLEVBQUUsa0JBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBNUJELHdDQTRCQztBQUVEO0lBQ0ksRUFBRSxDQUFDLENBQUMscUJBQWEsQ0FBQyxrQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDO2FBQ3ZDLElBQUksQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUM7YUFDM0MsSUFBSSxDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztBQUNMLENBQUM7QUFaRCwwREFZQztBQUVEO0lBRUksRUFBRSxDQUFDLENBQUMscUJBQWEsQ0FBQyxrQkFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUM7YUFDbEQsSUFBSSxDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQzthQUN0RCxJQUFJLENBQUM7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0FBRUwsQ0FBQztBQWRELDBFQWNDO0FBRUQ7SUFDSSxFQUFFLENBQUMsQ0FBQyxpQkFBUyxFQUFFLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4QixjQUFNLEVBQUUsQ0FBQztRQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7YUFDbEMsSUFBSSxDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQzthQUMxQyxJQUFJLENBQUM7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0FBQ0wsQ0FBQztBQWJELHNDQWFDO0FBQ0Q7SUFDSSxFQUFFLENBQUMsQ0FBQyxpQkFBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWQsZUFBTyxFQUFFLENBQUM7UUFFVixPQUFPLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO2FBQ25DLElBQUksQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUM7YUFDM0MsSUFBSSxDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztBQUNMLENBQUM7QUFmRCx3Q0FlQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuLy8gPj4gaW1wb3J0LXRyYWNlLW1vZHVsZVxuaW1wb3J0IHsgZW5hYmxlLCBkaXNhYmxlLCBpc0VuYWJsZWQsIGNhdGVnb3JpZXMsIHNldENhdGVnb3JpZXMsIGFkZENhdGVnb3JpZXMsIHdyaXRlLCBpc0NhdGVnb3J5U2V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdHJhY2VcIjtcbi8vIDw8IGltcG9ydC10cmFjZS1tb2R1bGVcbmltcG9ydCB7IHNldFRpbWVvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90aW1lclwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncykge1xuICAgIGRpc2FibGUoKTtcbiAgICAvLyA+PiBzZXR0aW5nLXNwZWNpZmljLXRyYWNpbmctY2F0ZWdvcmllcy10c1xuICAgIHNldENhdGVnb3JpZXMoY2F0ZWdvcmllcy5jb25jYXQoXG4gICAgICAgIGNhdGVnb3JpZXMuQmluZGluZyxcbiAgICAgICAgY2F0ZWdvcmllcy5MYXlvdXQsXG4gICAgICAgIGNhdGVnb3JpZXMuU3R5bGUsXG4gICAgICAgIGNhdGVnb3JpZXMuVmlld0hpZXJhcmNoeSxcbiAgICAgICAgY2F0ZWdvcmllcy5WaXN1YWxUcmVlRXZlbnRzXG4gICAgKSk7XG4gICAgZW5hYmxlKCk7XG4gICAgLy8gPDwgc2V0dGluZy1zcGVjaWZpYy10cmFjaW5nLWNhdGVnb3JpZXMtdHNcbiAgICAvLyA+PiB0cmFjZS1hZGQtY2F0ZWdvcmllcy10c1xuICAgIGFkZENhdGVnb3JpZXMoY2F0ZWdvcmllcy5OYXZpZ2F0aW9uKTtcbiAgICAvLyA8PCB0cmFjZS1hZGQtY2F0ZWdvcmllcy10c1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyB0cmFjZSBjYXRlZ29yeSBoYXMgYmVlbiBhZGRlZFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYXRlZ29yeTogTmF0aXZlTGlmZWN5Y2xlXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiTmF0aXZlTGlmZWN5Y2xlIHRyYWNlIGNhdGVnb3J5IGhhcyBiZWVuIGFkZGVkLlwiKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgYWRkQ2F0ZWdvcmllcyhjYXRlZ29yaWVzLk5hdGl2ZUxpZmVjeWNsZSk7XG4gICAgfSwgMjAwMCk7XG5cbiAgICB3cml0ZShcIkkgKGhlYXJ0KSBOYXRpdmVTY3JpcHQhXCIsIGNhdGVnb3JpZXMuRGVidWcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc0RlYnVnQ2F0ZWdvcnlTZXQoKSB7XG4gICAgaWYgKGlzQ2F0ZWdvcnlTZXQoY2F0ZWdvcmllcy5EZWJ1ZykpIHtcbiAgICAgICAgZGlhbG9ncy5hbGVydChcIkRlYnVnIGNhdGVnb3J5IGhhcyBiZWVuIHNldFwiKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiRGVidWcgY2F0ZWdvcnkgaGFzIG5vdCBiZWVuIHNldFwiKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lzRGVidWdWaXN1YWxUcmVlRXZlbnRzU2V0KCkge1xuICAgIC8vID4+IGNoZWNrLWlzY2F0ZWdvcnlzZXQtdHNcbiAgICBpZiAoaXNDYXRlZ29yeVNldChjYXRlZ29yaWVzLlZpc3VhbFRyZWVFdmVudHMpKSB7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJWaXN1YWxUcmVlRXZlbnRzIGNhdGVnb3J5IGhhcyBiZWVuIHNldFwiKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiVmlzdWFsVHJlZUV2ZW50cyBjYXRlZ29yeSBoYXMgbm90IGJlZW4gc2V0XCIpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyA8PCBjaGVjay1pc2NhdGVnb3J5c2V0LXRzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVUcmFjaW5nKCkge1xuICAgIGlmIChpc0VuYWJsZWQoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZW5hYmxlKCk7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJUcmFjZSBoYXMgYmVlbiBlbmFibGVkXCIpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJUcmFjZSBoYXMgYmVlbiBhbHJlYWR5IGVuYWJsZWRcIilcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVUcmFjaW5nKCkge1xuICAgIGlmIChpc0VuYWJsZWQoKSkge1xuICAgICAgICAvLyA+PiBkaXNhYmxlLXRyYWNpbmctdHNcbiAgICAgICAgZGlzYWJsZSgpO1xuICAgICAgICAvLyA8PCBkaXNhYmxlLXRyYWNpbmctdHNcbiAgICAgICAgZGlhbG9ncy5hbGVydChcIlRyYWNlIGhhcyBiZWVuIGRpc2FibGVkXCIpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJUcmFjZSBoYXMgYmVlbiBhbHJlYWR5IGRpc2FibGVkXCIpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuIl19