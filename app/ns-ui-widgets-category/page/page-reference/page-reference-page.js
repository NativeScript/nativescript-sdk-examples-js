// >> page-reference-via-event
function onPageLoaded(args) {
    console.log("Page Loaded!");
    const page = args.object;
    console.log("Page reference from loaded event: ", page);
}
exports.onPageLoaded = onPageLoaded;

function onNavigatedTo(args) {
    console.log("Page onNavigatedTo!");
    const page = args.object;
    console.log("Page reference from navigatedTo event: ", page);
}
exports.onNavigatedTo = onNavigatedTo;
// << page-reference-via-event

// >> page-reference-via-page-prop
function onStackLoaded(args) {
    console.log("Root StackLayout Loaded!");
    const stack = args.object;
    const page = stack.page;
    console.log("Page reference from page child element: ", page);
}
exports.onStackLoaded = onStackLoaded;

function onButtonTapped(args) {
    console.log("Button Tapped!");
    const button = args.object;
    const page = button.page;
    console.log("Page reference from button tap event: ", page);
}
exports.onButtonTapped = onButtonTapped;
// << page-reference-via-page-prop

// >> page-reference-via-currrent-page-prop
const getFrameById = require("tns-core-modules/ui/frame").getFrameById;

function onNavigatingTo(args) {
    console.log("Page navigatingTo");
    const rootFrame = getFrameById("root-frame");
    const page = rootFrame.currentPage;
    console.log("Page reference from currentPage property of Frame: ", page);
}
exports.onNavigatingTo = onNavigatingTo;
// << page-reference-via-currrent-page-prop
