
## Load image using resource name
This is similar to loading Bitmap from R.drawable.logo on Android or calling [UIImage imageNamed@"logo"] on iOS. The method fromResource creates an ImageSource instance and loads it from the specified resource name.
<snippet id='start-fps-meter'/>

## Save image to PNG or JPG file
The method saveToFile(path: string, format: "png" | "jpeg" | "jpg", quality?: number): boolean saves ImageSource instance to the specified file, using the provided image format and quality. The supported formats are png, jpeg, and jpg. The quality parameter is optional and defaults to maximum quality. Returns true if the file is saved successfully.
<snippet id='stop-fps-meter'/>

## Load image from a local file
Use fromFile(path: string): Promise<boolean> to load an ImageSource instance from the specified file asynchronously.
<snippet id='stop-fps-meter'/>

## Save image from image asset to PNG file
Use fromAsset(asset: ImageAsset): Promise<ImageSource> to load ImageSource from the specified ImageAsset asynchronously.
<snippet id='stop-fps-meter'/>

## Creating base64 string from PNG image file
The method toBase64String(format: "png" | "jpeg" | "jpg", quality?: number): string converts the image to base64 encoded string, using the provided image format and quality. The supported formats are png, jpeg, and jpg. The quality parameter is optional and defaults to maximum quality.
<snippet id='stop-fps-meter'/>

## Creating PNG image file from base64 string
The method fromBase64(source: string): Promise<boolean> loads this instance from the specified base64 encoded string asynchronously.
<snippet id='stop-fps-meter'/>