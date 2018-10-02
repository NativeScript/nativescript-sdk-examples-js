// >> app-settings-require
const appSettings = require("application-settings");
// << app-settings-require
const fromObject = require("data/observable").fromObject;

class Item {
    constructor(key, item) {
        this.key = key;
        this.item = item;
    }
}

function onNavigatingTo(args) {
    // >> app-settings-bool-code
    const items = [];
    appSettings.setBoolean("isTurnedOn", true);
    const isTurnedOn = appSettings.getBoolean("isTurnedOn", false);
    items.push(new Item("isTurnedOn", `${isTurnedOn}`));
    console.log(isTurnedOn);
    // << app-settings-bool-code

    // >> app-settings-string-code
    appSettings.setString("username", "NickIliev");
    const username = appSettings.getString("username");
    items.push(new Item("username", `${username}`));
    console.log(username);
    // << app-settings-string-code

    // >> app-settings-number-code
    appSettings.setNumber("locationX", 54.321);
    const locationX = parseFloat(appSettings.getNumber("locationX").toFixed(3));
    items.push(new Item("locationX", `${locationX}`));
    console.log(locationX);
    // << app-settings-number-code

    // >> app-settings-remove-entry
    // will remove the setting for a key
    appSettings.remove("keyToRemove");
    // << app-settings-remove-entry

    // >> app-settings-default-value-code
    // will return "No string value" if there is no value for "noSuchKey"
    const someKey = appSettings.getString("noSuchKey", "No string value");
    items.push(new Item("noSuchKey", `${someKey}`));
    console.log(someKey);
    // << app-settings-default-value-code

    // >> app-settings-no-value-code
    // will return undefined if there is no value for "noSuchKey"
    const defaultValue = appSettings.getString("noSuchKey");
    items.push(new Item("noSuchKey", `${defaultValue}`));
    console.log(defaultValue);
    // << app-settings-no-value-code

    // >> app-settings-no-key-code
    // will return false if there is no "noBoolKey"
    const noBoolKey = appSettings.hasKey("noBoolKey");
    items.push(new Item("noBoolKey", `${noBoolKey}`));
    console.log(noBoolKey);
    // << app-settings-no-key-code

    const page = args.object;
    const viewModel = fromObject({
        items: items
    });

    page.bindingContext = viewModel;
}
exports.onNavigatingTo = onNavigatingTo;

function clearAll() {
    // >> app-settings-clear-all
    // Removes all values.
    appSettings.clear();
    // << app-settings-clear-all
}
