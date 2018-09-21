You can explicitly control the visibility of the `ActionBar` by setting the `actionBarHidden` property of the `Page`.

<snippet id='action-bar-hide-show-xml'/>
<snippet id='action-bar-hide-show-js'/>
<snippet id='action-bar-hide-show-ts'/>

In **Android**, the application bar is visible by default and shows the name of the application as title. The navigation button is visible only when it is explicitly defined in the application.

In **iOS**, if the application bar is empty (e.g., no title or action items are defined), it is hidden on the first page and automatically shown after navigation to host the navigation button. If the ActionBar is not empty (e.g., there is a title or action items defined) it will be shown on first page, too.
