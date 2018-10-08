
### Passing context during navigation

When you navigate to another page, you can pass context to the page with a `NavigationEntry` object. The navigaiton entry provides two different (optional) propertes to work with:
- The `context` property
<snippet id='nav-context-pass'/>
<snippet id='nav-context-pass-ts'/>

- The `bindingContext` property.
<snippet id='nav-context-pass-binding'/>
<snippet id='nav-context-pass-binding-ts'/>

Both properties are used to pass context while navigating, but the `bindingContext` property will automatically assign the binding context for the landing page.

### Retreiving context during navigation

Any context send with `bindingContext` is automatically assigned as binding context for the navigated (landing) page.
Retreiving a context send through the `context` property, can be achieved with two different approaches.
- Accessing the `navigationContext` property of your landing `Page` instance.
- Using the `navigatedTo` event and its arguments of type [`NavigatedData`](https://docs.nativescript.org/api-reference/interfaces/_ui_page_.navigateddata).

<snippet id='nav-context-receive'/>
<snippet id='nav-context-receive-ts'/>