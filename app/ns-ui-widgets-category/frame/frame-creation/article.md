The frame should have the `defaultPage` property set (mandatory). The page passed as value for `defaultPage` will load on frame initialization.
The `id` property can be used to get a reference to the frame instance.
<snippet id='frame-reference-get-id-xml'/>

More complex application structure can be created by using multiple frame instances.For example, you can create a `TabView` while using different frames for each tab item.
```XML
<TabView>
    <TabViewItem title="First">
        <Frame id="firstFrame" defaultPage="home/home-page" />
    </TabViewItem>
    <TabViewItem title="Second">
        <Frame id="secondFrame" defaultPage="second/second-page" />
    </TabViewItem>
</TabView>
```