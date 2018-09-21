The code samples show, how we could use gestures in WebView for both platforms iOS and Android.

<snippet id='web-gestures-xml'/>
<snippet id='webview-js-gestures'/>
<snippet id='webview-js-gestures-ts'/>

>Note: to be able to use gestures in `WebView` component on Android, we should first disabled the zoom control. To do that we could access the `android` property and with the help of  `setDisplayZoomControls` to set this control to `false`.