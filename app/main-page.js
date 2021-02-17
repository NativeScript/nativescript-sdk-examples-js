import Link from "./link";
import ListViewLinksModel from "./links-view-model";

const navigationLinks = [
    new Link("Observable", "ns-framework-modules-category/observable/observable-page"),
    new Link("Observable Array", "ns-framework-modules-category/observable-array/observable-array-page"),
    new Link("Virtual Array", "ns-framework-modules-category/virtual-array/virtual-array-page"),
    new Link("Application", "ns-framework-modules-category/application/application-page"),
    new Link("Application Settings", "ns-framework-modules-category/application-settings/application-settings-page"),
    new Link("Action Bar", "ns-ui-widgets-category/action-bar/action-bar-page"),
    new Link("ActivityIndicator", "ns-ui-widgets-category/activity-indicator/activity-indicator-page"),
    new Link("Animations", "ns-ui-widgets-category/animations/animations-page"),
    new Link("Button", "ns-ui-widgets-category/button/button-page"),
    new Link("Color", "ns-framework-modules-category/color/color-page"),
    new Link("Connectivity", "ns-framework-modules-category/connectivity/connectivity-page"),
    new Link("Console", "ns-framework-modules-category/console/console-page"),
    new Link("DatePicker", "ns-ui-widgets-category/date-picker/date-picker-page"),
    new Link("Dialogs", "ns-ui-widgets-category/dialogs/dialogs-page"),
    new Link("Gestures", "ns-ui-widgets-category/gestures/gestures-page"),
    new Link("HtmlView", "ns-ui-widgets-category/html-view/html-view-page"),
    new Link("IconFonts", "ns-ui-category/icon-fonts/icon-fonts-page"),
    new Link("Image", "ns-ui-widgets-category/image/image-page"),
    new Link("Image Cache", "ns-ui-widgets-category/image-cache/image-cache-page"),
    new Link("Layouts", "ns-ui-widgets-category/layouts/layouts-page"),
    new Link("TimePicker", "ns-ui-widgets-category/time-picker/time-picker-page"),
    new Link("ScrollView", "ns-ui-widgets-category/scroll-view/scroll-view-page"),
    new Link("SearchBar", "ns-ui-widgets-category/search-bar/search-bar-page"),
    new Link("SegmentedBar", "ns-ui-widgets-category/segmented-bar/segmented-bar-page"),
    new Link("Slider", "ns-ui-widgets-category/slider/slider-page"),
    new Link("Switch", "ns-ui-widgets-category/switch/switch-page"),
    new Link("TabView", "ns-ui-widgets-category/tab-view/tab-view-page"),
    new Link("TextField", "ns-ui-widgets-category/text-field/text-field-page"),
    new Link("TextView", "ns-ui-widgets-category/text-view/text-view-page"),
    new Link("WebView", "ns-ui-widgets-category/web-view/web-view-page"),
    new Link("Style", "ns-ui-widgets-category/styling/styling-page"),
    new Link("Label", "ns-ui-widgets-category/label/label-page"),
    new Link("ListPicker", "ns-ui-widgets-category/list-picker/list-picker-page"),
    new Link("ListView", "ns-ui-widgets-category/list-view/list-view-page"),
    new Link("Page", "ns-ui-widgets-category/page/page-page"),
    new Link("Progress", "ns-ui-widgets-category/progress/progress-page"),
    new Link("Frame", "ns-ui-widgets-category/frame/frame-page"),
    new Link("Formatted String", "ns-ui-widgets-category/formatted-string/formatted-string-page"),
    new Link("Trace Module", "ns-framework-modules-category/trace/trace-page"),
    new Link("Timer Module", "ns-framework-modules-category/timer/timer-page"),
    new Link("Placeholder", "ns-ui-widgets-category/placeholder/placeholder-page"),
    new Link("Repeater", "ns-ui-widgets-category/repeater/repeater-page"),
    new Link("Platform Module", "ns-framework-modules-category/platform/platform-page"),
    new Link("FPS Meter", "ns-framework-modules-category/fps-meter/fps-meter-page"),
    new Link("HTTP Module", "ns-framework-modules-category/http/http-page"),
    new Link("Fetch", "ns-framework-modules-category/fetch/fetch-page"),
    new Link("ImageSource", "ns-framework-modules-category/image-source/image-source-page"),
    new Link("File System", "ns-framework-modules-category/file-system/file-system-page"),
    new Link("Modal view", "ns-ui-category/modal-view/modal-view-examples-page"),
    new Link("XML Parser", "ns-framework-modules-category/xml-parser/xml-parser-page"),
    new Link("BottomNavigation", "ns-ui-widgets-category/bottom-navigation/bottom-navigation-page"),
    new Link("Tabs", "ns-ui-widgets-category/tabs/tabs-page")
];

export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: "Cookbook"
    });
    page.bindingContext = vm;
}
