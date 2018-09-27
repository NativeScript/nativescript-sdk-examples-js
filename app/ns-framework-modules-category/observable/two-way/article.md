Two-way data binding is a way of binding that combines binding from and to the application UI (binding to model and binding to UI)
A typical example is a `TextField` that reads its value from the Model but also changes the Model based on user input.

The example is demonstrating two-way binding via code-behind. The `TextField` accepts an empty string as initial value (the same binding is used for the `Label` element).
Then when the user inputs new string into the `TextField`, the two-way binding will update the label's `text` property simultaneously.

<snippet id='two-way-binding-code'/>
<snippet id='two-way-binding-code-ts'/>

To create a binding in XML, a source object is needed, which will be created the same way, as in the example above. Then the binding is described in the XML (using a mustache syntax). 
With an XML declaration, only the names of the properties are set - for the target: text, and for source: textSource. 
The interesting thing here is that the source of the binding is not specified explicitly. More about this topic will be discussed in the Binding source article.
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
    <StackLayout>
        <TextField text="{{ textSource }}" />
    </StackLayout>
</Page>
```

> **Note:** When creating UI elements with an XML declaration, the data binding is two-way by default.