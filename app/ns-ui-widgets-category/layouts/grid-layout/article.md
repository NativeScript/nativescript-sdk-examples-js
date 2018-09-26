The [`GridLayout`](https://docs.nativescript.org/api-reference/modules/_ui_layouts_grid_layout_) is a layout that arranges its child elements in a table structure of rows and columns. A cell can contain multiple child elements. Each one can span over multiple rows and columns, and even overlap the others. The GridLayout has one column and one row by default. To add additional columns and rows, you have to specify column definition items (separated by commas) to the `columns` property and row definition items (separated by commas) to the `rows` property of the `GridLayout`. The width of a column and the height of a row can be specified as an absolute amount of device independent pixels (e.g. `rows="100, 50"`), as a percentage (e.g. `rows="20%, 60%, 20%"`) of the available space or automatically (e.g. `rows="*, *, auto`).
<snippet id='grid-layout-xml'/>

Importing the module from `tns-core-modules/ui/layouts/grid-layout`.
<snippet id='grid-layout-import'/>
<snippet id='grid-layout-import-ts'/>

Creating `GridLayout` programmatically.
<snippet id='grid-layout-code'/>
<snippet id='grid-layout-code-ts'/>