We can use the `image-source` module to create an image source and manually set it to the image.
<snippet id='image-image-source'/>
<snippet id='image-image-source-ts'/>

Common scenario when working with images is to convert them to and from Base64 encoded string.
In NativeScript converting is achieved by using `toBase64String` and `fromBase64` methods from `image-source` module. Then create an `ImageSource` instance and bind it to the source property of Image.
<snippet id='using-base64-strings'/>
<snippet id='using-base64-strings-ts'/>