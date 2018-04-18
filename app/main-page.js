const ListViewLinksModel = require("./links-view-model");
const link = require("./link");
const navigationLinks = [
    new link("Observable", "data-category/observable/observable-page"),
    new link("Observable Array", "data-category/observable-array/observable-array-page"),
    new link("Virtual Array", "data-category/virtual-array/virtual-array-page"),
    new link("Application", "application/application-page"),
    new link("Application Settings", "application-settings/application-settings-page"),
    new link("Action Bar", "ui-category/action-bar/action-bar-page"),
    new link("ActivityIndicator", "ui-category/activity-indicator/activity-indicator-page"),
    new link("Animations", "ui-category/animations/animations-page"),
    new link("Button", "ui-category/button/button-page"),
    new link("Borders", "ui-category/borders/borders-page"),
    new link("Color", "color/color-page"),
    new link("Connectivity", "connectivity/connectivity-page"),
    new link("Console", "console/console-page"),
    new link("DatePicker", "ui-category/date-picker/date-picker-page"),
    new link("Dialogs", "ui-category/dialogs/dialogs-page"),
    new link("Gestures", "ui-category/gestures/gestures-page"),
    new link("HtmlView", "ui-category/html-view/html-view-page"),
    new link("Image", "ui-category/image/image-page"),
    new link("Image Cache", "ui-category/image-cache/image-cache-page"),
    new link("Layouts", "ui-category/layouts/layouts-page"),
    new link("TimePicker", "ui-category/time-picker/time-picker-page"),
    new link("ScrollView", "ui-category/scroll-view/scroll-view-page"),
    new link("SearchBar", "ui-category/search-bar/search-bar-page"),
    new link("SegmentedBar", "ui-category/segmented-bar/segmented-bar-page"),
    new link("Slider", "ui-category/slider/slider-page"),
    new link("Switch", "ui-category/switch/switch-page"),
    new link("TabView", "ui-category/tab-view/tab-view-page"),
    new link("TextField", "ui-category/text-field/text-field-page"),
    new link("TextView", "ui-category/text-view/text-view-page"),
    new link("WebView", "ui-category/web-view/web-view-page"),
    new link("Style", "ui-category/styling/styling-page"),
    new link("Label", "ui-category/label/label-page"),
    new link("ListPicker", "ui-category/list-picker/list-picker-page"),
    new link("ListView", "ui-category/list-view/list-view-page"),
    new link("Progress", "ui-category/progress/progress-page"),
    new link("Formatted String", "ui-category/formatted-string/formatted-string-page"),
    new link("Trace Module", "trace/trace-page"),
    new link("Timer Module", "timer/timer-page"),
    new link("Placeholder", "ui-category/placeholder/placeholder-page"),
    new link("Repeater", "ui-category/repeater/repeater-page"),
    new link("Platform Module", "platform/platform-page"),
    new link("FPS Meter", "fps-meter/fps-meter-page"),
    new link("HTTP Module", "http/http-page"),
    new link("Fetch", "fetch/fetch-page"),
    new link("ImageSource", "image-source/image-source-page"),
    new link("File System", "file-system/file-system-page"),
    // new link("Modal page", "/modal-page"),
    new link("XML Parser", "xml-parser/xml-parser-page")
];

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: "Cookbook"
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
