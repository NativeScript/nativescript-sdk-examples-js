let observableModule = require("tns-core-modules/data/observable");
let searchBarModule  = require("tns-core-modules/ui/search-bar");
// >> creating-search-bar-code
function onPageLoaded(args) {
    let page = args.object;
    let vm = new observableModule.Observable();
    let stackLayout = page.getViewById("stackLayoutId");

    vm.set("sbResult", "");
    // creating new SearchBar
    var searchBar = new searchBarModule.SearchBar();
    // set up SearchBar submit event
    searchBar.on(searchBarModule.SearchBar.submitEvent, function (args) { 
        console.log("Search for " + args.object.text);
        alert("Search for " + args.object.text);
    });
    // set up SearchBar clear event
    searchBar.on(searchBarModule.SearchBar.clearEvent, function (args) {
        console.log("Clear");
        alert("Clear SearchBar text");
    });

    searchBar.on("textChange", (args) => {
        vm.set("sbResult", args.object.text)
    })


    stackLayout.addChild(searchBar);

    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
// << creating-search-bar-code