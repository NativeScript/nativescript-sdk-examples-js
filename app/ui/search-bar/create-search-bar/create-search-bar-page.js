const observableModule = require("tns-core-modules/data/observable");
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
        alert(`Search for ${args.object.text}`);
    });
    // set up SearchBar clear event
    searchBar.on(searchBarModule.SearchBar.clearEvent, (args) => {
        console.log("Clear");
        alert("Clear SearchBar text");
    });

    searchBar.on("textChange", (args) => {
        vm.set("sbResult", args.object.text);
    });


    stackLayout.addChild(searchBar);

    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
// << creating-search-bar-code
