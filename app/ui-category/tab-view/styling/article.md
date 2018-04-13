The following example shows how to use `selectedIndex` property and how to handle its change. In the sample code, you will also find how to change the TabView index via code behind as well as how to set up some platform specific styling properties.



For the TabView component could be set three different styling properties

* `selectedTabTextColor` (coresponding CSS property selected-tab-text-color ) - change the color of the text, while selecting some of the tabs.

* `tabBackgroundColor` (coresponding CSS property tab-background-color) - changing the background of the tabs.

* `textTransform` (coresponding CSS property text-transform) - setting up textTransform individual for every TabViewItem. Value options: capitalize, lowercase, none, uppercase.

* `androidSelectedTabHighlightColor`<sup>android specific property</sup> (coresponding CSS property `android-selected-tab-highlight-color`) - setup underline color of the `Tab`s in Android.

XML
<snippet id='tab-view-binding-xml'/>

JavaScript
<snippet id='tab-view-binding-code'/>
