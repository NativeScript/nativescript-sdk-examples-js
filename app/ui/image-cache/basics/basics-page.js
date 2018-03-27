const Cache = require("tns-core-modules/ui/image-cache").Cache;
const Image = require("ui/image").Image;
const ImageSource = require("image-source").ImageSource;
const fromNativeSource = require("image-source").fromNativeSource;
const fromFile = require("image-source").fromFile;

const Observable = require("tns-core-modules/data/observable").Observable;

function onLoaded(args) {
    const page = args.object;
    const vm = new Observable();

    // >> image-cache-code
    let cache = new Cache();
    cache.placeholder = fromFile("~/images/logo.png");
    cache.maxRequests = 5;
    // Enable download while not scrolling
    cache.enableDownload();

    let imageSource;
    const url = "https://github.com/NativeScript.png";
    // Try to read the image from the cache
    let image = cache.get(url);
    if (image) {
        // If present -- use it.
        imageSource = fromNativeSource(image);
    } else {
        // If not present -- request its download.
        cache.push({
            key: url,
            url: url,
            completed: (image, key) => {
                if (url === key) {
                    imageSource = fromNativeSource(image);
                }
            }
        });
    }

    // Disable download while scrolling
    // cache.disableDownload();
    // << image-cache-code

    vm.set("imageSource", cache.placeholder);
    page.bindingContezxt = vm;
}
exports.onLoaded = onLoaded;