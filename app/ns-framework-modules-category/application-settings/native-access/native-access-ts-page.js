"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_1 = require("tns-core-modules/application");
var platform_1 = require("tns-core-modules/platform");
var utils = require("tns-core-modules/utils/utils");
function getAll() {
    if (platform_1.isAndroid) {
        var sharedPreferences = application_1.getNativeApplication().getApplicationContext().getSharedPreferences("prefs.db", 0);
        var mappedPreferences = sharedPreferences.getAll();
        var iterator = mappedPreferences.keySet().iterator();
        while (iterator.hasNext()) {
            var key = iterator.next();
            console.log(key);
            var value = mappedPreferences.get(key);
            console.log(value);
        }
    }
    else if (platform_1.isIOS) {
        var userDefaults = utils.ios.getter(NSUserDefaults, NSUserDefaults.standardUserDefaults);
        var dictionaryUserDefaults = userDefaults.dictionaryRepresentation();
        var allKeys = dictionaryUserDefaults.allKeys;
        console.log(allKeys);
        var allValues = dictionaryUserDefaults.allValues;
        console.log(allValues);
    }
}
exports.getAll = getAll;
