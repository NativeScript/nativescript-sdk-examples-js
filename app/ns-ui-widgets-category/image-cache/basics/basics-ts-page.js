"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_cache_1 = require("tns-core-modules/ui/image-cache");
var observable_1 = require("tns-core-modules/data/observable");
var image_source_1 = require("tns-core-modules/image-source");
function onLoaded(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    cacheImage(vm);
    page.bindingContext = vm;
}
exports.onLoaded = onLoaded;
function cacheImage(viewModel) {
    var cache = new image_cache_1.Cache();
    cache.placeholder = image_source_1.fromFile("~/images/logo.png");
    cache.maxRequests = 5;
    viewModel.set("imageSource", cache.placeholder);
    cache.enableDownload();
    var cachedImageSource;
    var url = "https://avatars1.githubusercontent.com/u/7392261?v=4";
    var myImage = cache.get(url);
    if (myImage) {
        cachedImageSource = image_source_1.fromNativeSource(myImage);
        viewModel.set("imageSource", cachedImageSource);
    }
    else {
        cache.push({
            key: url,
            url: url,
            completed: function (image, key) {
                if (url === key) {
                    cachedImageSource = image_source_1.fromNativeSource(image);
                    viewModel.set("imageSource", cachedImageSource);
                }
            }
        });
    }
    cache.disableDownload();
}
