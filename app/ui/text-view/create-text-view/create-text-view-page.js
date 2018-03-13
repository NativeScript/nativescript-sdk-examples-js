// >> time-picker-configure-code
var Observable = require("tns-core-modules/data/observable").Observable;
let textViewModule = require("tns-core-modules/ui/text-view")
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new Observable();
    vm.set("onTap", (btargs)=>{
        var button = btargs.object;
        var thirdTextview = btargs.object.page.getViewById("thirdTextViewId");
        console.log("---------------------thirdTextview------------------------");
        console.log(thirdTextview.editable);
        console.log("---------------------thirdTextview------------------------");
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
    let stackLayout = page.getViewById("stackLayoutId");

    let firstTextview = new textViewModule.TextView();
    firstTextview.hint = "Enter text";

    let secondTextview = new textViewModule.TextView();
    secondTextview.text = "Sample TextView text";

    let thirdTextview = new textViewModule.TextView();
    thirdTextview.id="thirdTextViewId"
    thirdTextview.text = "Third TextView";

    stackLayout.addChild(firstTextview);
    stackLayout.addChild(secondTextview);
    stackLayout.addChild(thirdTextview);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onPageLoaded = onPageLoaded;
// << time-picker-configure-code