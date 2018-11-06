"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appSettings = require("tns-core-modules/application-settings");
var observable_1 = require("tns-core-modules/data/observable");
var Item = (function () {
    function Item(key, item) {
        this.key = key;
        this.item = item;
    }
    return Item;
}());
function onNavigatingTo(args) {
    var items = [];
    appSettings.setBoolean("isTurnedOn", true);
    var isTurnedOn = appSettings.getBoolean("isTurnedOn", false);
    items.push(new Item("isTurnedOn", "" + isTurnedOn));
    console.log(isTurnedOn);
    appSettings.setString("username", "NickIliev");
    var username = appSettings.getString("username");
    items.push(new Item("username", "" + username));
    console.log(username);
    appSettings.setNumber("locationX", 54.321);
    var locationX = parseFloat(appSettings.getNumber("locationX").toFixed(3));
    items.push(new Item("locationX", "" + locationX));
    console.log(locationX);
    var someKey = appSettings.getString("noSuchKey", "No string value");
    items.push(new Item("noSuchKey", "" + someKey));
    console.log(someKey);
    var defaultValue = appSettings.getString("noSuchKey");
    items.push(new Item("noSuchKey", "" + defaultValue));
    console.log(defaultValue);
    var noBoolKey = appSettings.hasKey("noBoolKey");
    items.push(new Item("noBoolKey", "" + noBoolKey));
    console.log(noBoolKey);
    var page = args.object;
    var viewModel = observable_1.fromObject({
        items: items
    });
    page.bindingContext = viewModel;
}
exports.onNavigatingTo = onNavigatingTo;
function clearAll() {
    appSettings.clear();
}
