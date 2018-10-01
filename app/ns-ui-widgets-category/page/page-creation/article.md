Pages represent the separate screens of your application. Each page is an instance of the `Page` class.

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
