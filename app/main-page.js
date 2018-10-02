const ListViewLinksModel = require("./links-view-model");
const link = require("./link");
const navigationLinks = [
    new link("Observable", "ns-framework-modules-category/observable/observable-page"),
    new link("Observable Array", "ns-framework-modules-category/observable-array/observable-array-page"),
    new link("Virtual Array", "ns-framework-modules-category/virtual-array/virtual-array-page"),
    new link("Application", "ns-framework-modules-category/application/application-page"),
    new link("Application Settings", "ns-framework-modules-category/application-settings/application-settings-page"),
    new link("Action Bar", "ns-ui-widgets-category/action-bar/action-bar-page"),
    new link("ActivityIndicator", "ns-ui-widgets-category/activity-indicator/activity-indicator-page"),
    new link("Animations", "ns-ui-widgets-category/animations/animations-page"),
    new link("Button", "ns-ui-widgets-category/button/button-page"),
    new link("Color", "ns-framework-modules-category/color/color-page"),
    new link("Connectivity", "ns-framework-modules-category/connectivity/connectivity-page"),
    new link("Console", "ns-framework-modules-category/console/console-page"),
    new link("DatePicker", "ns-ui-widgets-category/date-picker/date-picker-page"),
    new link("Dialogs", "ns-ui-widgets-category/dialogs/dialogs-page"),
    new link("Gestures", "ns-ui-widgets-category/gestures/gestures-page"),
    new link("HtmlView", "ns-ui-widgets-category/html-view/html-view-page"),
    new link("IconFonts", "ns-ui-widgets-category/icon-fonts/icon-fonts-page"),
    new link("Image", "ns-ui-widgets-category/image/image-page"),
    new link("Image Cache", "ns-ui-widgets-category/image-cache/image-cache-page"),
    new link("Layouts", "ns-ui-widgets-category/layouts/layouts-page"),
    new link("TimePicker", "ns-ui-widgets-category/time-picker/time-picker-page"),
    new link("ScrollView", "ns-ui-widgets-category/scroll-view/scroll-view-page"),
    new link("SearchBar", "ns-ui-widgets-category/search-bar/search-bar-page"),
    new link("SegmentedBar", "ns-ui-widgets-category/segmented-bar/segmented-bar-page"),
    new link("Slider", "ns-ui-widgets-category/slider/slider-page"),
    new link("Switch", "ns-ui-widgets-category/switch/switch-page"),
    new link("TabView", "ns-ui-widgets-category/tab-view/tab-view-page"),
    new link("TextField", "ns-ui-widgets-category/text-field/text-field-page"),
    new link("TextView", "ns-ui-widgets-category/text-view/text-view-page"),
    new link("WebView", "ns-ui-widgets-category/web-view/web-view-page"),
    new link("Style", "ns-ui-widgets-category/styling/styling-page"),
    new link("Label", "ns-ui-widgets-category/label/label-page"),
    new link("ListPicker", "ns-ui-widgets-category/list-picker/list-picker-page"),
    new link("ListView", "ns-ui-widgets-category/list-view/list-view-page"),
    new link("Page", "ns-ui-widgets-category/page/page-page"),
    new link("Progress", "ns-ui-widgets-category/progress/progress-page"),
    new link("Frame", "ns-ui-widgets-category/frame/frame-page"),
    new link("Formatted String", "ns-ui-widgets-category/formatted-string/formatted-string-page"),
    new link("Trace Module", "ns-framework-modules-category/trace/trace-page"),
    new link("Timer Module", "ns-framework-modules-category/timer/timer-page"),
    new link("Placeholder", "ns-ui-widgets-category/placeholder/placeholder-page"),
    new link("Repeater", "ns-ui-widgets-category/repeater/repeater-page"),
    new link("Platform Module", "ns-framework-modules-category/platform/platform-page"),
    new link("FPS Meter", "ns-framework-modules-category/fps-meter/fps-meter-page"),
    new link("HTTP Module", "ns-framework-modules-category/http/http-page"),
    new link("Fetch", "ns-framework-modules-category/fetch/fetch-page"),
    new link("ImageSource", "ns-framework-modules-category/image-source/image-source-page"),
    new link("File System", "ns-framework-modules-category/file-system/file-system-page"),
    new link("Modal view", "ns-ui-category/modal-view/modal-veiw-examples-page"),
    new link("XML Parser", "ns-framework-modules-category/xml-parser/xml-parser-page")
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
