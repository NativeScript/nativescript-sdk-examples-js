The [`AbsoluteLayout`](http://docs.nativescript.org/api-reference/modules/_ui_layouts_absolute_layout_.html) is the simplest layout in NativeScript. 
It uses absolute left-top (x/y) coordinates to position its children and the place of each of them depends on its Top, Left, Width and Height properties. 
The `AbsoluteLayout` will not enforce any layout constraints on its elements and will not resize them at runtime when its size changes.

Basic usage and definition of `AbsoluteLayout` and the properties `left` and `top` to position its children views within the layout.
<snippet id='absolute-layout-html'/>

Importing the module from `tns-core-modules/ui/layouts/absolute-layout`.
<snippet id='absolute-layout-import'/>
<snippet id='absolute-layout-import-ts'/>

Dynamic creating of `AbsoluteLayout` via code-behind.
<snippet id='absolute-layout-code-behind'/>
<snippet id='absolute-layout-code-behind-ts'/>
