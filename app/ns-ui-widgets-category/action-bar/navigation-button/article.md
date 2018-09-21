The `NavigationButton` component is a common abstraction over the iOS back button and the Android navigation button.

<snippet id='action-bar-nav-btn-xml'/>
<snippet id='action-bar-nav-btn-js'/>
<snippet id='action-bar-nav-btn-ts'/>

### iOS Specifics

The default text of the button is the title of the previous page; you can change it by setting the `text` property as shown in the example [Setting the Text Title](#setting-the-title-text).
In iOS, the back button is used explicitly for navigation. It navigates to the previous page and you cannot handle the `tap` event to override this behavior.

If you want to place a button on the left side of the `ActionBar` and handle the tap event (e.g., show slide-out), you can use `ActionItem` with `ios.position="left"`.

### Android Specifics

In Android, you cannot set text inside the navigation button. You can use the `icon` property to set an image (e.g., `~\images\nav-image.png` or `res:\\ic_nav`). You can use `android.systemIcon` to set one of the system icons available in Android. In this case, there is no default behaviour for NavigationButton's `tap` event, and we should define manually the callback function, which will be executed.