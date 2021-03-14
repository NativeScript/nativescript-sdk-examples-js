// >> scroll-view-event-code

export function onScroll(args) {
    const scrollView = args.object;

    console.log(`scrollX: ${args.scrollX}`);
    console.log(`scrollY: ${args.scrollY}`);
}

// << scroll-view-event-code
