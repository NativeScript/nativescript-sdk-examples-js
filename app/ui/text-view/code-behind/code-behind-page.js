const observableModule = require("tns-core-modules/data/observable");
// >> text-view-require
const textViewModule = require("tns-core-modules/ui/text-view");
// << text-view-require
// >> creating-text-view-code
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    // changing TextView editable property value on button tap
    vm.set("onTap", (btargs) => {
        const button = btargs.object;
        const thirdTextview = btargs.object.page.getViewById("thirdTextViewId");
        thirdTextview.editable = !thirdTextview.editable;
        if (thirdTextview.editable) {
            button.text = "Disable third TextView";
        } else {
            button.text = "Enable third TextView";
        }
    });
    page.bindingContext = vm;
}

function onPageLoaded(args) {
    const page = args.object;
    const vm = page.bindingContext;
    const stackLayout = page.getViewById("stackLayoutId");
    // creating new TextView and changing the hint
    const firstTextview = new textViewModule.TextView();
    firstTextview.hint = "Enter text";
    // creating new TextView and binding the text property
    const secondTextview = new textViewModule.TextView();
    const options = {
        sourceProperty: "text",
        targetProperty: "secondTextProperty"
    };
    secondTextview.bind(options, vm);
    vm.set("secondTextProperty", "Sample TextView text");
    // creating new TextView and changing the text
    const thirdTextview = new textViewModule.TextView();
    thirdTextview.id = "thirdTextViewId";
    thirdTextview.text = "Third TextView";
    // adding the newly created TextViews in a StackLayout
    stackLayout.addChild(firstTextview);
    stackLayout.addChild(secondTextview);
    stackLayout.addChild(thirdTextview);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onPageLoaded = onPageLoaded;
// << creating-text-view-code
