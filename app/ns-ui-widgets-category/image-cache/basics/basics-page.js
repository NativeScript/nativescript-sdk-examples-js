// >> image-cache-require
import { Cache } from "@nativescript/core/ui/image-cache";
// << image-cache-require
import { ImageSource, Observable } from "@nativescript/core";
export function onLoaded(args) {
    const page = args.object;
    const vm = new Observable();

    cacheImage(vm);

    page.bindingContext = vm;
}

function cacheImage(viewModel) {
    // >> image-cache-code
    const cache = new Cache();
    cache.placeholder = ImageSource.fromFileSync("~/images/logo.png");
    cache.maxRequests = 5;

    // set the placeholder while the desired image is downloaded
    viewModel.set("imageSource", cache.placeholder);

    // Enable download while not scrolling
    cache.enableDownload();

    let cachedImageSource;
    const url = "https://avatars1.githubusercontent.com/u/7392261?v=4";
    // Try to read the image from the cache
    const image = cache.get(url);

    if (image) {
        // If present -- use it.
        cachedImageSource = new ImageSource(image);
        viewModel.set("imageSource", cachedImageSource);
    } else {
        // If not present -- request its download + put it in the cache.
        cache.push({
            key: url,
            url: url,
            completed: (image, key) => {
                if (url === key) {
                    cachedImageSource = new ImageSource(image);
                    viewModel.set("imageSource", cachedImageSource); // set the downloaded image
                }
            }
        });
    }

    // Disable download while scrolling
    cache.disableDownload();
    // << image-cache-codes
}
