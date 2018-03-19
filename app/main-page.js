var ListViewLinksModel = require("./links-view-model");
var link = require("./link");
var navigationLinks = [
    new link("Application", "/application/application-page"),
    new link("Action Bar", "ui/action-bar/action-bar-page"),
    new link("ActivityIndicator", "ui/activity-indicator/activity-indicator-page"),
    new link("Animations", "ui/animations/animations-page"),
    new link("Button", "ui/button/button-page"),
    new link("DatePicker", "/date-picker"),
    new link("Dialogs", "/dialogs"),
    new link("Layouts", "/layouts"),
    new link("TimePicker", "ui/time-picker/time-picker-page"),
    new link("ScrollView", "/scroll-view"),
    new link("SearchBar", "/search-bar"),
    new link("SegmentedBar", "/ui/segmented-bar/segmented-bar-page"),
    new link("Slider", "/ui/slider/slider-page"),
    new link("Switch", "/ui/switch/switch-page"),
    new link("TabView", "/ui/tab-view/tab-view-page"),
    new link("TextField", "ui/text-field/text-field-page"),
    new link("TextView", "/ui/text-view/text-view-page"),
    new link("WebView", "/ui/web-view/web-view-page"),
    new link("Style", "/ui/styling/styling-page"),
    new link("Gestures", "/gestures"),
    new link("HtmlView", "/html-view"),
    new link("Image", "/image"),
    new link("Label", "/label"),
    new link("ListPicker", "/list-picker"),
    new link("ListView", "/list-view"),
    new link("Progress", "/progress"),
    new link("Formatted String", "/formatted-string"),
    new link("Trace Module", "/trace"),
    new link("Timer Module", "/timer"),
    new link("Platform Module", "/platform"),
    new link("Location", "/location"),
    new link("FPS Meter", "/fps-meter"),
    new link("HTTP Module", "/http"),
    new link("Application Settings", "/application-settings"),
    new link("Color", "/color"),
    new link("Connectivity", "/connectivity"),
    new link("File System", "/file-system"),
    new link("Modal page", "/modal-page"),
    new link("Camera", "/camera")
];

function onNavigatingTo(args) {
    var page = args.object;
    var vm = new ListViewLinksModel({ links: navigationLinks, actionBarTitle: "Cookbook" });
    page.bindingContext = vm;
}


exports.onNavigatingTo = onNavigatingTo;