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

You can use the HTML5 <canvas> for it:

Create a canvas, load your image into it and then use toDataURL() to get the base64 representation (actually, it's a data: URL but it contains the base64-encoded image).

>function toDataURL(src, callback, outputFormat) {
>  var img = new Image();
>  img.crossOrigin = 'Anonymous';
>  img.onload = function() {
>    var canvas = document.createElement('CANVAS');
>    var ctx = canvas.getContext('2d');
>    var dataURL;
>    canvas.height = this.naturalHeight;
>    canvas.width = this.naturalWidth;
>    ctx.drawImage(this, 0, 0);
>    dataURL = canvas.toDataURL(outputFormat);
>    callback(dataURL);
>  };
>  img.src = src;
>  if (img.complete || img.complete === undefined) {
>    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
>    img.src = src;
>  }
>}

>toDataURL(
>  'https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0',
>  function(dataUrl) {
>    console.log('RESULT:', dataUrl)
>  }
>)
