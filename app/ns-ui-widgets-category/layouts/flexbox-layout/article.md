The [`FlexboxLayout`](http://docs.nativescript.org/api-reference/modules/_ui_layouts_flexbox_layout_.html) is the NativeScript's abstraction of the known Flexbox from the Web development. 

### Directions

This establishes the main-axis, thus defining the direction flex items are placed in the flex container. 
Flexbox is (aside from optional wrapping) a single-direction layout concept. 
Think of flex items as primarily laying out either in horizontal rows or vertical columns.
<snippet id='flexbox-direction-xml'/>

### Wrap
By default, flex items will all try to fit onto one line. 
You can change that and allow the items to wrap as needed with this property. 
Direction also plays a role here, determining the direction new lines are stacked in.

Child related properties
 - flex-wrap-before: Non-spec property controlling item wrapping, setting to true on flexbox child will force it to wrap on a new line

#### wrap
multi-line / left to right in ltr; right to left in rtl
<snippet id='flexbox-wrap-xml'/>

#### wrap-reverse
multi-line / right to left in ltr; left to right in rtl
<snippet id='flexbox-wrap-reverse-xml'/>

### Justify Content
This defines the alignment along the main axis. It helps to distribute extra free space left over when either all the flex items on a line are inflexible, 
or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

#### flex-end 
Items are packed toward end line
<snippet id='flexbox-justify-end-xml'/>

#### space-between
Items are evenly distributed in the line; first item is on the start line, last item on the end line
<snippet id='flexbox-justify-space-between-xml'/>

#### space-around
Items are evenly distributed in the line with equal space around them. Note that visually the spaces aren't equal, since all the items have equal space on both sides. 
The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
<snippet id='flexbox-justify-space-around-xml'/>

Multiple settings example
<snippet id='flexbox-multiple-settings-xml'/>

### Flexbox (order and shrink)
This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. 
It dictates what amount of the available space inside the flex container the item should take up.

If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. 
If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least).

<snippet id='flexbox-grow-xml'/>

### Flex order
By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.

<snippet id='flexbox-order-xml'/>

### Flex shrink
This defines the ability for a flex item to shrink if necessary

<snippet id='flexbox-shrink-xml'/>

