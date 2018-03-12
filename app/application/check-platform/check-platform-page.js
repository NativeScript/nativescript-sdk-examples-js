// >> application-require-js
var application = require("tns-core-modules/application");
// << application-require-js
function onGridLoaded(args) {
    var grid = args.object;
    var lbl = grid.getViewById("lbl");
    var iconLabel = grid.getViewById("iconLabel");
    iconLabel.className = "fa";
    iconLabel.textAlignment = "center";
    iconLabel.verticalAlignment = "middle";
    iconLabel.fontSize = 40;
    lbl.textAlignment = "center";
    lbl.verticalAlignment = "middle";
    lbl.fontSize = 24;
    // >> application-platform-js
    if (application.android) {
        console.log("We are running on Android device!");
        // >> (hide)
        iconLabel.text = String.fromCharCode(0xff17b);
        lbl.text = "Android Applicaiton";
        // << (hide)
    }
    else if (application.ios) {
        console.log("We are running on iOS device");
        // >> (hide)
        iconLabel.text = String.fromCharCode(0xf179);
        lbl.text = "iOS Applicaiton";
        // << (hide)
    }
    // << application-platform-js
}
exports.onGridLoaded = onGridLoaded;
function onNavigatingTo(args) {
    var page = args.object;
    page.actionBar.title = args.context.title;
}
exports.onNavigatingTo = onNavigatingTo;
