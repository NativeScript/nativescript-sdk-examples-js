## Save image to PNG or JPG file
The method saveToFile(path: string, format: "png" | "jpeg" | "jpg", quality?: number): boolean saves ImageSource instance to the specified file, using the provided image format and quality. The supported formats are png, jpeg, and jpg. The quality parameter is optional and defaults to maximum quality. Returns true if the file is saved successfully.
<snippet id='image-source-save-from-file'/>
<snippet id='image-source-save-from-file-ts'/>

## Save image from image asset to PNG file
Use fromAsset(asset: ImageAsset): Promise<ImageSource> to load ImageSource from the specified ImageAsset asynchronously.
<snippet id='image-source-save-from-asset'/>
<snippet id='image-source-save-from-asset-ts'/>

## Creating base64 string from PNG image file
The method toBase64String(format: "png" | "jpeg" | "jpg", quality?: number): string converts the image to base64 encoded string, using the provided image format and quality. The supported formats are png, jpeg, and jpg. The quality parameter is optional and defaults to maximum quality.
<snippet id='image-source-create-base64'/>
<snippet id='image-source-create-base64-ts'/>
