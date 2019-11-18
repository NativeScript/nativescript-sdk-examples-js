// >> fps-meter-js
const fpsMeter = require("tns-core-modules/fps-meter");


let callbackId;
function startFPSMeter(args) {
    callbackId = fpsMeter.addCallback((fps, minFps) => {
        console.log(`Frames per seconds: ${fps.toFixed(2)}`);
        console.log(minFps.toFixed(2));
    });
    fpsMeter.start();
}

function stopFPSMeter(args) {
    fpsMeter.removeCallback(callbackId);
    fpsMeter.stop();
}
exports.startFPSMeter = startFPSMeter;
exports.stopFPSMeter = stopFPSMeter;
// << fps-meter-js
