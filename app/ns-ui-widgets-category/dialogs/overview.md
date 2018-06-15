NativeScript lets us create dialogs in your app in a manner similar to the web browser. 
We can create alerts, confirmations, prompts, logins and dialogs that require action.
The module `tns-core-modules/ui/dialogs` is loaded globally in every NativeScript application so 
there is no need for explicit require/import of the module.

> **NOTE**: You can call dialog functions with parameters similar to the web browser API or the `options` object. All dialog functions return a `Promise` object. **In both iOS and Android, dialogs will not block your code execution!**

> **TIP**: You can try [this NativeScript Playground project](https://play.nativescript.org/?template=play-ng&id=dWQhV7) to see all of this article’s examples in action on your device.