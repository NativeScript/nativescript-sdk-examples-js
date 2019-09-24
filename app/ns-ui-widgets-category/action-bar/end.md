## Tips And Tricks

### Setting App Icon For Android

You can set the application icon only for Android. By default, the application icon is hidden. You can show it by setting the android.iconVisibility property to always.

<snippet id='action-bar-setting-app-icon'/>

### Hiding Action Items

You can use the `visibility` property of the `ActionItem` to dynamically hide and show items. You can also use binding for the visibility.

Here is an example of showing different action items when the app is in "editing" mode:

<snippet id='action-bar-hiding-action-items-xml'/>
<snippet id='action-bar-hiding-action-items-js'/>
<snippet id='action-bar-hiding-action-items-ts'/>

### Hide Show ActionBar

You can explicitly control the visibility of the `ActionBar` by setting the `actionBarHidden` property of the `Page`or setting the `Frame`'s [`actionBarVisibility`]({% slug frame %}) property.

<snippet id='action-bar-hide-show-xml'/>
<snippet id='action-bar-hide-show-js'/>
<snippet id='action-bar-hide-show-ts'/>

In **Android**, the application bar is visible by default and shows the name of the application as title. The navigation button is visible only when it is explicitly defined in the application.

In **iOS**, if the application bar is empty (e.g., no title or action items are defined), it is hidden on the first page and automatically shown after navigation to host the navigation button. If the ActionBar is not empty (e.g., there is a title or action items defined) it will be shown on first page, too.

### Custom Title View

You could set a custom view, which will be rendered instead of the ActionItem text. The example below demonstrates, how to load to separate labels inside the item.

<snippet id='action-bar-custom-title-view-xml'/>

### Creating SideDrawer Button

This example shows how to implement a "show side-drawer button" functionality.

<snippet id='action-bar-sidedrawer-btn-xml'/>

For Android, this example uses the `NavigationButton` because `ActionItems` are shown on the right side of the `ActionBar`.

For iOS, this code adds a regular `ActionItem` with `position` set to `left`. Using the `NavigationButton` as a side-drawer button in iOS is not possible, because its function is to always navigate back in the application.

>Note: The `<android>` and `<ios>` tags are used inside the XML to define platform-specific elements.
>Important: The platform specific tags (`<android>` and `<ios>`) will work only in non-Angular based project.


### Creating ActionBar via Code-Behind

The `ActionBar` can be dynamically created and controlled.
The property `navigationButton` allows us to overwrite the default navigation button (if one is present).
To explicitly show/hide an action bar on your page, use the `actionBarHidden` property of the current page.
<snippet id='actionbar-code-behind'/>
<snippet id='actionbar-code-behind-ts'/>

> iOS Specifics: The default text of the button is the title of the previous page; you can change it by setting the `text` property as shown in the example [Setting the Text Title](#setting-the-title-text).
In iOS, the back button is used explicitly for navigation. It navigates to the previous page and you cannot handle the `tap` event to override this behavior. If you want to place a button on the left side of the `ActionBar` and handle the tap event (e.g., show slide-out), you can use `ActionItem` with `ios.position="left"`.

> Android Specifics: In Android, you cannot set text inside the navigation button. You can use the `icon` property to set an image (e.g., `~\images\nav-image.png` or `res:\\ic_nav`). You can use `android.systemIcon` to set one of the system icons available in Android. In this case, there is no default behaviour for NavigationButton's `tap` event, and we should define manually the callback function, which will be executed. 

## Properties

### ActionBar Properties

| Name      | Type     | Description    |
|:----------|:---------|:---------------|
| `title`   | `string` | Gets or sets the action bar title. |
| `titleView` | [View](https://docs.nativescript.org/api-reference/classes/_ui_core_view_.view) | Gets or sets the title view. When set - replaces the title with a custom view. |

### ActionItem Properties
| Name     | Type     | Description    |
|:---------|:---------|:---------------|
| `text`   | `string` | Gets or sets the text of the action item. |
| `icon`   | `string` | Gets or sets the icon of the action item. Supports local images (`~/`), resources (`res://`) and icon fonts (`fonts://`)|
| `ios.position`   | `enum`: _"left"_, _"right"_ | Sets the position of the item (default value is `left`). |
| `android.position`   | `enum`: _"actionBar"_, _"popup"_, _"actionBarIfRoom"_ | Sets the position of the item (default value is `actionBar`). |
| `ios.systemIcon`   | `number` | **iOS only** Sets the icon of the action item while using [UIBarButtonSystemIcon](https://developer.apple.com/documentation/uikit/uibarbuttonsystemitem) enumeration. |
| `android.systemIcon`   | `string` | **Android only** Sets a path to a resource icon ( see the [list of Android system drawables](https://developer.android.com/reference/android/R.drawable)) |


### NavigationButton Properties

| Name     | Type     | Description    |
|:---------|:---------|:---------------|
| `text`   | `string` | Gets or sets the text of the action item. |
| `icon`   | `string` | Gets or sets the icon of the action item. |

## Events

| Name        | Description    |
|:------------|:---------------|
| `loaded`               | Emitted when the view is loaded.                 |
| `unloaded`             | Emitted when the view is unloaded.               |
| `layoutChanged`        | Emitted when the layout bounds of a view changes due to layout processing. |

## API References

| Name               | Type     | 
|:-------------------|:---------|
| [ActionBar](https://docs.nativescript.org/api-reference/modules/_ui_action_bar_)                 | `Module` | 
| [ActionBar](https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionbar)       | `Class`  | 
| [ActionItem](https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionitem )    | `Class`  | 
| [ActionItems](https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionitems)   | `Class`  |
| [NavigationButton](https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.navigationbutton) | `Class`  |

## Native Component

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.Toolbar](https://developer.android.com/reference/android/widget/Toolbar.html) | [UIView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIView_Class/) | 


## See Also

[Detailed documentation article about `ActionBar` functionalities.](https://docs.nativescript.org/ui/action-bar)