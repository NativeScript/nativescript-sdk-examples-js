// >> page-events-ts
import { EventData, NavigatedData } from "@nativescript/core";

export function onNavigatingTo(args: NavigatedData) {
    console.log(args.eventName);
    console.log(args.object);
    console.log(args.context);
    console.log(args.isBackNavigation);
}

export function onPageLoaded(args: EventData) {
    console.log(args.eventName);
    console.log(args.object);
}

export function onLayoutChanged(args: EventData) {
    console.log(args.eventName);
    console.log(args.object);
}

export function onNavigatedTo(args: NavigatedData) {
    console.log(args.eventName);
    console.log(args.object);
    console.log(args.context);
    console.log(args.isBackNavigation);
}

export function onNavigatingFrom(args: NavigatedData) {
    console.log(args.eventName);
    console.log(args.object);
    console.log(args.context);
    console.log(args.isBackNavigation);
}

export function onUnloaded(args: EventData) {
    console.log(args.eventName);
    console.log(args.object);
}

export function onNavigatedFrom(args: NavigatedData) {
    console.log(args.eventName);
    console.log(args.object);
    console.log(args.context);
    console.log(args.isBackNavigation);
}
// << page-events-ts
