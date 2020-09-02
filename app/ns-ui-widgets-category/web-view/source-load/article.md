The example demonstrates, how to load content in the WebView component, while using a local file or while providing HTML code directly to its `src` property.

XML
<snippet id='web-view-xml-local-file'/>

Add WebView `src` from local file. You might need to add a glob for your HTML paths to the copy plugin in webpack.config.js. e.g. `new CopyWebpackPlugin([ { from: { glob: "www/*.html" } }]`

<snippet id='web-view-src-local-file'/>
<snippet id='web-view-src-local-file-ts'/>
