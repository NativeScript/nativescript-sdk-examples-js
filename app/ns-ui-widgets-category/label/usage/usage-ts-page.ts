// >> label-text-binding-ts
import { EventData, Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

export function onNavigatingTo(args: EventData) {

    const page = <Page>args.object;
    const vm = new Observable();
    vm.set("title", "NativeScript is Awesome");
    page.bindingContext = vm;

}
// << label-text-binding-ts
