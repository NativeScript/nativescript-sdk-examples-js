import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
// >> progress-import
import { Progress } from "tns-core-modules/ui/progress";
// << progress-import
// >> creating-progress-code-ts
export function onPageLoaded(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();
    const stackLayout = <StackLayout>page.getViewById("stackLayoutId");

    vm.set("prResult", 0);
    // creating new Switch and binding the value property
    const progress = new Progress();
    progress.value = 0;
    setInterval(() => {
        progress.value += 2;
    }, 300);

    progress.on("valueChange", (pargs) => {
        vm.set("prResult", (<Progress>pargs.object).value);
    });

    stackLayout.addChild(progress);

    page.bindingContext = vm;
}
// << creating-progress-code-ts
