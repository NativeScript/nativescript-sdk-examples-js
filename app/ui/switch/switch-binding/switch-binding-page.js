let observableModule = require("tns-core-modules/data/observable");
let platformModule = require("tns-core-modules/platform");
// >> text-field-binding-code
function onNavigatingTo(args) {
    let page = args.object;
    let vm = new observableModule.Observable();
    vm.set("tfHint", 'Enter text');
    vm.set("tfText", '');
    vm.set("tfResult", '');
    vm.set("secureState", false);
    vm.set("buttonText", "Enable TextField's secure");
    // handling TextField text change 
    vm.on(observableModule.Observable.propertyChangeEvent, function(propertyChangeData){
        if(propertyChangeData.propertyName == 'tfText'){
            vm.set("tfResult", propertyChangeData.value);
        }
      });
    page.bindingContext = vm;
}
// changing TextField secure property value on button tap
function textFieldSecureStateChange(args){
    let page = args.object.page;
    let vm = page.bindingContext;

    let secureState = vm.get("secureState");
    vm.set("secureState", !secureState);
    if(secureState){
        vm.set("buttonText", "Enable TextField's secure");
    }
    else{
        vm.set("buttonText", "Disable TextField's secure");
    }
}
// displaying the TextField text in an Alert dialog
function showText(args) {
    let page = args.object.page;
    let vm = page.bindingContext;

    alert("Text: " + vm.get("tfText"));
}

exports.onNavigatingTo = onNavigatingTo;
exports.textFieldSecureStateChange = textFieldSecureStateChange;
exports.showText = showText;
// << text-field-binding-code