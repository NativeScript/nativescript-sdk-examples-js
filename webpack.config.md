Add the following `test.html`for the WebView exmaple via the ollowing line in `webpack.config.js`

```JS
new CopyWebpackPlugin([
    { from: "ns-ui-widgets-category/web-view/source-load/*.html" }, // Add this line
    { from: "fonts/**" },
    { from: "**/*.jpg" },
    { from: "**/*.png" },
]
```