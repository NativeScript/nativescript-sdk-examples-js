// >> fps-meter-js
import { FPSCallback } from "@nativescript/core/fps-meter/fps-native";

let callbackId;
export function startFPSMeter(args) {
    callbackId = FPSCallback.addCallback((fps, minFps) => {
        console.log(`Frames per seconds: ${fps.toFixed(2)}`);
        console.log(minFps.toFixed(2));
    });
    FPSCallback.start();
}

export function stopFPSMeter(args) {
    FPSCallback.removeCallback(callbackId);
    FPSCallback.stop();
}
// << fps-meter-js
