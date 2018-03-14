var observableModule = require("tns-core-modules/data/observable");
let textFieldModule = require("tns-core-modules/ui/text-field")
// >> creating-text-field-code
function onPageLoaded (args) {
    let page = args.object;
    let vm = new observableModule.Observable();
    let stackLayout = page.getViewById("stackLayoutId");

    vm.set("username", "john");
    vm.set("tfResult", "");
    vm.set("secureButton", "TextField secure:(OFF)");
    vm.set("secure", false);
    
    vm.set("onTap", (btargs)=>{
       let secure = vm.get("secure")
       vm.set("secure", !secure);
        if(secure){
            vm.set("secureButton","TextField secure:(OFF)");
        }
        else{
            vm.set("secureButton","TextField secure:(ON)");
        }
    });

    var options = {
        sourceProperty: "username",
        targetProperty: "text"
    }
    let firstTextField = new textFieldModule.TextField();
    firstTextField.updateTextTrigger="textChanged";
    firstTextField.bind(options, vm);
    firstTextField.on("textChange", function(args){
        vm.set("tfResult", args.object.text);
    })

    

    var secondOptions = {
        sourceProperty: "secure",
        targetProperty: "secure"
    }
    let secondTextField = new textFieldModule.TextField();
    secondTextField.bind(secondOptions, vm);
    
    stackLayout.addChild(firstTextField);
    stackLayout.addChild(secondTextField);

    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
// << creating-text-field-code