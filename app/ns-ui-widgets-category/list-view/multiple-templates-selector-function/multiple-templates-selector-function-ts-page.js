"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var listArray = new observable_array_1.ObservableArray([
    observable_1.fromObject({
        name: "Joyce Dean",
        age: 20
    }),
    observable_1.fromObject({
        name: "Joel Robertson",
        age: 15
    }),
    observable_1.fromObject({
        name: "Sherman Martin",
        age: 35
    }),
    observable_1.fromObject({
        name: "Lela Richardson",
        age: 40
    }),
    observable_1.fromObject({
        name: "Jackie Maldonado",
        age: 17
    }),
    observable_1.fromObject({
        name: "Kathryn Byrd",
        age: 18
    }),
    observable_1.fromObject({
        name: "Ervin Powers",
        age: 50
    }),
    observable_1.fromObject({
        name: "Leland Warner",
        age: 12
    }),
    observable_1.fromObject({
        name: "Nicholas Bowers",
        age: 45
    }),
    observable_1.fromObject({
        name: "Alex Soto",
        age: 46
    }),
    observable_1.fromObject({
        name: "Naomi Carson",
        age: 11
    }),
    observable_1.fromObject({
        name: "Rufus Edwards",
        age: 65
    }),
    observable_1.fromObject({
        name: "Ian Ellis",
        age: 17
    }),
    observable_1.fromObject({
        name: "Pat Vasquez",
        age: 20
    }),
    observable_1.fromObject({
        name: "Chelsea Burton",
        age: 30
    }),
    observable_1.fromObject({
        name: "Karl Bates",
        age: 20
    }),
    observable_1.fromObject({
        name: "Evan Rivera",
        age: 40
    }),
    observable_1.fromObject({
        name: "Tony Lawson",
        age: 16
    }),
    observable_1.fromObject({
        name: "Wallace Little",
        age: 20
    }),
    observable_1.fromObject({
        name: "Carrie Tran",
        age: 23
    }),
    observable_1.fromObject({
        name: "Tyler Washington",
        age: 18
    })
]);
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("listArray", listArray);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function selectItemTemplate(item, index, items) {
    return item.age % 2 === 0 ? "even" : "odd";
}
exports.selectItemTemplate = selectItemTemplate;
