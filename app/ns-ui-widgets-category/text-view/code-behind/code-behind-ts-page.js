"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var text_view_1 = require("tns-core-modules/ui/text-view");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("onTap", function (btargs) {
        var button = btargs.object;
        var thirdTextview = button.page.getViewById("thirdTextViewId");
        thirdTextview.editable = !thirdTextview.editable;
        if (thirdTextview.editable) {
            button.text = "Disable third TextView";
        }
        else {
            button.text = "Enable third TextView";
        }
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onPageLoaded(args) {
    var page = args.object;
    var vm = page.bindingContext;
    var stackLayout = page.getViewById("stackLayoutId");
    var firstTextview = new text_view_1.TextView();
    firstTextview.hint = "Enter text";
    var secondTextview = new text_view_1.TextView();
    var options = {
        sourceProperty: "text",
        targetProperty: "secondTextProperty"
    };
    secondTextview.bind(options, vm);
    vm.set("secondTextProperty", "Sample TextView text");
    var thirdTextview = new text_view_1.TextView();
    thirdTextview.id = "thirdTextViewId";
    thirdTextview.text = "Third TextView";
    stackLayout.addChild(firstTextview);
    stackLayout.addChild(secondTextview);
    stackLayout.addChild(thirdTextview);
}
exports.onPageLoaded = onPageLoaded;
