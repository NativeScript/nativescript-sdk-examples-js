The [`DockLayout`](http://docs.nativescript.org/api-reference/modules/_ui_layouts_dock_layout_.html) is a layout that arranges its children at its own outer edges (top, bottom, left and right or center). 
To define the docking side of a child element, use its dock property. 
To dock a child element to the center of the `DockLayout`, it must be the last child of the DockLayout and the `stretchLastChild` property of the `DockLayout` must be set to `true`.
<snippet id='dock-layout-xml'/>

Importing the module from `tns-core-modules/ui/layouts/dock-layout`.
<snippet id='dock-layout-import'/>
<snippet id='dock-layout-import-ts'/>

Dynamic creating of `DockLayout` via code-behind.
<snippet id='dock-layout-code'/>
<snippet id='dock-layout-code-ts'/>