The `border-radius` property allows us to create rounded corners for NativeScript elements.
This property can have from one, two or four values.

Rules about applying `border-radius` values:

- Four values - `border-radius: 15 50 30 5`; 
First value applies to the top-left corner, second value applies to the top-right corner, third value applies to bottom-right corner, and fourth value applies to the bottom-left corner.

- Two values - `border-radius: 5 10;` 
First value applies to top-left and bottom-right corners, and the second value applies to top-right and bottom-left corners.

- One value - `border-radius: 10;` 
The value applies to all four corners, which are rounded equally.

<snippet id='border-radius-css'/>