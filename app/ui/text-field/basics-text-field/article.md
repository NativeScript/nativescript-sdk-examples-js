<snippet id="textfield-require">

TextField provides multiple properties and several events for handling the user input and interaction.
To submit a value use the `returnPress` event along with the `returnKeyType` property.
To handle a TextFiled being focused use the `focus` event. 
To handle an interaction when the user leaves TextField use the `blur` event.
To explicitly show and hide a keyboard, we can call the methods `focus` and `dismissSoftInput`.

XML
<snippet id='sample-ui-textfield-xml'/>

JavaScript
<snippet id='textfield-handle-submit-event'/>
