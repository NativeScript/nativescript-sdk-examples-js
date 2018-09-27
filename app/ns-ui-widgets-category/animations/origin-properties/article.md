To obtain more control over our animations, we can use `originX` and `originY`proeprties. 
- `originX`gets or sets the X component of the origin point around which the view will be transformed. The default value is 0.5 representing the centre of the view.
- `originY`gets or sets the Y component of the origin point around which the view will be transformed. The default value is 0.5 representing the centre of the view.

By default, the value of 0.5 (for both X and Y coordinate) is placing the ideal centre of our view. To create complex rotation animations, we can change the origin properties. In the example below, we are demonstrating how to rotate a view against different `originX` and `originY` points.

<snippet id='rotating-example'/>
<snippet id='rotating-example-ts'/>
<snippet id='rotating-example-xml'/>