// >> app-settings-require-ts
import * as appSettings from "tns-core-modules/application-settings";
// << app-settings-require-ts
import { fromObject } from "tns-core-modules/data/observable";

class Item {
    key: string;
    item: any;

    constructor(key, item) {
        this.key = key;
        this.item = item;
    }
}

export function onNavigatingTo(args) {
    // >> app-settings-bool-code-ts
    const items = [];
    appSettings.setBoolean("isTurnedOn", true);
    const isTurnedOn = appSettings.getBoolean("isTurnedOn", false);
    // << app-settings-bool-code-ts
    items.push(new Item("isTurnedOn", `${isTurnedOn}`));

    // >> app-settings-string-code-ts
    appSettings.setString("username", "NickIliev");
    const username = appSettings.getString("username");
    // << app-settings-string-code-ts
    items.push(new Item("username", `${username}`));

    // >> app-settings-number-code-ts
    appSettings.setNumber("locationX", 54.321);
    const locX = appSettings.getNumber("locationX").toFixed(3);

    // Note: The MIN & MAX number ranges are limited by the JavaScript number implementation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
    // On Android, the native method is also setting java.lang.Float which might lead to approximations during the conversion.
    // For really large numbers (e.g. like the value from getDate()) use setString and save the values as strings.
    // << app-settings-number-code-ts
    const locationX = parseFloat(locX);
    items.push(new Item("locationX", `${locationX}`));

    // >> app-settings-default-value-code-ts
    // will return "No string value" if there is no value for "noSuchKey"
    const someKey = appSettings.getString("noSuchKey", "No string value");
    // << app-settings-default-value-code-ts
    items.push(new Item("noSuchKey", `${someKey}`));

    // >> app-settings-no-value-code-ts
    // will return undefined if there is no value for "noSuchKey"
    const defaultValue = appSettings.getString("noSuchKey");
    // << app-settings-no-value-code-ts
    items.push(new Item("noSuchKey", `${defaultValue}`));

    // >> app-settings-no-key-code-ts
    // will return false if there is no "noBoolKey"
    const noBoolKey = appSettings.hasKey("noBoolKey");
    // << app-settings-no-key-code-ts
    items.push(new Item("noBoolKey", `${noBoolKey}`));

    const page = args.object;
    const viewModel = fromObject({
        items: items
    });

    page.bindingContext = viewModel;
}

function clearAll() {
    // >> app-settings-clear-all-ts
    // Removes all values.
    appSettings.clear();
    // << app-settings-clear-all-ts
}
