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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2Utc3BlY2lmaWMtY2F0ZWdvcmllcy10cy1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhY2Utc3BlY2lmaWMtY2F0ZWdvcmllcy10cy1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsZ0RBQWtJO0FBRWxJLGdEQUFrRDtBQUNsRCxxREFBdUQ7QUFDdkQsd0JBQStCLElBQUk7SUFDL0IsZUFBTyxFQUFFLENBQUM7SUFFTixxQkFBYSxDQUFDLGtCQUFVLENBQUMsTUFBTSxDQUMzQixrQkFBVSxDQUFDLE9BQU8sRUFDbEIsa0JBQVUsQ0FBQyxNQUFNLEVBQ2pCLGtCQUFVLENBQUMsS0FBSyxFQUNoQixrQkFBVSxDQUFDLGFBQWEsRUFDeEIsa0JBQVUsQ0FBQyxnQkFBZ0IsQ0FDOUIsQ0FBQyxDQUFDO0lBQ0gsY0FBTSxFQUFFLENBQUM7SUFHVCxxQkFBYSxDQUFDLGtCQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFckMsa0JBQVUsQ0FBQztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQztRQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQztRQUNyRSxPQUFPLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDO2FBQzlELElBQUksQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNILHFCQUFhLENBQUMsa0JBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM5QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFVCxhQUFLLENBQUMseUJBQXlCLEVBQUUsa0JBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzRCxDQUFDO0FBNUJELHdDQTRCQztBQUVEO0lBQ0ksRUFBRSxDQUFDLENBQUMscUJBQWEsQ0FBQyxrQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDO2FBQzNDLElBQUksQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUM7YUFDL0MsSUFBSSxDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztBQUNMLENBQUM7QUFaRCwwREFZQztBQUVEO0lBRUksRUFBRSxDQUFDLENBQUMscUJBQWEsQ0FBQyxrQkFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUM7YUFDdEQsSUFBSSxDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQzthQUMxRCxJQUFJLENBQUM7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0FBRUwsQ0FBQztBQWRELDBFQWNDO0FBRUQ7SUFDSSxFQUFFLENBQUMsQ0FBQyxpQkFBUyxFQUFFLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4QixjQUFNLEVBQUUsQ0FBQztRQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7YUFDdEMsSUFBSSxDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5QyxJQUFJLENBQUM7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0FBQ0wsQ0FBQztBQWJELHNDQWFDO0FBQ0Q7SUFDSSxFQUFFLENBQUMsQ0FBQyxpQkFBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWQsZUFBTyxFQUFFLENBQUM7UUFFVixPQUFPLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDLElBQUksQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUM7YUFDL0MsSUFBSSxDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztBQUNMLENBQUM7QUFmRCx3Q0FlQyIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+IGltcG9ydC10cmFjZS1tb2R1bGVcclxuaW1wb3J0IHtlbmFibGUsIGRpc2FibGUsIGlzRW5hYmxlZCwgY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllcywgYWRkQ2F0ZWdvcmllcywgd3JpdGUsIGlzQ2F0ZWdvcnlTZXR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RyYWNlXCI7XHJcbi8vIDw8IGltcG9ydC10cmFjZS1tb2R1bGVcclxuaW1wb3J0IHtzZXRUaW1lb3V0fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90aW1lclwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcclxuICAgIGRpc2FibGUoKTtcclxuICAgICAgICAvLyA+PiBzZXR0aW5nLXNwZWNpZmljLXRyYWNpbmctY2F0ZWdvcmllcy10c1xyXG4gICAgICAgIHNldENhdGVnb3JpZXMoY2F0ZWdvcmllcy5jb25jYXQoXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMuQmluZGluZyxcclxuICAgICAgICAgICAgY2F0ZWdvcmllcy5MYXlvdXQsXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMuU3R5bGUsXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMuVmlld0hpZXJhcmNoeSxcclxuICAgICAgICAgICAgY2F0ZWdvcmllcy5WaXN1YWxUcmVlRXZlbnRzXHJcbiAgICAgICAgKSk7XHJcbiAgICAgICAgZW5hYmxlKCk7XHJcbiAgICAgICAgLy8gPDwgc2V0dGluZy1zcGVjaWZpYy10cmFjaW5nLWNhdGVnb3JpZXMtdHNcclxuICAgICAgICAvLyA+PiB0cmFjZS1hZGQtY2F0ZWdvcmllcy10c1xyXG4gICAgICAgIGFkZENhdGVnb3JpZXMoY2F0ZWdvcmllcy5OYXZpZ2F0aW9uKTtcclxuICAgICAgICAvLyA8PCB0cmFjZS1hZGQtY2F0ZWdvcmllcy10c1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyB0cmFjZSBjYXRlZ29yeSBoYXMgYmVlbiBhZGRlZFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYXRlZ29yeTogTmF0aXZlTGlmZWN5Y2xlXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiTmF0aXZlTGlmZWN5Y2xlIHRyYWNlIGNhdGVnb3J5IGhhcyBiZWVuIGFkZGVkLlwiKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWRkQ2F0ZWdvcmllcyhjYXRlZ29yaWVzLk5hdGl2ZUxpZmVjeWNsZSk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgIHdyaXRlKFwiSSAoaGVhcnQpIE5hdGl2ZVNjcmlwdCFcIiwgY2F0ZWdvcmllcy5EZWJ1Zyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lzRGVidWdDYXRlZ29yeVNldCgpIHtcclxuICAgIGlmIChpc0NhdGVnb3J5U2V0KGNhdGVnb3JpZXMuRGVidWcpKSB7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydChcIkRlYnVnIGNhdGVnb3J5IGhhcyBiZWVuIHNldFwiKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydChcIkRlYnVnIGNhdGVnb3J5IGhhcyBub3QgYmVlbiBzZXRcIilcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lzRGVidWdWaXN1YWxUcmVlRXZlbnRzU2V0KCkge1xyXG4gICAgLy8gPj4gY2hlY2staXNjYXRlZ29yeXNldC10c1xyXG4gICAgaWYgKGlzQ2F0ZWdvcnlTZXQoY2F0ZWdvcmllcy5WaXN1YWxUcmVlRXZlbnRzKSkge1xyXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJWaXN1YWxUcmVlRXZlbnRzIGNhdGVnb3J5IGhhcyBiZWVuIHNldFwiKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydChcIlZpc3VhbFRyZWVFdmVudHMgY2F0ZWdvcnkgaGFzIG5vdCBiZWVuIHNldFwiKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIDw8IGNoZWNrLWlzY2F0ZWdvcnlzZXQtdHNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVRyYWNpbmcoKSB7XHJcbiAgICBpZiAoaXNFbmFibGVkKCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgZW5hYmxlKCk7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydChcIlRyYWNlIGhhcyBiZWVuIGVuYWJsZWRcIilcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJUcmFjZSBoYXMgYmVlbiBhbHJlYWR5IGVuYWJsZWRcIilcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVUcmFjaW5nKCkge1xyXG4gICAgaWYgKGlzRW5hYmxlZCgpKSB7XHJcbiAgICAgICAgLy8gPj4gZGlzYWJsZS10cmFjaW5nLXRzXHJcbiAgICAgICAgZGlzYWJsZSgpO1xyXG4gICAgICAgIC8vIDw8IGRpc2FibGUtdHJhY2luZy10c1xyXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJUcmFjZSBoYXMgYmVlbiBkaXNhYmxlZFwiKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydChcIlRyYWNlIGhhcyBiZWVuIGFscmVhZHkgZGlzYWJsZWRcIilcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==