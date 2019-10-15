// >> app-settings-code-js
const appSettings = require("tns-core-modules/application-settings");


function onNavigatingTo(args) {
    appSettings.setBoolean("isTurnedOn", true);
    appSettings.setString("username", "Wolfgang");
    appSettings.setNumber("locationX", 54.321);

    const isTurnedOn = appSettings.getBoolean("isTurnedOn");
    const username = appSettings.getString("username");
    const locationX = appSettings.getNumber("locationX");

    // Will return "No string value" if there is no value for "noSuchKey"
    const someKey = appSettings.getString("noSuchKey", "No string value");

    // Will return false if there is no key with name "noSuchKey"
    const isKeExisting = appSettings.hasKey("noSuchKey");
}
exports.onNavigatingTo = onNavigatingTo;

function onClear() {
    // Removing a single entry via its key name
    appSettings.remove("isTurnedOn");

    // Clearing the whole application-settings for this app
    appSettings.clear();
}
// << app-settings-code-js
