var observableModule = require("tns-core-modules/data/observable");
let textViewModule = require("tns-core-modules/ui/text-view")
// >> creating-text-view-code
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observableModule.Observable();
    // changing TextView editable property value on button tap
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
    // creating new TextView and changing the hint
    let firstTextview = new textViewModule.TextView();
    firstTextview.hint = "Enter text";
    // creating new TextView and binding the text property
    let secondTextview = new textViewModule.TextView();
    let options = {
        sourceProperty: "text",
        targetProperty: "secondTextProperty"
    }
    secondTextview.bind(options, vm);
    vm.set("secondTextProperty", "Sample TextView text");
    // creating new TextView and changing the text
    let thirdTextview = new textViewModule.TextView();
    thirdTextview.id="thirdTextViewId"
    thirdTextview.text = "Third TextView";
    // adding the newly created TextViews in a StackLayout
    stackLayout.addChild(firstTextview);
    stackLayout.addChild(secondTextview);
    stackLayout.addChild(thirdTextview);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onPageLoaded = onPageLoaded;
// << creating-text-view-code