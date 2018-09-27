"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("tns-core-modules/application");
var platformModule = require("tns-core-modules/platform");
var applicationSettingsModule = require("tns-core-modules/application-settings");
var deepLinkDataModule = require("./shared/deep-link-data");
if (platformModule.isIOS) {
    var mydelegate = require("./delegate/my-delegate");
    application.ios.delegate = mydelegate.MyDelegate;
}
function launchExample() {
    var rootView = application.getRootView();
    if (applicationSettingsModule.hasKey("gotoexample")) {
        var value = applicationSettingsModule.getString("gotoexample");
        if (value !== "") {
            applicationSettingsModule.remove("gotoexample");
            rootView.navigate({
                moduleName: value,
                clearHistory: true
            });
        }
    }
}
application.on(application.resumeEvent, function (args) {
    if (args.android) {
        var dld = new deepLinkDataModule.DeepLinkData("", args.android);
        launchExample();
    }
    else if (args.ios) {
        launchExample();
    }
});
application.run({ moduleName: "app-root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsMERBQTREO0FBQzVELDBEQUE0RDtBQUM1RCxpRkFBa0Y7QUFFbEYsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUM5RCxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2QixJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNyRCxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDO0FBQ3JELENBQUM7QUFFRDtJQUNJLElBQU0sUUFBUSxHQUFrQixXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUQsRUFBRSxDQUFDLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFNLEtBQUssR0FBRyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakUsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDZix5QkFBeUIsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDaEQsUUFBUSxDQUFDLFFBQVEsQ0FBQztnQkFDZCxVQUFVLEVBQUUsS0FBSztnQkFDakIsWUFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDO0FBQ0QsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFVBQUMsSUFBSTtJQUN6QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQU0sR0FBRyxHQUFHLElBQUksa0JBQWtCLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEUsYUFBYSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQixhQUFhLEVBQUUsQ0FBQztJQUNwQixDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDSCxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmpzIGZpbGUgaXMgdGhlIGVudHJ5IHBvaW50IHRvIHlvdXIgYXBwbGljYXRpb24uXG5Zb3UgY2FuIHVzZSB0aGlzIGZpbGUgdG8gcGVyZm9ybSBhcHAtbGV2ZWwgaW5pdGlhbGl6YXRpb24sIGJ1dCB0aGUgcHJpbWFyeVxucHVycG9zZSBvZiB0aGUgZmlsZSBpcyB0byBwYXNzIGNvbnRyb2wgdG8gdGhlIGFwcOKAmXMgZmlyc3QgbW9kdWxlLlxuKi9cbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb25TZXR0aW5nc01vZHVsZSBmcm9tXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQge0ZyYW1lfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xuY29uc3QgZGVlcExpbmtEYXRhTW9kdWxlID0gcmVxdWlyZShcIi4vc2hhcmVkL2RlZXAtbGluay1kYXRhXCIpO1xuaWYgKHBsYXRmb3JtTW9kdWxlLmlzSU9TKSB7XG4gICAgY29uc3QgbXlkZWxlZ2F0ZSA9IHJlcXVpcmUoXCIuL2RlbGVnYXRlL215LWRlbGVnYXRlXCIpO1xuICAgIGFwcGxpY2F0aW9uLmlvcy5kZWxlZ2F0ZSA9IG15ZGVsZWdhdGUuTXlEZWxlZ2F0ZTtcbn1cblxuZnVuY3Rpb24gbGF1bmNoRXhhbXBsZSgpIHtcbiAgICBjb25zdCByb290VmlldzogRnJhbWUgPSA8RnJhbWU+IGFwcGxpY2F0aW9uLmdldFJvb3RWaWV3KCk7XG4gICAgaWYgKGFwcGxpY2F0aW9uU2V0dGluZ3NNb2R1bGUuaGFzS2V5KFwiZ290b2V4YW1wbGVcIikpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhcHBsaWNhdGlvblNldHRpbmdzTW9kdWxlLmdldFN0cmluZyhcImdvdG9leGFtcGxlXCIpO1xuICAgICAgICBpZiAodmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3NNb2R1bGUucmVtb3ZlKFwiZ290b2V4YW1wbGVcIik7XG4gICAgICAgICAgICByb290Vmlldy5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmFwcGxpY2F0aW9uLm9uKGFwcGxpY2F0aW9uLnJlc3VtZUV2ZW50LCAoYXJncykgPT4ge1xuICAgIGlmIChhcmdzLmFuZHJvaWQpIHtcbiAgICAgICAgY29uc3QgZGxkID0gbmV3IGRlZXBMaW5rRGF0YU1vZHVsZS5EZWVwTGlua0RhdGEoXCJcIiwgYXJncy5hbmRyb2lkKTtcbiAgICAgICAgbGF1bmNoRXhhbXBsZSgpO1xuICAgIH0gZWxzZSBpZiAoYXJncy5pb3MpIHtcbiAgICAgICAgbGF1bmNoRXhhbXBsZSgpO1xuICAgIH1cbn0pO1xuYXBwbGljYXRpb24ucnVuKHsgbW9kdWxlTmFtZTogXCJhcHAtcm9vdFwiIH0pO1xuXG4vKlxuRG8gbm90IHBsYWNlIGFueSBjb2RlIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkIGFzIGl0IHdpbGwgbm90XG5iZSBleGVjdXRlZCBvbiBpT1MuXG4qL1xuIl19