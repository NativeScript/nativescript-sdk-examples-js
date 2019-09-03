The `ActionBar` provides a `title` property and can be extended by using one or more `ActionItem` components and a single `NavigationButton`. The `ActionBar` also supports entirely  custom views (see the [Tips and Tricks](#tips-and-tricks) section below).

<snippet id='action-bar-basic-usage-xml'/>
<snippet id='action-bar-basic-usage-sdk-js'/>
<snippet id='action-bar-basic-usage-sdk-ts'/>

### ActionItem

The `ActionItem` components are supporting the platform-specific `position` and `systemIcon` for iOS and Android.

<snippet id='items-actionbar-xml'/>

- **Android** sets position via **`android.position`**:

    * **`actionBar`**: Puts the item in the `ActionBar`. Action item can be rendered both as text or icon.
    * **`popup`**: Puts the item in the options menu. Items will be rendered as text.
    * **`actionBarIfRoom`**: Puts the item in the `ActionBar` if there is room for it. Otherwise, puts it in the options menu.

- **iOS** sets position via **`ios.position`**:

    * **`left`**: Puts the item on the left side of the `ActionBar`.
    * **`right`**: Puts the item on the right side of the `ActionBar`.

### NavigationButton

The `NavigationButton` component is a common abstraction over the iOS back button and the Android navigation button.

> **iOS Specifics:** The default text of the navigation button is the title of the **previous** page. In iOS, the back button is used explicitly for navigation. It navigates to the previous page and you can't handle the tap event to override this behavior. If you want to place a button on the left side of the ActionBar and handle the tap event (e.g., show slide-out), you can use ActionItem with `ios.position="left"`. Values for `ios.systemIcon` are numbers from the [`UIBarButtonItem.SystemItem`](https://developer.apple.com/documentation/uikit/uibarbuttonitem/systemitem) enumeration:

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

> **Android Specifics:** In Android, you can't set text inside the navigation button. You can use the icon property to set an image (e.g., `~\images\nav-image.png` or `res:\\ic_nav`). You can use `android.systemIcon` to set one of the system icons available in Android. In this case, there is no default behaviour for `NavigationButton` tap event, and we should define manually the callback function, which will be executed.  You can use the `android.systemIcon` and `ios.systemIcon` properties to show system icons. If you define a system icon, it will be used instead of `icon` and `text` properties. Values for `android.systemIcon` correspond to the resources names of the built-in Android system icons. For a full list of Android drawable names, you may visit [Android Developer Site](https://developer.android.com/reference/android/R.drawable.html).



