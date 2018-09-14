In a NativeScript application, `TabView` has an `items` property which could be set via XML to an array of `TabViewItems` (basically, an array of objects with `title`, `view` and `iconSource` properties). The following example shows how to add a `TabView` to your page:

XML
<snippet id='tab-view-basics-xml'/>

> Note: If you have set the `iconSource` property on a `TabViewItem`, but are not seeing any icons next to the title, this might be because the icon is not present in your App_Resources folder. See the [Working with Images]({%slug images#load-images-from-a-resource %}) article for information on how to add and reference your resource images.