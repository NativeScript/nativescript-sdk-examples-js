// >> nav-context-pass
exports.onNavigate = function(args) {
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
};
// << nav-context-pass
