You can explicitly control the visibility of the `ActionBar` by setting the `actionBarHidden` property of the `Page`.

<snippet id='action-bar-hide-show-xml'/>
<snippet id='action-bar-hide-show-js'/>
<snippet id='action-bar-hide-show-ts'/>

In **Android**, the application bar is visible by default and shows the name of the application as title. The navigation button is visible only when it is explicitly defined in the application.

In **iOS**, if the application bar is empty (e.g., no title or action items are defined), it is hidden on the first page and automatically shown after navigation to host the navigation button. If the ActionBar is not empty (e.g., there is a title or action items defined) it will be shown on first page, too.

Тhе `actionBarVisibility` is a property that used to control the visibility the Navigation Bar in iOS and the Action Bar in Android for the whole application. It should be set directly to the `Frame` and has three option values `auto`, `never`, `always`. 

`auto` - this is the default `actionBarVisibility` value and allows to specify the `ActionBar` visibility for each `Page` individually. 
`never` - this value hides the `ActionBar` for the whole application.
`always` - this one specifies that the `ActionBar` component should always be displayed.

> Note: If you have set up some of the two properties(`never`, `always`) and you need to hide/show the `ActionBar` immediately in the currently loaded page, you need to set `Page`'s `actionBarHidden` property to `true` or `false`.

<snippet id='frame-reference-get-id-xml'/>
<snippet id='action-bar-action-bar-visibiloty-js'/>
<snippet id='action-bar-action-bar-visibiloty-ts'/>
