// >> app-settings-native-access-ts
import { getNativeApplication } from "tns-core-modules/application";
import { isAndroid, isIOS } from "tns-core-modules/platform";
import * as utils from "tns-core-modules/utils/utils";

export function getAll() {
    if (isAndroid) {
        const sharedPreferences = getNativeApplication().getApplicationContext().getSharedPreferences("prefs.db", 0);
        const mappedPreferences = sharedPreferences.getAll();
        const iterator = mappedPreferences.keySet().iterator();

        while (iterator.hasNext()) {
            const key = iterator.next();
            console.log(key); // myString, myNumbver, isReal
            const value = mappedPreferences.get(key);
            console.log(value); // "John Doe", 42, true
        }

    } else if (isIOS) {
        // tslint:disable-next-line
        // Note: If using TypeScript you will need tns-platform-declarations plugin to access the native APIs like NSUserDefaults
        const userDefaults = utils.ios.getter(NSUserDefaults, NSUserDefaults.standardUserDefaults);
        const dictionaryUserDefaults = userDefaults.dictionaryRepresentation();

        const allKeys = dictionaryUserDefaults.allKeys;
        console.log(allKeys);
        const allValues = dictionaryUserDefaults.allValues;
        console.log(allValues);
    }
}
// << app-settings-native-access-ts
