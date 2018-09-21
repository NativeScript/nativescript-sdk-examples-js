You can define additional action buttons using the `actionItems` collection:

<snippet id='items-actionbar-xml'/>
<snippet id='items-actionbar-js'/>
<snippet id='items-actionbar-ts'/>

### Positioning

The following positioning options are available for iOS and Android.

Android (set with `android.position`):

* `actionBar`\[default\]: Puts the item in the ActionBar. Action item can be rendered both as text or icon.
* `popup`: Puts the item in the options menu. Items will be rendered as text.
* `actionBarIfRoom`: Puts the item in the ActionBar if there is room for it. Otherwise, puts it in the options menu.

iOS (set with `ios.position`):

* `left`\[default\]: Puts the item on the left side of the ActionBar.
* `right`: Puts the item on the right side of the ActionBar.

### Setting Icons

You can use the `icon` property to set an image instead of text for the action item. You can use local image (e.g., `~/images/add.png`) or resource (e.g., `res://ic_add`). Because there is no way to explicitly set `width` and `height` for icons, the recommended approach is using resources.

You can use the `android.systemIcon` and `ios.systemIcon` properties to show system icons. If you define a system icon, it will be used instead of `icon` and `text` properties.

Values for `android.systemIcon` correspond to the resources names of the built-in Android system icons. For a full list of Android drawable names, you may visit [Android Developer Site](https://developer.android.com/reference/android/R.drawable.html).

Values for `ios.systemIcon` are numbers from the [`UIBarButtonSystemItem`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIBarButtonItem_Class/index.html#//apple_ref/doc/uid/TP40007519-CH3-SW2) enumeration:

| Value | Icon           |     | Value | Icon          |
| ----- | -------------- | --- | ----- | ------------- |
|0      | Done           |     |12     | Search |
|1      | Cancel         |     |13     | Refresh |
|2      | Edit           |     |14     | Stop |
|3      | Save           |     |15     | Camera |
|4      | Add            |     |16     | Trash |
|5      | FlexibleSpace  |     |17     | Play |
|6      | FixedSpace     |     |18     | Pause |
|7      | Compose        |     |19     | Rewind |
|8      | Reply          |     |20     | FastForward |
|9      | Action         |     |21     | Undo |
|10     | Organize       |     |22     | Redo |
|11     | Bookmarks      |     |23     | PageCurl |
