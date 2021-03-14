// >> nav-context-receive
export function onNavigatedTo(args) {
    const page = args.object;
    const navigationContext = page.navigationContext;

    // The navigation event arguments are of type NavigatedData and provide another way to grab the passed context
    const context = args.context;

    page.bindingContext = navigationContext;
}
// << nav-context-receive
