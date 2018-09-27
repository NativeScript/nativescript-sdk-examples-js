import { Observable, fromObject } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array";

const listArray = new ObservableArray(
    [
        fromObject({
            name: "Joyce Dean",
            age: 20
        }),
        fromObject({
            name: "Joel Robertson",
            age: 15
        }),
        fromObject({
            name: "Sherman Martin",
            age: 35
        }),
        fromObject({
            name: "Lela Richardson",
            age: 40
        }),
        fromObject({
            name: "Jackie Maldonado",
            age: 17
        }),
        fromObject({
            name: "Kathryn Byrd",
            age: 18
        }),
        fromObject({
            name: "Ervin Powers",
            age: 50
        }),
        fromObject({
            name: "Leland Warner",
            age: 12
        }),
        fromObject({
            name: "Nicholas Bowers",
            age: 45
        }),
        fromObject({
            name: "Alex Soto",
            age: 46
        }),
        fromObject({
            name: "Naomi Carson",
            age: 11
        }),
        fromObject({
            name: "Rufus Edwards",
            age: 65
        }),
        fromObject({
            name: "Ian Ellis",
            age: 17
        }),
        fromObject({
            name: "Pat Vasquez",
            age: 20
        }),
        fromObject({
            name: "Chelsea Burton",
            age: 30
        }),
        fromObject({
            name: "Karl Bates",
            age: 20
        }),
        fromObject({
            name: "Evan Rivera",
            age: 40
        }),
        fromObject({
            name: "Tony Lawson",
            age: 16
        }),
        fromObject({
            name: "Wallace Little",
            age: 20
        }),
        fromObject({
            name: "Carrie Tran",
            age: 23
        }),
        fromObject({
            name: "Tyler Washington",
            age: 18
        })
    ]
);
export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    vm.set("listArray", listArray);

    page.bindingContext = vm;
}

// >> listview-create-selector-function-code-ts
export function selectItemTemplate(item, index, items) {
    return item.age % 2 === 0 ? "even" : "odd";
}
// << listview-create-selector-function-code-ts
