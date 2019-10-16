// >> connectivity-start-code-ts
import { connectionType, getConnectionType, startMonitoring, stopMonitoring }from "tns-core-modules/connectivity";

export function onNavigatedTo(args) {
    const page = args.object;
    let connectionTypeString;

    const type = getConnectionType();

    switch (type) {
        case connectionType.none:
            console.log("No connection");
            connectionTypeString = "No Internet connectivity!";
            break;
        case connectionType.wifi:
            console.log("WiFi connection");
            connectionTypeString = "WiFI connectivity!";
            break;
        case connectionType.mobile:
            console.log("Mobile connection");
            connectionTypeString = "Mobile connectivity!";
            break;
        case connectionType.ethernet:
            console.log("Ethernet connection");
            connectionTypeString = "Ethernet connectivity!";
            break;
        case connectionType.bluetooth:
            console.log("Bluetooth connection");
            connectionTypeString = "Bluetooth connectivity!";
            break;
        default:
            break;
    }

    startMonitoring((newConnectionType) => {
        switch (newConnectionType) {
            case connectionType.none:
                console.log("Connection type changed to none.");
                break;
            case connectionType.wifi:
                console.log("Connection type changed to WiFi.");
                break;
            case connectionType.mobile:
                console.log("Connection type changed to mobile.");
                break;
            case connectionType.ethernet:
                console.log("Connection type changed to ethernet.");
                break;
            case connectionType.bluetooth:
                console.log("Connection type changed to bluetooth.");
                break;
            default:
                break;
        }
    });

    // Stoping the connection monitoring
    stopMonitoring();

    page.bindingContext = { connectionType: connectionTypeString };
}
// << connectivity-start-code-ts
