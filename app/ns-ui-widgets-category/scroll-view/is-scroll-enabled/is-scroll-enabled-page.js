// >> scroll-view-is-enabled-js
const observableModule = require("tns-core-modules/data/observable");

function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = observableModule.fromObject({ scrollEnabled: true });
}

function onTap(args) {
    const page = args.object.page;
    const viewModel = page.bindingContext;
    viewModel.scrollEnabled = !viewModel.scrollEnabled;

}

exports.onPageLoaded = onPageLoaded;
exports.onTap = onTap;
// << scroll-view-is-enabled-js
