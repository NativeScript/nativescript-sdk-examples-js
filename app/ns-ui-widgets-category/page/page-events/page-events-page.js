// >> page-events
function onNavigatingTo(args) {
    console.log(args.eventName);
    console.log(args.object);
    console.log(args.context);
    console.log(args.isBackNavigation);
}
exports.onNavigatingTo = onNavigatingTo;

function onPageLoaded(args) {
    console.log(args.eventName);
    console.log(args.object);
}
exports.onPageLoaded = onPageLoaded;

function onLayoutChanged(args) {
    console.log(args.eventName);
    console.log(args.object);
}
exports.onLayoutChanged = onLayoutChanged;

function onNavigatedTo(args) {
    console.log(args.eventName);
    console.log(args.object);
    console.log(args.context);
    console.log(args.isBackNavigation);
}
exports.onNavigatedTo = onNavigatedTo;

function onNavigatingFrom(args) {
    console.log(args.eventName);
    console.log(args.object);
    console.log(args.context);
    console.log(args.isBackNavigation);
}
exports.onNavigatingFrom = onNavigatingFrom;

function onUnloaded(args) {
    console.log(args.eventName);
    console.log(args.object);
}
exports.onUnloaded = onUnloaded;

function onNavigatedFrom(args) {
    console.log(args.eventName);
    console.log(args.object);
    console.log(args.context);
    console.log(args.isBackNavigation);
}
exports.onNavigatedFrom = onNavigatedFrom;
// << page-events
