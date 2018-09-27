This module allows users to interact with an app via a set of different gestures. 
NativeScript provides a variety of APIs to help you create gestures.

## Overview

Gestures, such as `tap`, `slide` and `pinch`, allow users to interact with your app by manipulating UI elements on the screen.
In NativeScript, `View` (the base class for all NativeScript UI elements) has `on` and `off` methods that let you subscribe or unsubscribe to all events and gestures recognized by the UI element.
As the first parameter, you pass an on or off method and the type of gesture you want to track. The second parameter is a function that is called each time the specified gesture is recognized. 
The function arguments contain additional information about the gesture, if applicable. 

- **on(** type _Number_ | name _String_ | names Comma separated _String_, callback _Function_... **)
   - **type** - _Number_ | **name** - _String_ | **names** - Comma separated _String_
   - **callback** - _Function_(args _GestureEventData_)

- **off(** type _Number_ | name _String_ | names Comma separated _String_, callback _Function_... **)
   - **type** - _Number_ | **name** - _String_ | **names** - Comma separated _String_
   - **callback** - _Function_(args _GestureEventData_)

Example
```JavaScript
myView.on("tap", () => {
    console.log("myView tapped!");
})
```
```TypeScript
myView.on("tap", () => {
    console.log("myView tapped!");
})
``` 

Gestures events can also be implemented directly in the XML layout by providing the callback method.
```XML
<StackLayout tap="onTap"/>
```
```JavaScript
exports.onTap = function(args) {
    console.log("Label tapped!");
};
```
```TypeScript
export function onTap(args) {
    console.log("Label tapped!");
};
```

