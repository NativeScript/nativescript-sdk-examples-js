// >> app-settings-native-access
const getNativeApplication = require("application").getNativeApplication;
const platformModule = require("platform");
const utils = require("utils/utils");

function getAll() {
    if (platformModule.isAndroid) {
        const sharedPreferences = getNativeApplication().getApplicationContext().getSharedPreferences("prefs.db", 0);
        const mappedPreferences = sharedPreferences.getAll();
        const iterator = mappedPreferences.keySet().iterator();

        while (iterator.hasNext()) {
            const key = iterator.next();
            console.log(key); // myString, myNumbver, isReal
            const value = mappedPreferences.get(key);
            console.log(value); // "John Doe", 42, true
        }

    } else if (platformModule.isIOS) {
        // Note: If using TypeScript you will need tns-platform-declarations plugin to access the native APIs like NSUserDefaults
        const userDefaults = utils.ios.getter(NSUserDefaults, NSUserDefaults.standardUserDefaults);
        const dictionaryUserDefaults = userDefaults.dictionaryRepresentation();

        const allKeys = dictionaryUserDefaults.allKeys;
        console.log(allKeys);
        const allValues = dictionaryUserDefaults.allValues;
        console.log(allValues);
    }
}
// << app-settings-native-access
exports.getAll = getAll;
