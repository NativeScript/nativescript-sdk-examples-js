Using the `VirtualArray` requires the related module.
<snippet id='virtual-array-require'>
<snippet id='virtual-array-require-ts'>

> **Note:** Virtual array will divide total number of items to pages using `loadSize` property value. When you request an
item at specific index the array will raise `itemsLoading` event with `ItemsLoading` argument index set to the first index of the requested page
and count set to number of items in this page.

> **Inportant:** If you have already loaded items in the requested page the array will raise multiple times `itemsLoading` event to request
all ranges of still not loaded items in this page.

<snippet id='virtual-array-creation'/>
<snippet id='virtual-array-creation-ts'/>

Handling `change` event when you load items using `load()` method.
<snippet id='virtual-array-change'/>
<snippet id='virtual-array-change-ts'/>