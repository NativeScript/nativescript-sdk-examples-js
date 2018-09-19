The ActionBar has some CSS styling limitations. You can use only `background-color` and `color` properties. Here is an example:

<snippet id='actionbar-style-xml'/>
<snippet id='action-bar-style-css'/>

In iOS, the `color` property affects the color of the title and the action items.
In Android, the `color` property affects only the title text. However, you can set the default color of the text in the action items by adding an `actionMenuTextColor` item in the Android theme (inside `App_Resources\Android\values\styles.xml`).

>Note: Setting other CSS properties (e.g., `font-family`) will only affect the views defined inside `titleView`.
