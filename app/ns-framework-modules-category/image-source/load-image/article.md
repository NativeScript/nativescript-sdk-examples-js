
## Load image using resource name
This is similar to loading Bitmap from R.drawable.logo on Android or calling [UIImage imageNamed@"logo"] on iOS. The method fromResource creates an ImageSource instance and loads it from the specified resource name.
<snippet id='image-source-from-resource'/>
<snippet id='image-source-from-resource-ts'/>

## Load image from a local file
Use fromFile(path: string): Promise<boolean> to load an ImageSource instance from the specified file asynchronously.
<snippet id='image-source-from-local-file'/>
<snippet id='image-source-from-local-file-ts'/>

## Creating PNG image file from base64 string
The method fromBase64(source: string): Promise<boolean> loads this instance from the specified base64 encoded string asynchronously.
<snippet id='image-source-base64'/>
<snippet id='image-source-base64-ts'/>
