const deepLinkDataModule = require("../shared/deep-link-data");
const MyDelegate = (function(_super) {
    __extends(MyDelegate, _super);

    MyDelegate.ObjCProtocols = [UIApplicationDelegate];

    function MyDelegate() {
        if (_super) {
            return _super;
        } else {
            return this;
        }
    }

    MyDelegate.prototype.applicationHandleOpenURL = function (application, url) {
        console.log("MyDelegate.prototype.applicationHandleOpenURL");
        const dld = new deepLinkDataModule.DeepLinkData(url, undefined);

        return true;

    };

    return MyDelegate;

}(UIResponder));

exports.MyDelegate = MyDelegate;
