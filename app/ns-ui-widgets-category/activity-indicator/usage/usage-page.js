// >> activity-indicator-setting-busy-code
const Observable = require("tns-core-modules/data/observable").Observable;

function onNavigatingTo(args) {
    const page = args.object;
    
    const vm = new Observable();
    vm.set("isBusy", true);
    page.bindingContext = vm;   
}
exports.onNavigatingTo = onNavigatingTo;


function indicatorLoaded(args){
    let activityIndicator = args.object;
    activityIndicator.on("busyChange", (aiargs)=>{
        let indicator = aiargs.object;
        console.log("indicator.busy changed to: " + indicator.busy);
    })
}
exports.indicatorLoaded = indicatorLoaded;
// << activity-indicator-setting-busy-code
