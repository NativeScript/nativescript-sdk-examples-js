### Icon Fonts in Image

Using the `font://` prefix, you can load a resource image while setting up an icon code provided by an icon font. By setting up this prefix, a new image will be generated, which will be set as an ImageView resource. While using this functionality, we need to specify the `font-size`, which will calculate the size of the generated image base on the device's dpi. For further configuration on size of the displayed image, we can config the view's `width` and `height` properties.

<snippet id='image-icon-fonts-xml'/>
<snippet id='image-icon-fonts-css'/>
<snippet id='image-icon-fonts-js'/>
<snippet id='image-icon-fonts-ts'/>

>> **Note:** Images have specific stretch options (`none`, `aspectFit`, `aspectFill`). At the same time the icon fonts are having `font-size` which can control the size of our font. If you want to set the size of your icon through the `font-size` property then set `stretch` property to `none`. Any other values of the stretch property (including the default one) will cause the icon to be streched by measuring the image (or if there is no sizes set, the parent layout in whcih the image is nested).