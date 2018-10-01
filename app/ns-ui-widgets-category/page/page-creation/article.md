Pages represent the separate screens of your application. Each page is an instance of the [`Page`](http://docs.nativescript.org/api-reference/classes/_ui_page_.page.html) module. Each class instance inherits the [`ContentView`](http://docs.nativescript.org/api-reference/classes/_ui_content_view_.contentview.html) property which holds the root visual element of the UI.

NativeScript provides two approaches to instantiating your pages.

### Create a page in XML

You can define the UI declaration and the code for the page separately.

To apply this approach, create an `XML` file for each page to hold the layout of the page. Thus your code will be in a `JS` or a `TS` file. The names of the `XML` and the `JS` or `TS` file must match.
<snippet id='page-creation-xml'/>
<snippet id='page-creation-js'/>
<snippet id='page-creation-ts'/>

### Create a page via code

To apply this approach, you need to create a function named `createPage` that will return an instance of your page. NativeScript considers `createPage` a factory function.
<snippet id='page-code-create-js'/>
<snippet id='page-code-create-ts'/>
