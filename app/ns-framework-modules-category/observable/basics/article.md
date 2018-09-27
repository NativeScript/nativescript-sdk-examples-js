Creating and using Observable objects requires the `tns-core-modules/data/observable` module.
<snippet id='observable-basics-imports'/>
<snippet id='observable-basics-imports-ts'/>

### Observable Class

Observable is used when you want to be notified when a change occurs. Use on/off methods to add/remove listener.
<snippet id='observable-class-xml'/>
<snippet id='observable-class'/>
<snippet id='observable-class-ts'/>

### Creating Observable with **fromObject** Method

The [`fromObject`](https://docs.nativescript.org/api-reference/modules/_data_observable_#fromobject) method creates an Observable instance and sets its properties according to the supplied JavaScript object.
<snippet id='observable-from-object'/>
<snippet id='observable-from-object-ts'/>

### Creating Observable with **fromObjectRecursive** Method

The [`fromObjectRecursive`](https://docs.nativescript.org/api-reference/modules/_data_observable_#fromobjectrecursive) method creates an Observable instance and sets its properties according to the supplied JavaScript object. This function will create new Observable for each nested object (expect arrays and functions) from supplied JavaScript object.
<snippet id='observable-from-object-recursive'/>
<snippet id='observable-from-object-recursive-ts'/>

### Adding Event Listener and Using **propertyChangeEvent**

Using [`propertyChangeEvent`](https://docs.nativescript.org/api-reference/classes/_data_observable_.observable#propertychangeevent) and responding to property changes with arguments of type [`PropertyChangeData`](https://docs.nativescript.org/api-reference/interfaces/_data_observable_.propertychangedata).
<snippet id='property-change-event'/>
<snippet id='property-change-event-ts'/>

### Removing Event Listener

The event listeners can be explicitly removed when no longer needed.
<snippet id='property-change-event-remove-listener'/>
<snippet id='property-change-event-remove-listener-ts'/>