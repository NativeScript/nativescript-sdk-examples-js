// >> nav-context-pass
export function onNavigate(args) {
    const button = args.object;
    const page = button.page;
    const frame = page.frame;

    const navEntryWithContext = {
        moduleName: "home/second-page",
        context: {
            name: "John",
            age: 25,
            isProgramer: true
        }
    };

    frame.navigate(navEntryWithContext);
}
// << nav-context-pass
// >> nav-context-pass-binding
const navEntryWithBindingContext = {
    moduleName: "home/second-ts-page",
    // when using bindingContext the landing page will automatically
    // receive and set this object as page.bindingContext with navigatedTo event
    bindingContext: {
        name: "John",
        age: 25,
        isProgramer: true
    }
};
// << nav-context-pass-binding
