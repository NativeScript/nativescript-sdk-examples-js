With NativeScript version 4.0.0 and above, we can navigate within a modal view. We need a root frame defaulting to our first modal view. With the `Frame` instance, we can navigate within the modal and with the help of [`closeModal`](https://docs.nativescript.org/api-reference/classes/_ui_core_view_base_.viewbase#closemodal) method, we can close the modal from any `View` instance.

Main page

<snippet id='main-page-xml-navigation' />
<snippet id='main-page-js-navigation' />
<snippet id='main-page-ts-navigation' />

Modal root
<snippet id='modal-root-xml-navigation' />
<snippet id='modal-root-xml-navigation-ts' />
First modal view
<snippet id='first-modal-view-xml-navigation' />
<snippet id='first-modal-view-js-navigation' />
<snippet id='first-modal-view-ts-navigation' />
Second modal view
<snippet id='second-modal-view-xml-navigation' />
<snippet id='second-modal-view-js-navigation' />
<snippet id='second-modal-view-ts-navigation' />
