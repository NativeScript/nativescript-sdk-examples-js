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
    items.push(new Item("isTurnedOn", `${isTurnedOn}`));
    console.log(isTurnedOn);
    // << app-settings-bool-code-ts

    // >> app-settings-string-code-ts
    appSettings.setString("username", "NickIliev");
    const username = appSettings.getString("username");
    items.push(new Item("username", `${username}`));
    console.log(username);
    // << app-settings-string-code-ts

    // >> app-settings-number-code-ts
    appSettings.setNumber("locationX", 54.321);
    const locationX = parseFloat(appSettings.getNumber("locationX").toFixed(3));
    items.push(new Item("locationX", `${locationX}`));
    console.log(locationX);
    // << app-settings-number-code-ts

    // >> app-settings-default-value-code-ts
    // will return "No string value" if there is no value for "noSuchKey"
    const someKey = appSettings.getString("noSuchKey", "No string value");
    items.push(new Item("noSuchKey", `${someKey}`));
    console.log(someKey);
    // << app-settings-default-value-code-ts

    // >> app-settings-no-value-code-ts
    // will return undefined if there is no value for "noSuchKey"
    const defaultValue = appSettings.getString("noSuchKey");
    items.push(new Item("noSuchKey", `${defaultValue}`));
    console.log(defaultValue);
    // << app-settings-no-value-code-ts

    // >> app-settings-no-key-code-ts
    // will return false if there is no "noBoolKey"
    const noBoolKey = appSettings.hasKey("noBoolKey");
    items.push(new Item("noBoolKey", `${noBoolKey}`));
    console.log(noBoolKey);
    // << app-settings-no-key-code-ts

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
