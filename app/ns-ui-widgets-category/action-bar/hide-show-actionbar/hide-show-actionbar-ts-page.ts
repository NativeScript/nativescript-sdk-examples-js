import * as app from "tns-core-modules/application";
import { Frame } from "tns-core-modules/ui/frame";
// >> action-bar-hide-show-ts
import { EventData, Observable } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page } from "tns-core-modules/ui/page";
import { GestureEventData } from "tns-core-modules/ui/gestures";

let value: boolean = false;

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const vm = new Observable();
    vm.set("abHidden", value);
    page.bindingContext = vm;
}

export function onTap(args: GestureEventData) {
    const page = (<Button>args.object).page;
    const vm = page.bindingContext;
    value = !value;
    vm.set("abHidden", value);
}
// << action-bar-hide-show-ts
function onPageUnloaded() {
    let rootView: Frame = <Frame>app.getRootView();
    rootView.actionBarVisibility = "auto";
}
exports.onPageUnloaded = onPageUnloaded;
// >> action-bar-action-bar-visibiloty-ts
function onAutoTap(args) {
    const page = (<Button>args.object).page;
    const vm = page.bindingContext;
    let rootView: Frame = <Frame>app.getRootView();
    rootView.actionBarVisibility = "auto";
    vm.set("abHidden", false);
}
exports.onAutoTap = onAutoTap;
function onNeverTap(args) {
    const page = (<Button>args.object).page;
    const vm = page.bindingContext;
    let rootView: Frame = <Frame>app.getRootView();
    rootView.actionBarVisibility = "never";
    vm.set("abHidden", true);
}
exports.onNeverTap = onNeverTap;
function onAlwaysTap(args) {
    const page = (<Button>args.object).page;
    const vm = page.bindingContext;
    let rootView: Frame = <Frame>app.getRootView();
    rootView.actionBarVisibility = "always";
    rootView.requestLayout();
    vm.set("abHidden", false);
}
exports.onAlwaysTap = onAlwaysTap;
// << action-bar-action-bar-visibiloty-ts
