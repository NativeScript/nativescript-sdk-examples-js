// >> fps-meter-ts
import {addCallback, removeCallback, start, stop} from "@nativescript/core/fps-meter";

let callbackId;
export function startFPSMeter(args) {
    callbackId = addCallback((fps: number, minFps: number) => {
        console.log(`Frames per seconds: ${fps.toFixed(2)}`);
        console.log(minFps.toFixed(2));
    });
    start();
}

export function stopFPSMeter(args) {
    removeCallback(callbackId);
    stop();
}
// << fps-meter-ts
