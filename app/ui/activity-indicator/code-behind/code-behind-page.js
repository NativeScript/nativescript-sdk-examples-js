const ActivityIndicator = require("tns-core-modules/ui/activity-indicator").ActivityIndicator;
const Observable = require("tns-core-modules/data/observable").Observable;
const Image = require("tns-core-modules/ui/image").Image;

function onNavigatingTo(args) {
    const page = args.object;
    const myStsck = page.getViewById("myStack");

    const vm = new Observable();

    // >> activity-indicator-code-behind
    const image = new Image();
    image.isLoading = true; // mock image downloading in progress

    const indicator = new ActivityIndicator();
    // Bind the busy property of the indicator to the isLoading property of the image
    indicator.bind({
        sourceProperty: "isLoading",
        targetProperty: "busy"
    }, image);

    myStsck.addChild(indicator);
    // << activity-indicator-code-behind
    vm.set("snippet", 'const image = new Image(); \nimage.isLoading = true; \n\nconst indicator = new ActivityIndicator(); \nindicator.bind({ \n    sourceProperty: "isLoading",\n    targetProperty: "busy\n}, image);"');
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;