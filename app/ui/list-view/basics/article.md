The example demonstrates how to set a `ListView` component in XML page and how to bind its items property to a collection in the view model.
In the sample is shown how to define custom UI while using ListView's `itemTemplate`.

<snippet id='list-view-create-xml'/>

<snippet id='list-view-create-code'/>

<snippet id='list-view-array'/>
> Note: Note, that changing the array after the list view is shown will not update the UI. You can force-update the UI using the refresh() method.

<snippet id='list-view-observable-array'/>
> Note: When using ObservableArray the list view will be automatically updated when items are added or removed form the array.