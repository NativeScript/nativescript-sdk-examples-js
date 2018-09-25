import { Observable } from "tns-core-modules/data/observable";
import { setBoolean, getBoolean } from "application-settings";
import { Page } from "tns-core-modules/ui/page";
// >> import-fps-meter
import { removeCallback, start, stop, addCallback } from "tns-core-modules/fps-meter";
// << import-fps-meter

let callbackId;
export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();
    vm.set("fps", "0");
    vm.set("minfps", "0");
    vm.set("fpslabeltitle", "Start FPS Meter");
    setBoolean("status", false);
    page.bindingContext = vm;
}


export function toogleMeter(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    const status: boolean = getBoolean("status");
    if (status) {
        // >> stop-fps-meter-ts
        removeCallback(callbackId);
        stop();
        // << stop-fps-meter-ts
        vm.set("fpslabeltitle", "Start FPS Meter");
    } else {
        // >> start-fps-meter-ts
        callbackId = addCallback((fps, minFps) => {
            vm.set("fps", fps.toFixed(2));
            vm.set("minfps", minFps.toFixed(2));
        });

        start();
        // << start-fps-meter-ts
        vm.set("fpslabeltitle", "Stop FPS Meter");
    }
    setBoolean("status", !status);
}
