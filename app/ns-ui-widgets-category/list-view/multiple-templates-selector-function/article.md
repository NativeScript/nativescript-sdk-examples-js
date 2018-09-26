The example shows, how to specify the item template selector as a function in the code-behind file


In case your item template selector involves complicated logic which cannot be expressed with an expression, you can create an item template selector function in the code behind of the page in which the ListView resides. The function receives the respective data item, the row index and the entire ListView items collection as parameters. It has to return the the key of the template to be used based on the supplied information.
<snippet id='listview-create-selector-function-xml'/>
<snippet id='listview-create-selector-function-code'/>
<snippet id='listview-create-selector-function-code-ts'/>