"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connectivity_1 = require("tns-core-modules/connectivity");
function onNavigatedTo(args) {
    var page = args.object;
    var connectionTypeString;
    var myConnectionType = connectivity_1.getConnectionType();
    switch (myConnectionType) {
        case connectivity_1.connectionType.none:
            console.log("No connection");
            connectionTypeString = "No Internet connectivity!";
            break;
        case connectivity_1.connectionType.wifi:
            console.log("WiFi connection");
            connectionTypeString = "WiFI connectivity!";
            break;
        case connectivity_1.connectionType.mobile:
            console.log("Mobile connection");
            connectionTypeString = "Mobile connectivity!";
            break;
        case connectivity_1.connectionType.ethernet:
            console.log("Ethernet connection");
            connectionTypeString = "Ethernet connectivity!";
            break;
        default:
            break;
    }
    connectivity_1.startMonitoring(function (newConnectionType) {
        switch (newConnectionType) {
            case connectivity_1.connectionType.none:
                console.log("Connection type changed to none.");
                break;
            case connectivity_1.connectionType.wifi:
                console.log("Connection type changed to WiFi.");
                break;
            case connectivity_1.connectionType.mobile:
                console.log("Connection type changed to mobile.");
                break;
            case connectivity_1.connectionType.ethernet:
                console.log("Connection type changed to ethernet.");
                break;
            default:
                break;
        }
    });
    connectivity_1.stopMonitoring();
    page.bindingContext = { connectionType: connectionTypeString };
}
exports.onNavigatedTo = onNavigatedTo;
