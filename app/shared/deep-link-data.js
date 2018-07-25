const applicationSettingsModule = require("application-settings");
const platformModule = require("platform");

function DeepLinkData(url, androidActivity) {
    if ((platformModule.isAndroid) && (androidActivity !== undefined)) {
        this.getAndroidIntent(androidActivity);
    } else if (platformModule.isIOS) {
        this.getParams(url);
    }
}

DeepLinkData.prototype.getParams = function (url) {
    const resulturl = (url).toString();
    if (resulturl.substring(0, 10) === "examplesgo") {
        const value = this.getParameterByName("gotoexample", resulturl);
        if (value) {
            applicationSettingsModule.setString("gotoexample", value);
        }
    }
};

DeepLinkData.prototype.getParameterByName = function (name, url) {
    name = name.replace(/[\[\]]/g, "\\$&");
    /*eslint-disable */
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    /*eslint-enable */
    const results = regex.exec(url);
    if (!results) {
        return null;
    }
    if (!results[2]) {
        return "";
    }

    return results[2].replace(/\+/g, " ");
};

DeepLinkData.prototype.getAndroidIntent = function (args) {
    const intent = args.getIntent();
    const value = intent.getData();
    if (value) {
        this.getParams(value);
    }
};

exports.DeepLinkData = DeepLinkData;
