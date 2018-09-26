The example demonstrates how to set a [`ListView`](http://docs.nativescript.org/api-reference/modules/_ui_list_view_.html) component in XML page and how to bind its items property to a collection in the view model. In the sample is shown how to define custom UI while using ListView's `itemTemplate`.

<snippet id='list-view-create-xml'/>
<snippet id='list-view-create-code'/>
<snippet id='list-view-create-code-ts'/>

> **Note:** The ListView's item template can contain only a single root view container.

In the example above, the items source property (`myTitles`) is an array and its members are not observable objects. This means that adding or removing array member won't trigger a property change. To update the UI, you will need to explicitly refresh the listview after an item is added or removed while using the `refresh` method.
<snippet id='list-view-refresh'/>
<snippet id='list-view-refresh-ts'/>

> **Tip:** Instead of manually triggering the UI update with the help of ListView's `refresh` method, NativeScript provides the `ObservableArray`. Using an `ObservableArray` for your listview's items surce will make its members an observable objects and adding/removing an array item will automatically update the UI.
```TypeScript
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
// Change the items source from Array to the NativeScript's ObservableArray
const titlesArray = new ObservableArray([
    { title: "The Da Vinci Code" },
    { title: "Harry Potter and the Chamber of Secrets" },
    { title: "The Alchemist" },
    { title: "The Godfather" },
    { title: "Goodnight Moon" },
    { title: "The Hobbit" }
]);
```

