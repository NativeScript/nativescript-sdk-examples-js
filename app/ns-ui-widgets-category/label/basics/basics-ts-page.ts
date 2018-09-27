import { EventData, Observable } from "tns-core-modules/data/observable";
import { Label } from "tns-core-modules/ui/label";
import { Page } from "tns-core-modules/ui/page";

export function onNavigatingTo(args: EventData) {
    // >> label-text-binding-ts
    const page = <Page>args.object;
    const vm = new Observable();
    vm.set("title", "NativeScript is Awesome");
    page.bindingContext = vm;
    // << label-text-binding-ts

    // >> label-accessing-text-ts
    const label = <Label>page.getViewById("lbl");
    label.text = "NativeScript is Awesome";
    label.textWrap = true;
    label.textAlignment = "center";
    // << label-accessing-text-ts
}
