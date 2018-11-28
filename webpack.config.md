Add the following `test.html`for the WebView exmaple via the ollowing line in `webpack.config.js`

```JS
new CopyWebpackPlugin([
    { from: { glob: "ns-ui-widgets-category/web-view/source-load/*.html" } }, 
    { from: { glob: "ns-ui-widgets-category/placeholder/platform-files/*.ts" } },
    { from: { glob: "fonts/**" } },
    { from: { glob: "**/*.jpg" } },
    { from: { glob: "**/*.png" } },
]
```