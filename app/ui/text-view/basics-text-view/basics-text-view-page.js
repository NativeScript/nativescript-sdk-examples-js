// >> text-view-require
let textViewModule = require("tns-core-modules/ui/text-view")
// << text-view-require
let observableModule = require("tns-core-modules/data/observable");
let platformModule = require("tns-core-modules/platform")
// >> text-view-binding-code
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observableModule.Observable();
    vm.set("tvHint", 'Enter text');
    vm.set("tvText", '');
    vm.set("tvResult", '');
    vm.set("editState", true);
    vm.set("buttonText", 'Disable TextView');

    vm.on(observableModule.Observable.propertyChangeEvent, function(propertyChangeData){
        if(propertyChangeData.propertyName == 'tvText'){
            vm.set("tvResult", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}

function textViewEditStateChange(args){
    let page = args.object.page;
    let vm = page.bindingContext;

    let editState = vm.get("editState");
    vm.set("editState", !editState);
    if(editState){
        vm.set("buttonText", 'Enable TextView');
    }
    else{
        vm.set("buttonText", 'Disable TextView');
    }
}
function showText(args) {
    let page = args.object.page;
    let vm = page.bindingContext;

    alert("Text: " + vm.get("tvText"));
}

exports.onNavigatingTo = onNavigatingTo;
exports.textViewEditStateChange = textViewEditStateChange;
exports.showText = showText;
// << text-view-binding-code