"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var application_settings_1 = require("application-settings");
var fps_meter_1 = require("tns-core-modules/fps-meter");
var callbackId;
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("fps", "0");
    vm.set("minfps", "0");
    vm.set("fpslabeltitle", "Start FPS Meter");
    application_settings_1.setBoolean("status", false);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function toogleMeter(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var status = application_settings_1.getBoolean("status");
    if (status) {
        fps_meter_1.removeCallback(callbackId);
        fps_meter_1.stop();
        vm.set("fpslabeltitle", "Start FPS Meter");
    }
    else {
        callbackId = fps_meter_1.addCallback(function (fps, minFps) {
            vm.set("fps", fps.toFixed(2));
            vm.set("minfps", minFps.toFixed(2));
        });
        fps_meter_1.start();
        vm.set("fpslabeltitle", "Stop FPS Meter");
    }
    application_settings_1.setBoolean("status", !status);
}
exports.toogleMeter = toogleMeter;
