The `DockLayout` is a layout that arranges its children at its own outer edges (top, bottom, left and right or center). 
To define the docking side of a child element, use its dock property. 
To dock a child element to the center of the `DockLayout`, it must be the last child of the DockLayout and the `stretchLastChild` property of the `DockLayout` must be set to `true`.
<snippet id='dock-layout-xml'/>

Creating `DockLayout` programmatically.
<snippet id='dock-layout-code'/>