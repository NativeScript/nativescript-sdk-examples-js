Action: Two taps in a quick succession.
<snippet id='gest-double-tap-xml'/>
<snippet id='gest-double-tap'/>
<snippet id='gest-double-tap-ts'/>

Possible implementations for `doubleTap` gesture:

 - Scale up the object with a predefined percentage, centered around the double-tapped region. 
If a user keeps repeating the double tap gesture, continue to scale up until the maximum scale is reached.
 - Scale up the smallest targetable view or returns it to its original scale in nested views.
 - Select text.