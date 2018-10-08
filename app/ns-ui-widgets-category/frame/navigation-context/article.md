
#### Passing context during navigation

When you navigate to another page, you can pass context to the page with a `NavigationEntry` object. This approach provides finer control over navigation compared to other navigation approaches. For example, with a `NavigationEntry` you can also animate the navigation.

<snippet id='nav-context-pass'/>
<snippet id='nav-context-pass-ts'/>

#### Retreiving context during navigation

After your context is sent to the landing page, you can retrieve the context via the `navigationContext` property of your `Page` instance.

<snippet id='nav-context-receive'/>
<snippet id='nav-context-receive-ts'/>