// >> page-events
export function onNavigatingTo(args) {
    console.log(args.eventName);
    console.log(args.object);
    console.log(args.context);
    console.log(args.isBackNavigation);
}


export function onPageLoaded(args) {
    console.log(args.eventName);
    console.log(args.object);
}


export function onLayoutChanged(args) {
    console.log(args.eventName);
    console.log(args.object);
}

export function onNavigatedTo(args) {
    console.log(args.eventName);
    console.log(args.object);
    console.log(args.context);
    console.log(args.isBackNavigation);
}

export function onNavigatingFrom(args) {
    console.log(args.eventName);
    console.log(args.object);
    console.log(args.context);
    console.log(args.isBackNavigation);
}

export function onUnloaded(args) {
    console.log(args.eventName);
    console.log(args.object);
}

export function onNavigatedFrom(args) {
    console.log(args.eventName);
    console.log(args.object);
    console.log(args.context);
    console.log(args.isBackNavigation);
}
// << page-events
