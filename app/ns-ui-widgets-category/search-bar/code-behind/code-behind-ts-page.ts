const observableModule = require("tns-core-modules/data/observable");
const dialogs = require("tns-core-modules/ui/dialogs");
// >> search-bar-require
const searchBarModule = require("tns-core-modules/ui/search-bar");
// << search-bar-require
// >> creating-search-bar-code
function onPageLoaded(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    const stackLayout = page.getViewById("stackLayoutId");

    vm.set("sbResult", "");
    // creating new SearchBar
    const searchBar = new searchBarModule.SearchBar();
    // set up SearchBar submit event
    searchBar.on(searchBarModule.SearchBar.submitEvent, (args) => {
        console.log("Search for ", args.object.text);
        dialogs.alert(`Search for ${args.object.text}`)
        .then(() => {
            console.log("Dialog closed!");
        });
    });
    // set up SearchBar clear event
    searchBar.on(searchBarModule.SearchBar.clearEvent, (args) => {
        console.log("Clear");
        dialogs.alert("Clear SearchBar text")
        .then(() => {
            console.log("Dialog closed!");
        });
    });

    searchBar.on("textChange", (args) => {
        vm.set("sbResult", args.object.text);
    });


    stackLayout.addChild(searchBar);

    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
// << creating-search-bar-code
