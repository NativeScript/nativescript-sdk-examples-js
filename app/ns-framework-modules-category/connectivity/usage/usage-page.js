// >> connectivity-start-code-js
const connectivityModule = require("tns-core-modules/connectivity");


exports.onNavigatedTo = function(args) {
    const page = args.object;
    let connectionTypeString;

    const type = connectivityModule.getConnectionType();

    switch (type) {
        case connectivityModule.connectionType.none:
            console.log("No connection");
            connectionTypeString = "No Internet connectivity!";
            break;
        case connectivityModule.connectionType.wifi:
            console.log("WiFi connection");
            connectionTypeString = "WiFI connectivity!";
            break;
        case connectivityModule.connectionType.mobile:
            console.log("Mobile connection");
            connectionTypeString = "Mobile connectivity!";
            break;
        case connectivityModule.connectionType.ethernet:
            console.log("Ethernet connection");
            connectionTypeString = "Ethernet connectivity!";
            break;
        case connectivityModule.connectionType.bluetooth:
            console.log("Bluetooth connection");
            connectionTypeString = "Bluetooth connectivity!";
            break;
        default:
            break;
    }

    connectivityModule.startMonitoring((newConnectionType) => {
        switch (newConnectionType) {
            case connectivityModule.connectionType.none:
                console.log("Connection type changed to none.");
                break;
            case connectivityModule.connectionType.wifi:
                console.log("Connection type changed to WiFi.");
                break;
            case connectivityModule.connectionType.mobile:
                console.log("Connection type changed to mobile.");
                break;
            case connectivityModule.connectionType.ethernet:
                console.log("Connection type changed to ethernet.");
                break;
            case connectivityModule.connectionType.bluetooth:
                console.log("Connection type changed to bluetooth.");
                break;
            default:
                break;
        }
    });

    // Stoping the connection monitoring
    connectivityModule.stopMonitoring();

    page.bindingContext = { connectionType: connectionTypeString };
};
// << connectivity-start-code-js
