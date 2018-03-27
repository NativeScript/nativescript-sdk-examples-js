const observableModule = require("tns-core-modules/data/observable");
const observableArrayModule = require("tns-core-modules/data/observable-array");

const listArray = new observableArrayModule.ObservableArray(
    [
        observableModule.fromObject({
            name:"Joyce Dean",
            age: 20
        }),
        observableModule.fromObject({
            name:"Joel Robertson",
            age: 15
        }),
        observableModule.fromObject({
            name:"Sherman Martin",
            age: 35
        }),
        observableModule.fromObject({
            name:"Lela Richardson",
            age: 40
        }),
        observableModule.fromObject({
            name:"Jackie Maldonado",
            age: 17
        }),
        observableModule.fromObject({
            name:"Kathryn Byrd",
            age:18
        }),
        observableModule.fromObject({
            name:"Ervin Powers",
            age: 50
        }),
        observableModule.fromObject({
            name:"Leland Warner",
            age: 12
        }),
        observableModule.fromObject({
            name:"Nicholas Bowers",
            age: 45
        }),
        observableModule.fromObject({
            name:"Alex Soto",
            age: 46
        }),
        observableModule.fromObject({
            name:"Naomi Carson",
            age: 11
        }),
        observableModule.fromObject({
            name:"Rufus Edwards",
            age: 65
        }),
        observableModule.fromObject({
            name:"Ian Ellis",
            age: 17
        }),
        observableModule.fromObject({
            name:"Pat Vasquez",
            age: 20
        }),
        observableModule.fromObject({
            name:"Chelsea Burton",
            age: 30
        }),
        observableModule.fromObject({
            name:"Karl Bates",
            age: 20
        }),
        observableModule.fromObject({
            name:"Evan Rivera",
            age: 40
        }),
        observableModule.fromObject({
            name:"Tony Lawson",
            age: 16
        }),
        observableModule.fromObject({
            name:"Wallace Little",
            age: 20
        }),
        observableModule.fromObject({
            name:"Carrie Tran",
            age: 23
        }),
        observableModule.fromObject({
            name:"Tyler Washington",
            age: 18
        })
    ]
);
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();

    vm.set("listArray", listArray);

    page.bindingContext = vm;
}

// >> listview-create-selector-function-code
function selectItemTemplate(item, index, items) {
    return item.age % 2 === 0 ? "even" : "odd";
}
// << listview-create-selector-function-code
exports.onNavigatingTo = onNavigatingTo;
exports.selectItemTemplate = selectItemTemplate;
