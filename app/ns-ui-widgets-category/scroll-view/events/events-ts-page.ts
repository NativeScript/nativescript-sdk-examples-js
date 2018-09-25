import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
// >> search-bar-import
import { ScrollEventData, ScrollView } from "tns-core-modules/ui/scroll-view";
// << search-bar-import
// >> scroll-view-event-code-ts
export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();

    vm.set("status", "not scrolling");

    page.bindingContext = vm;
}
export function onScroll(args: ScrollEventData) {
    const scrollview: ScrollView = <ScrollView>args.object;
    const page: Page = <Page>scrollview.page;
    const vm = page.bindingContext;
    vm.set("status", "scrolling");
    setTimeout(() => {
        vm.set("status", "not scrolling");
    }, 300);

    console.log(`scrollX:  ${args.scrollX}`);
    console.log(`scrollY: ${args.scrollY}`);
}
// << scroll-view-event-code-ts
