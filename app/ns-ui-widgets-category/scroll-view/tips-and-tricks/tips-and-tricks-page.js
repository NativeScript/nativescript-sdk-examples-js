// >> scroll-view-event-code

function onScroll(args) {
    const scrollView = args.object;

    console.log(`scrollX: ${args.scrollX}`);
    console.log(`scrollY: ${args.scrollY}`);
}

exports.onScroll = onScroll;
// << scroll-view-event-code
