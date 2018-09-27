A very common case is to provide a list (array) of plain elements (numbers, dates, strings) to a ListView items collection. All examples above demonstrate how to bind a UI element to a property of the bindingContext. If there is only plain data, there is no property to bind, so the binding should be to the entire object. Here comes another feature of NativeScript binding - object or value binding. To refer to the entire object, which is Date() in the example, the keyword `$value` should be used.

<snippet id='plain-object-binding-xml'/>
<snippet id='plain-object-binding-code'/>
<snippet id='plain-object-binding-code-ts'/>