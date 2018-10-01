Getting a reference to the current `Page` instance is a common scenario. The below examples are demonstrating different approaches to get `Page` reference.

### Reference via page events
The common navigaiton events and the View's `loaded` and `unloaded` event can be used to get a page reference.
<snippet id='page-reference-via-event'/>
<snippet id='page-reference-via-event-ts'/>

### Reference via page property

Each NativeScript view has a `page` property that can be used to get a page reference.
<snippet id='page-reference-via-page-prop'/>
<snippet id='page-reference-via-page-prop-ts'/>


### Reference via currentPage property

Each `Frame` instance has a `currentPage` property that can be used to get a page reference.
<snippet id='page-reference-via-currrent-page-prop'/>
<snippet id='page-reference-via-currrent-page-prop-ts'/>
