// >> connectivity-require-ts
import { connectionType, getConnectionType, startMonitoring, stopMonitoring }from "tns-core-modules/connectivity";
// << connectivity-require-ts

export function onNavigatedTo(args) {
    const page = args.object;
    let connectionTypeString;

    // >> connectivity-type-ts
    // result is ConnectionType enumeration (none, wifi or mobile)
    const myConnectionType = getConnectionType();

    switch (myConnectionType) {
        case connectionType.none:
            // Denotes no Internet connection.
            console.log("No connection");
            // >> (hide)
            connectionTypeString = "No Internet connectivity!";
            // << (hide)
            break;
        case connectionType.wifi:
            // Denotes a WiFi connection.
            console.log("WiFi connection");
            // >> (hide)
            connectionTypeString = "WiFI connectivity!";
            // << (hide)
            break;
        case connectionType.mobile:
            // Denotes a mobile connection, i.e. cellular network or WAN.
            console.log("Mobile connection");
            // >> (hide)
            connectionTypeString = "Mobile connectivity!";
            // << (hide)
            break;
        case connectionType.ethernet:
            // Denotes a ethernet connection.
            console.log("Ethernet connection");
            // >> (hide)
            connectionTypeString = "Ethernet connectivity!";
            // << (hide)
            break;
        case connectionType.bluetooth:
            // Denotes a ethernet connection.
            console.log("Bluetooth connection");
            // >> (hide)
            connectionTypeString = "Bluetooth connectivity!";
            // << (hide)
            break;
        default:
            break;
    }
    // << connectivity-type-ts

    // >> connectivity-monitoring-ts
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

    // Explicitly stopping the monitoring
    stopMonitoring();
    // << connectivity-monitoring-ts
    page.bindingContext = { connectionType: connectionTypeString };
}
