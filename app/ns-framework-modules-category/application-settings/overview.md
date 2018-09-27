The [Application Settings](https://docs.nativescript.org/api-reference/modules/_application_settings_) module is used to store strings, booleans and numbers in built-in key/value store.
The module uses `SharedPreferences` on Android and `NSUserDefaults` on iOS. The application-settings is suitable for tasks like saving and retriving small portions of custom values from the device’s local storage. Storing to local storage means that you can reuse the key-value pairs after the application is restarted (e.g. remember if a user has logged in orsave user UI preferences).

The application settings module is required from `tns-core-modules/application-settings`.
<snippet id='app-settings-require'/>
<snippet id='app-settings-require-ts'/>