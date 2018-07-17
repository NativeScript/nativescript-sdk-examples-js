Generally, almost every UI control could be bound to a data object (all NativeScript controls are created with data binding in mind). 
After the code has met the following requirements, data-binding can be used out of the box.

- The target object has to be a successor of the `Bindable` class. **All NativeScript UI controls inherit from `Bindable` class**.
- For one-way binding, using a plain property is sufficient.
- For two-way data binding, the target property should be a dependency property.
- The data object should raise a `propertyChange` event for every change in the value of its property in order to notify all of the listeners interested in the change.

The article will show basic and advanced binding techniques including the architectural pattern used in NativeScript framework - MVVM (Model-View-ViewModel).
