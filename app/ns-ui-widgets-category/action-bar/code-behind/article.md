The `ActionBar` can be dynamically created and controlled.
The property `navigationButton` allows us to overwrite the default navigation button (if one is present).
To explicitly show/hide an action bar on your page, use the `actionBarHidden` property of the current page.
<snippet id='actionbar-code-behind'/>
<snippet id='actionbar-code-behind-ts'/>

> iOS Specifics: The default text of the button is the title of the previous page; you can change it by setting the `text` property as shown in the example [Setting the Text Title](#setting-the-title-text).
In iOS, the back button is used explicitly for navigation. It navigates to the previous page and you cannot handle the `tap` event to override this behavior. If you want to place a button on the left side of the `ActionBar` and handle the tap event (e.g., show slide-out), you can use `ActionItem` with `ios.position="left"`.

> Android Specifics: In Android, you cannot set text inside the navigation button. You can use the `icon` property to set an image (e.g., `~\images\nav-image.png` or `res:\\ic_nav`). You can use `android.systemIcon` to set one of the system icons available in Android. In this case, there is no default behaviour for NavigationButton's `tap` event, and we should define manually the callback function, which will be executed. 