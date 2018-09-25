The example demonstrates different ways, how we could receive content from a server while making HTTP GET request.

The `getString` method allows us to make a request and to get the response body as a string value.
<snippet id='get-string-code'/>
<snippet id='get-string-code-ts'/>

The `getJSON` give us a simple way to get the response body as JSON object and to access the data while using all benefits of the JSON.
<snippet id='get-json-code'/>
<snippet id='get-json-code-ts'/>

`getImage` allow us to get an image from a specific URL. The returned object will be ImageSource and it could be used for direct displaying the source into Image view.
<snippet id='get-image-code'/>
<snippet id='get-image-code-ts'/>

With `request` method we can make a request and check the response status code by accessing `statusCode` property.
<snippet id='request-status-code'/>
<snippet id='request-status-code-ts'/>

The example demonstrates, how to get the request-response header and how to access the available data in it.
<snippet id='request-response-header'/>
<snippet id='request-response-header-ts'/>

The example demonstrates, how to get the request-response content and how to represent the received data as a `String` value or `JSON` object. We could also use `toImage` method when we download an image.
<snippet id='request-response-content'/>
<snippet id='request-response-content-ts'/>

The example demonstrates how to download a file while using `getFile` method.
<snippet id='get-file-code'/>
<snippet id='get-file-code-ts'/>

> Note: By default the file will be saved in Documents folder.

In the `getFile` method we could also specify the path, where the file to be saved. This scenario is demonstrated in the example below, where the image file will be kept in the current application folder.
<snippet id='get-file-code-with-path'/>
<snippet id='get-file-code-with-path-ts'/>
