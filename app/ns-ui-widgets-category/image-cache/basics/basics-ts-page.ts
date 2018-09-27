// >> image-cache-require-ts
import { Cache } from "tns-core-modules/ui/image-cache";
// << image-cache-require-ts
import { EventData, Observable } from "tns-core-modules/data/observable";
import { fromFile, fromNativeSource } from "tns-core-modules/image-source";
import { Page } from "tns-core-modules/ui/page";

export function onLoaded(args: EventData) {
    const page = <Page>args.object;
    const vm = new Observable();

    cacheImage(vm);

    page.bindingContext = vm;
}

function cacheImage(viewModel) {
    // >> image-cache-code-ts
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
    const myImage = cache.get(url);

    if (myImage) {
        // If present -- use it.
        cachedImageSource = fromNativeSource(myImage);
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
    // << image-cache-code-ts
}
