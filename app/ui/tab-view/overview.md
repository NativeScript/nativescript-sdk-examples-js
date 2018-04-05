The TabView component provides a simple way to navigate between different views by tapping on some of the tabs or by swiping between the views.
By default the TabView will load the view of the first tab, however it is possible to load alternative tabs when the app starts by setting the component’s `selectedIndex` property.

* [Basics](#basics)
* [Styling](#styling)
* [Code Behind](#code-behind)
* [Icon Fonts](#icon-fonts)
* [Tabs Position](#tab-position)<sup>Android Secific<sup>

<snippet id='text-view-require'/>

The items inside the TabView component are loaded on demand. This means that every TabViewItem view will be loaded when it is shown and will be unloaded when it disappears. Respectively loaded and unloaded events will be fired while showing or hiding each view.

> Note (iOS specific): `UITabBarController` is used in the implementation, which means that only one `TabViewItem` can be shown at a given time and only one needs to be loaded. When the user selects a new `TabViewItem`, we load the new item and unload the previous one.

> Note (Android specific): In the Android implementation is used `ViewPager` controller, which allows using the `swipe` gesture to navigate to the next or previous tab. This means that only one `TabViewItem` can be shown, but multiple `TabViewItems` need to be loaded. Otherwise, after left or right swipe, you will not see the `TabViewItem`'s contents, after the swiping. By default, the ViewPager controller will pre-load one `TabViewItem` on the left and on on the right. Regarding that, if one of the items is already pre-loaded, it will not be loaded again. In the Android, we have exposed a property called `androidOffscreenTabLimit`, which allow specifying, how many components should be pre-load on the left and right (if you are setting up `androidOffscreenTabLimit` to 0, the Android TabView will match to the iOS one). 
 
The iOS and Android UX guidelines regarding the Tab controls differ greatly. The difference is described in the below points:

* The iOS tabs have their tab bar on the bottom and do not allows swipe gesture for changing tabs.
* The Android tabs are on top and will enable the swipe navigation between the tabs.
* For Android we have `androidTabsPosition` property which has to options `top`(default value) and `bottom`. Setting up this property to `bottom` allows mimicking Bottom Tab Navigation control(provided by android support library v25 release). Setting the Tabs at the bottom will disable the swipe navigation and the items preloading functionality.