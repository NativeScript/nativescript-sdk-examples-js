
- `items: Array<TabContentItem>;` - Gets or sets the items of the BottomNavigation.

- `tabStrip: TabStrip;` - Gets or sets the tab strip of the BottomNavigation.

- `selectedIndex: number;` - Gets or sets the selectedIndex of the BottomNavigation.

- `swipeEnabled: boolean;` - Gets or sets the swipe enabled state of the Tabs.

- `offscreenTabLimit: number;` - Gets or sets the number of offscreen preloaded tabs of the Tabs.

- `tabsPosition: "top" | "bottom";` - Gets or sets the position state of the Tabs.

- `android: any` /* android.view.View */; - Gets the native [android widget](http://developer.android.com/reference/android/support/v4/view/ViewPager.html) that represents the user interface for this component. Valid only when running on Android OS.

- `ios: any` /* UIPageViewController */; - Gets the native iOS [UIPageViewController](https://developer.apple.com/documentation/uikit/uipageviewcontroller?language=objc) that represents the user interface for this component. Valid only when running on iOS.

<snippet id='tabs-properties-js'/>
<snippet id='tabs-properties-tsc'/>
<snippet id='tabs-properties-tsc-xml'>