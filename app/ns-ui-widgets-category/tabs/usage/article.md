The `Tabs` component contains two sub-components:
- The `TabStrip` which defines and rendres the bottom bar and its `TabStripItem` components.
- Multiple `TabContentItem` components which total number should be equal to the number of the tabs (`TabStripItem` components). Each `TabContentItem` acts as a container for your tab content.

<snippet id='tabs-usage-xml'/>

> **Note:** The number of `TabStripItem` components must be equal to the number of `tabContentItem` components.on

### Dynamic Creation

To create a `Tabs` component programatically, we need to use special properties for creating each `TabStripItem`. Those properties are `title`, `iconSource` and `iconClass` (that are used to create the coresponding `Label` and `Image`).

```JavaScript
let tabs = new Tabs();
let tabStrip = new TabStrip();

let tabStripItem1 = new TabStripItem();
tabStripItem1.title = "Tab 1";
tabStripItem1.iconSource = "font://" + String.fromCharCode(charCode1);
tabStripItem1.iconClass = "far"; // e.g., FontAвесоме

let tabStripItem2 = new TabStripItem();
tabStripItem2.title = "Tab 2";
tabStripItem2.iconSource = "font://" + String.fromCharCode(charCode2);
tabStripItem2.iconClass = "far"; // e.g., FontAвесоме

let tabStripItems = [tabStripItem1, tabStripItem2];
tabStrip.items = tabStripItems;

let contentItems = [conterntItem1, contentItem2]; // where contentItem1 and 2 are the layouts/frames that holds the actual content

tabs.tabStrip = tabStrip;
tabs.items = contentItems;

let stack = new StackLayout(); // the ""simple rule
stack.addChild(tabs)
somePage.content = stack; // base example for adding the newly created Tabs to the current page
```

