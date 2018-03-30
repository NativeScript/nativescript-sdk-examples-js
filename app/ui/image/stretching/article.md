The stretch functionality allows us to describe how content is resized to fill its allocated space. The available options for this property are as follow:

* `none` - The image preserves its original size
<snippet id='image-stretch-none'/>
* `fill` - The image is resized to fill the destination dimensions. In this case, the aspect ratio is not preserved.
<snippet id='image-stretch-fill'/>
* `aspectFit` - The image is resized to fit the destination dimensions while it preserves its native aspect ratio. If the aspect ratio of the destination rectangle differs from the image, the image will be clipped to fit in the destination.
<snippet id='image-stretch-aspect-fill'/>
* `aspectFill` - Tthe image is resized to fill in the destination dimensions while it preserves its native aspect ratio.
<snippet id='image-stretch-aspect-fit'/>

> **Note:** The default value for this property is `aspectFit`.