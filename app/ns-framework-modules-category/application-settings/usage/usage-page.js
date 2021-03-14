// >> app-settings-code-js
import { ApplicationSettings } from "@nativescript/core";


export function onNavigatingTo(args) {
    ApplicationSettings.setBoolean("isTurnedOn", true);
    ApplicationSettings.setString("username", "Wolfgang");
    ApplicationSettings.setNumber("locationX", 54.321);

    const isTurnedOn = ApplicationSettings.getBoolean("isTurnedOn");
    const username = ApplicationSettings.getString("username");
    const locationX = ApplicationSettings.getNumber("locationX");

    // Will return "No string value" if there is no value for "noSuchKey"
    const someKey = ApplicationSettings.getString("noSuchKey", "No string value");

    // Will return false if there is no key with name "noSuchKey"
    const isKeExisting = ApplicationSettings.hasKey("noSuchKey");
}


function onClear() {
    // Removing a single entry via its key name
    ApplicationSettings.remove("isTurnedOn");

    // Clearing the whole application-settings for this app
    ApplicationSettings.clear();
}
// << app-settings-code-js
