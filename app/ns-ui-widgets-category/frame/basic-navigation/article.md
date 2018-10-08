#### Default page
To load a default (initial) page in your application use the `defaultPage` property of the `Frame` element.
With the example below the applicaiton will load a page located in `<project-folder>/app/home/first-page.xml`
<snippet id='frame-nav-default-page'/>

#### Navigate by page name
To navigate between pages, you can use the [`navigate`](http://docs.nativescript.org/api-reference/classes/_ui_frame_.frame#navigate) method of the desired `Frame` instance.
<snippet id='frame-navigate-base'/>
<snippet id='frame-navigate-base-ts'/>

#### Navigate by NavigationEntry object
The `navigate` method accepst [`NavigationEntry`](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry) object 
<snippet id='frame-navigate-module'/>
<snippet id='frame-navigate-module-ts'/>
