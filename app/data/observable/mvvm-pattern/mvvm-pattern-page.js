
// >> mvvm-code-behind
const createViewModel = require("./main-view-model").createViewModel;

function onNavigatingTo(args) {
    const page = args.object;

    // using the view model as binding context for the current page
    const mainViewModel = createViewModel();
    page.bindingContext = mainViewModel;
}
exports.onNavigatingTo = onNavigatingTo;
// << mvvm-code-behind
