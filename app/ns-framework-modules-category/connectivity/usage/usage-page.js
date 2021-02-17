// >> connectivity-start-code-js
import { Connectivity } from "@nativescript/core";


export function onNavigatedTo(args) {
    const page = args.object;
    let connectionTypeString;

    const type = Connectivity.getConnectionType();

    switch (type) {
        case C.connectionType.none:
            console.log("No connection");
            connectionTypeString = "No Internet connectivity!";
            break;
        case Connectivity.connectionType.wifi:
            console.log("WiFi connection");
            connectionTypeString = "WiFI connectivity!";
            break;
        case Connectivity.connectionType.mobile:
            console.log("Mobile connection");
            connectionTypeString = "Mobile connectivity!";
            break;
        case Connectivity.connectionType.ethernet:
            console.log("Ethernet connection");
            connectionTypeString = "Ethernet connectivity!";
            break;
        case Connectivity.connectionType.bluetooth:
            console.log("Bluetooth connection");
            connectionTypeString = "Bluetooth connectivity!";
            break;
        default:
            break;
    }

    Connectivity.startMonitoring((newConnectionType) => {
        switch (newConnectionType) {
            case Connectivity.connectionType.none:
                console.log("Connection type changed to none.");
                break;
            case Connectivity.connectionType.wifi:
                console.log("Connection type changed to WiFi.");
                break;
            case Connectivity.connectionType.mobile:
                console.log("Connection type changed to mobile.");
                break;
            case Connectivity.connectionType.ethernet:
                console.log("Connection type changed to ethernet.");
                break;
            case Connectivity.connectionType.bluetooth:
                console.log("Connection type changed to bluetooth.");
                break;
            default:
                break;
        }
    });

    // Stoping the connection monitoring
    Connectivity.stopMonitoring();

    page.bindingContext = { connectionType: connectionTypeString };
}
// << connectivity-start-code-js
