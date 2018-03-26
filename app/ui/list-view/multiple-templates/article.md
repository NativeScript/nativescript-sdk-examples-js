The example shows, how to define multiple item templates and an item template selector in the XML

The `itemTemplateSelector` can be an expression specified directly in XML. The context of the expression is the data item for each row.
<snippet id='list-view-multy-template-xml'/>


You can use the special value `$index` in the item template selector expression which represents the row index.
<snippet id='list-view-multy-template-index-xml'/>