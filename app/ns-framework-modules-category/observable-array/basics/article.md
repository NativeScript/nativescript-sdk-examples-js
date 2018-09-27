Using the `ObservableArray` requires the related module.
<snippet id='observable-array-require'/>
<snippet id='observable-array-require-ts'/>

Creating an `ObservableArray` with different class constructors.
<snippet id='observable-array-creation'/>
<snippet id='observable-array-creation-ts'/>

One difference with the base array implementation is in the way the items are accessed through their index.
While in the common JS array we would do `array[index]` with an `ObservableArray` we need to use `getItem(index)` method.
<snippet id='observable-array-item-index'/>
<snippet id='observable-array-item-index-ts'/>

Setting item at specified index using `setItem(index, item)` method.
<snippet id='observable-array-set-item'/>
<snippet id='observable-array-set-item-ts'/>

Using `push(item)` method to add single element to the array.
<snippet id='observable-array-push'/>
<snippet id='observable-array-push-ts'/>

Using `push()` method to add multiple elements from source array to the `ObservableArray`.
<snippet id='observable-array-push-array'/>
<snippet id='observable-array-push-array-ts'/>

Using `reverse()` method to reverse the elements order of the `ObservableArray`.
<snippet id='observable-array-reverse'/>
<snippet id='observable-array-reverse-ts'/>

Using `shift()` method to remove the first element of the array.
<snippet id='observable-array-shift'/>
<snippet id='observable-array-shift-ts'/>

Using `sort()` method to sort the array. This method can accept a comparing function.
<snippet id='observable-array-sort'/>
<snippet id='observable-array-sort-ts'/>

Using `indexOf(item)` method to get the index of the desired item in the array.
<snippet id='observable-array-index-of'/>
<snippet id='observable-array-index-of-ts'/>


