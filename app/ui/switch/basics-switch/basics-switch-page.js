let observableModule = require("tns-core-modules/data/observable");
// >> textfield-require
let switchModule = require("tns-core-modules/ui/switch");
// << textfield-require

// setting up the format for the TextField text
function onNavigatingTo(args) {
    let page = args.object;

    const vm = new observableModule.Observable();
    vm.set("firstSwitchState", "OFF");
    vm.set("secondSwitchState", "ON");
    vm.set("firstSwitch", false);
    vm.set("secondSwitch", true);
    
    vm.on(observableModule.Observable.propertyChangeEvent, function(propertyChangeData){
        if(propertyChangeData.propertyName == 'firstSwitch'){
            if (propertyChangeData.value) {
                vm.set("firstSwitchState", "ON");
            } else {
                vm.set("firstSwitchState", "OFF");
            }
        }
    });
    page.bindingContext = vm;
}

function switchLoaded(args){
    let switchComponent = args.object;
    switchComponent.on("checkedChange", (sargs)=>{
        console.log("checkedChange "+sargs.object.checked);
        let page = sargs.object.page;
        let vm = page.bindingContext;
        if (sargs.object.checked) {
            vm.set("secondSwitchState", "ON");
        } else {
            vm.set("secondSwitchState", "OFF");
        }
    })
}

exports.switchLoaded = switchLoaded;
exports.onNavigatingTo = onNavigatingTo;

// << textfield-handle-submit-event