import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
// >> textfield-import
import { TextField } from "tns-core-modules/ui/text-field";
// << textfield-import
// >> creating-text-field-code-ts
export function onPageLoaded(args) {
    const page = <Page>args.object;
    const vm = new Observable();
    const stackLayout: StackLayout = <StackLayout>page.getViewById("stackLayoutId");

    vm.set("username", "john");
    vm.set("tfResult", "");
    vm.set("secureButton", "TextField secure:(OFF)");
    vm.set("secure", false);
    // changing TextField secure property value on button tap
    vm.set("onTap", (btargs) => {
        const secure = vm.get("secure");
        vm.set("secure", !secure);
        if (secure) {
            vm.set("secureButton", "TextField secure:(OFF)");
        } else {
            vm.set("secureButton", "TextField secure:(ON)");
        }
    });
    // creating new TextField and binding the text property
    const options = {
        sourceProperty: "username",
        targetProperty: "text"
    };
    const firstTextField = new TextField();
    firstTextField.updateTextTrigger = "textChanged";
    firstTextField.bind(options, vm);
    // registering for the TextField text change listener
    firstTextField.on("textChange", (argstf) => {

        vm.set("tfResult", (<TextField>argstf.object).text);
    });


    // creating new TextField and binding the secure property
    const secondOptions = {
        sourceProperty: "secure",
        targetProperty: "secure"
    };
    const secondTextField = new TextField();
    secondTextField.bind(secondOptions, vm);

    stackLayout.addChild(firstTextField);
    stackLayout.addChild(secondTextField);

    page.bindingContext = vm;
}
// << creating-text-field-code-ts
