With NativeScript version 4.0.0 and above, we can navigate within a modal page. We need a root frame defaulting to our first modal page. With the `Frame` instance, we can navigate within the modal and with the help of [`closeModal`](https://docs.nativescript.org/api-reference/classes/_ui_core_view_base_.viewbase#closemodal) method, we can close the modal from any `View` instance.

Main page
<snippet id='main-page-xml-navigation' />
<snippet id='main-page-js-navigation' />
Modal root
<snippet id='modal-root-xml-navigation' />
First modal page
<snippet id='first-modal-page-xml-navigation' />
<snippet id='first-modal-page-js-navigation' />
Second modal page
<snippet id='second-modal-page-xml-navigation' />
<snippet id='second-modal-page-js-navigation' />