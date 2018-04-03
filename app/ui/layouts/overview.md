NativeScript provides a recursive layout system that sizes and positions views on the screen.
`Layout` is the base class for all views that provide positioning of child elements.
We can use the various layout containers to position elements. 
They evaluate the base properties of view such as `width`, `height`, `minWidth` and alignments, and expose additional properties for positioning child views (such as `padding`). 
Depending on the way they arrange the children, there are six types of layouts - `AbsoluteLayout`, `DockLayout`, `GridLayout`, `StackLayout`, `FlexboxLayout` and `WrapLayout`.