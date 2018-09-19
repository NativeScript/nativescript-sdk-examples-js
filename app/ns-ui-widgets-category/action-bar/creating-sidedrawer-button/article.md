This example shows how to implement a "show side-drawer button" functionality.

<snippet id='action-bar-sidedrawer-btn-xml'/>

For Android, this example uses the `NavigationButton` because `ActionItems` are shown on the right side of the `ActionBar`.

For iOS, this code adds a regular `ActionItem` with `position` set to `left`. Using the `NavigationButton` as a side-drawer button in iOS is not possible, because its function is to always navigate back in the application.

>Note: The `<android>` and `<ios>` tags are used inside the XML to define platform-specific elements.
>Important: The platform specific tags (`<android>` and `<ios>`) will work only in non-Angular based project.


