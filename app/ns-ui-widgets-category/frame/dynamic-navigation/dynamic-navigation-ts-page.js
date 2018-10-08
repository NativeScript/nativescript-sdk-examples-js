"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("tns-core-modules/ui/page");
var stack_layout_1 = require("tns-core-modules/ui/layouts/stack-layout");
var label_1 = require("tns-core-modules/ui/label");
var frame_1 = require("tns-core-modules/ui/frame");
function onLoaded() {
    var frame = frame_1.getFrameById("my-frame-id");
    frame.navigate({
        create: function () {
            var stack = new stack_layout_1.StackLayout();
            var label = new label_1.Label();
            label.text = "Hello, world!";
            stack.addChild(label);
            var page = new page_1.Page();
            page.content = stack;
            return page;
        }
    });
}
exports.onLoaded = onLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1uYXZpZ2F0aW9uLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkeW5hbWljLW5hdmlnYXRpb24tdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFnRDtBQUNoRCx5RUFBdUU7QUFDdkUsbURBQWtEO0FBQ2xELG1EQUF5RDtBQUV6RDtJQUVJLElBQU0sS0FBSyxHQUFHLG9CQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFMUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNYLE1BQU0sRUFBRTtZQUNKLElBQU0sS0FBSyxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1lBQ2hDLElBQU0sS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7WUFDMUIsS0FBSyxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7WUFDN0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV0QixJQUFNLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBRXJCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztLQUNKLENBQUMsQ0FBQztBQUVQLENBQUM7QUFsQkQsNEJBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIjtcbmltcG9ydCB7IGdldEZyYW1lQnlJZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWRlZCgpIHtcbiAgICAvLyA+PiBmcmFtZS1uYXYtZHluYW1pYy1wYWdlLXRzLWNvZGVcbiAgICBjb25zdCBmcmFtZSA9IGdldEZyYW1lQnlJZChcIm15LWZyYW1lLWlkXCIpO1xuXG4gICAgZnJhbWUubmF2aWdhdGUoe1xuICAgICAgICBjcmVhdGU6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrID0gbmV3IFN0YWNrTGF5b3V0KCk7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IG5ldyBMYWJlbCgpO1xuICAgICAgICAgICAgbGFiZWwudGV4dCA9IFwiSGVsbG8sIHdvcmxkIVwiO1xuICAgICAgICAgICAgc3RhY2suYWRkQ2hpbGQobGFiZWwpO1xuXG4gICAgICAgICAgICBjb25zdCBwYWdlID0gbmV3IFBhZ2UoKTtcbiAgICAgICAgICAgIHBhZ2UuY29udGVudCA9IHN0YWNrO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFnZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIDw8IGZyYW1lLW5hdi1keW5hbWljLXBhZ2UtdHMtY29kZVxufVxuIl19