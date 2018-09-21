"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var value = false;
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("abHidden", value);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
<<<<<<< HEAD:app/ns-ui-widgets-category/action-bar/hide-show-actionbar/hide-show-actionbar-ts-page.js
function onTap(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    value = !value;
    vm.set("abHidden", value);
}
exports.onTap = onTap;
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNpY3MtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUE0RDtBQUMzRCx3QkFBK0IsSUFBSTtJQUNoQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3pCLElBQU0sRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBQzVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGlEQUFpRCxDQUFDLENBQUM7SUFDbkUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsOERBQThELENBQUMsQ0FBQztJQUNsRixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBTkEsd0NBTUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuIGV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZtID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICB2bS5zZXQoXCJ0aXRsZVwiLCBcIkdldHRpbmcgU3RhcnRlZCBUeXBlU2NyaXB0IFxcbkFjdGlvbiBCYXIgRXhhbXBsZVwiKTtcbiAgICB2bS5zZXQoXCJzbmlwcGV0XCIsIFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiR2V0dGluZ3MgU3RhcnRlZFxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiLz5cIik7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xufVxuIl19
>>>>>>> 31ceff7cdfbd228c5b4a2c98b23c3478e4b238ed:app/ns-ui-widgets-category/action-bar/basics/basics-ts-page.js
