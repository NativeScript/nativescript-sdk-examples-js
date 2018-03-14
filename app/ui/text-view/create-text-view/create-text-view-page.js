var observableModule = require("tns-core-modules/data/observable");
let textViewModule = require("tns-core-modules/ui/text-view")
// >> creating-text-view-code
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observableModule.Observable();
    vm.set("onTap", (btargs)=>{
        var button = btargs.object;
        var thirdTextview = btargs.object.page.getViewById("thirdTextViewId");
        thirdTextview.editable = !thirdTextview.editable;
        if(thirdTextview.editable){
            button.text="Disable third TextView";
        }
        else{
            button.text="Enable third TextView";
        }
    });
    page.bindingContext = vm;
}

function onPageLoaded (args) {
    let page = args.object;
    let vm = page.bindingContext;
    let stackLayout = page.getViewById("stackLayoutId");

    let firstTextview = new textViewModule.TextView();
    firstTextview.hint = "Enter text";

    let secondTextview = new textViewModule.TextView();
    let options = {
        sourceProperty: "text",
        targetProperty: "secondTextProperty"
    }
    secondTextview.bind(options, vm);
    vm.set("secondTextProperty", "Sample TextView text");

    let thirdTextview = new textViewModule.TextView();
    thirdTextview.id="thirdTextViewId"
    thirdTextview.text = "Third TextView";

    stackLayout.addChild(firstTextview);
    stackLayout.addChild(secondTextview);
    stackLayout.addChild(thirdTextview);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onPageLoaded = onPageLoaded;
// << creating-text-view-code