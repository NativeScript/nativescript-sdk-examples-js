// >> image-cache-require
const Cache = require("tns-core-modules/ui/image-cache").Cache;
// << image-cache-require
const fromNativeSource = require("image-source").fromNativeSource;
const fromFile = require("image-source").fromFile;

const Observable = require("tns-core-modules/data/observable").Observable;

function onLoaded(args) {
    const page = args.object;
    const vm = new Observable();

    cacheImage(vm);

    page.bindingContext = vm;
}
exports.onLoaded = onLoaded;

function cacheImage(viewModel) {
    // >> image-cache-code
    const cache = new Cache();
    cache.placeholder = fromFile("~/images/logo.png");
    cache.maxRequests = 5;

    // set the placeholder while the desired image is donwloaded
    viewModel.set("imageSource", cache.placeholder);

    // Enable download while not scrolling
    cache.enableDownload();

    let cachedImageSource;
    const url = "https://avatars1.githubusercontent.com/u/7392261?v=4";
    // Try to read the image from the cache
    const image = cache.get(url);

    if (image) {
        // If present -- use it.
        cachedImageSource = imageSource.fromNativeSource(image);
        viewModel.set("imageSource", cachedImageSource);
    } else {
        // If not present -- request its download + put it in the cache.
        cache.push({
            key: url,
            url: url,
            completed: (image, key) => {
                if (url === key) {
                    cachedImageSource = fromNativeSource(image);
                    viewModel.set("imageSource", cachedImageSource); // set the downloaded iamge
                }
            }
        });
    }

    // Disable download while scrolling
    cache.disableDownload();
    // << image-cache-codes
}
