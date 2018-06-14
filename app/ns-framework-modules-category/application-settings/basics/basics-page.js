// >> app-settings-require
const appSettings = require("application-settings");
// << app-settings-require
function onNavigatingTo(args) {
    // >> app-settings-bool-code
    appSettings.setBoolean("isTurnedOn", true);
    const isTurnedOn = appSettings.getBoolean("isTurnedOn", false);
    console.log(isTurnedOn);
    // << app-settings-bool-code

    // >> app-settings-string-code
    appSettings.setString("username", "NickIliev");
    const username = appSettings.getString("username");
    console.log(username);
    // << app-settings-string-code

    // >> app-settings-number-code
    appSettings.setNumber("locationX", 54.321);
    const locationX = parseFloat(appSettings.getNumber("locationX").toFixed(3));
    console.log(locationX);
    // << app-settings-number-code

    // >> app-settings-default-value-code
    // will return "No string value" if there is no value for "noSuchKey"
    const someKey = appSettings.getString("noSuchKey", "No string value");
    console.log(someKey);
    // << app-settings-default-value-code

    // >> app-settings-no-value-code
    // will return undefined if there is no value for "noSuchKey"
    const defaultValue = appSettings.getString("noSuchKey");
    console.log(defaultValue);
    // << app-settings-no-value-code

    // >> app-settings-no-key-code
    // will return false if there is no "noBoolKey"
    const noBoolKey = appSettings.hasKey("noBoolKey");
    console.log(noBoolKey);
    // << app-settings-no-key-code

}
exports.onNavigatingTo = onNavigatingTo;
