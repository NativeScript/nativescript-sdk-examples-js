The navigation in NativeScript is based on the `Frame` API and using `navigate` method of the wanted frame.
To get a reference to the `Frame` instance you need use the following methods or properties:

- the [`topmost`](https://docs.nativescript.org/api-reference/modules/_ui_frame_#topmost) method from the `tns-core-modules/ui/frame` module. The  method returns the last navigated `Frame` instance or in case you are in a `TabView`, the currently selected tab item's `Frame` instance. For more complex cases or more control, you should use methods like `getFrameById` or the `frame` property of `Page` class.
<snippet id='frame-reference-topmost'/>
<snippet id='frame-reference-topmost-ts'/>

- the [`getFrameById`](https://docs.nativescript.org/api-reference/modules/_ui_frame_#getFrameById) method from the `tns-core-modules/ui/frame` module. This method allows you to get a reference to a `Frame` by a **id** that you specified on the element. Note that this searches for already navigated frames and won't find frames that are not yet displayed like in a modal view for example.
<snippet id='frame-reference-get-id-xml'/>
<snippet id='frame-reference-get-id'/>
<snippet id='frame-reference-get-id-ts'/>

- the `frame` property of [`Page`](https://docs.nativescript.org/api-reference/classes/_ui_page_.page) instance. Each `Page` instance carries information about the frame object which navigated to it in the `frame`  property. This lets you navigate with the `frame` property as well. 
<snippet id='frame-reference-via-frame-prop'/>
<snippet id='frame-reference-via-frame-prop-ts'/>

> **Note** We can get a reference to a `Frame` only for a frame that has been already loaded in the visual tree. Frames that are not still loaded (for example a `Frame` within a modal page that is not yet opened) can not be retrieved. 