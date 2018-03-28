const Observable = require("tns-core-modules/data/observable").Observable;
const appSettings = require("application-settings");
// >> require-image-source
const imageSourceModule = require("tns-core-modules/image-source");
// << require-image-source
// >> require-file-system
var fileSystemModule = require("tns-core-modules/file-system");
// << require-file-system
let callbackId;
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("fps", "0");
    vm.set("minfps", "0");
    vm.set("fpslabeltitle", "Start FPS Meter");
    appSettings.setBoolean("status", false);
    page.bindingContext = vm;
}


function toogleMeter(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    var status = appSettings.getBoolean("status");
    if (status) {
        // >> stop-fps-meter
        fpsMeter.removeCallback(callbackId);
        fpsMeter.stop();
        // << stop-fps-meter
        vm.set("fpslabeltitle", "Start FPS Meter");
    } else {
        // >> start-fps-meter
        callbackId = fpsMeter.addCallback((fps, minFps) => {
                vm.set("fps", fps.toFixed(2));
                vm.set("minfps", minFps.toFixed(2));
        });

        fpsMeter.start();
        // << start-fps-meter
        vm.set("fpslabeltitle", "Stop FPS Meter");
    }
    appSettings.setBoolean("status", !status);
}
exports.onNavigatingTo = onNavigatingTo;
exports.toogleMeter = toogleMeter;
