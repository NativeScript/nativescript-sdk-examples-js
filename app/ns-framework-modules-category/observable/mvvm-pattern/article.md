MVVM ([(Model-View-ViewModel](https://en.wikipedia.org/wiki/Model–view–viewmodel)) is the base pattern on which NativeScript framework is build.
MVVM facilitates a separation of development of the graphical user interface from development of the business logic or back-end logic (the data model).

 * **Model:** The model defines and represents the data. Separating the model from the various views that might use it allows for code reuse.
 * **View:** The view represents the UI, which in NativeScript is written in XML. The view is often data-bound to the view model so that changes made to the view model in JavaScript instantly trigger visual changes to UI components.
 * **View Model:** The view model contains the application logic (often including the model), and exposes the data to the view. NativeScript provides a module called `Observable`, which facilitates creating a view model object that can be bound to the view.

The biggest benefit of separating models, views, and view models, is that you are able to use two-way data binding; that is, changes to data in the model get instantly reflected on the view, and vice versa. The other big benefit is code reuse, as you're often able to reuse models and view models across views.

Complete example demonstrating MVVM pattern in NativeScript application with Plaing JavaScript and with TypeScript (using `Class`).

Plain JavaScript
<snippet id='mvvm-view-model'/>
<snippet id='mvvm-code-behind'/>
<snippet id='mvvm-xml'/>

TypeScript
<snippet id='mvvm-view-model-ts'/>
<snippet id='mvvm-code-behind-ts'/>
<snippet id='mvvm-xml-ts'/>
