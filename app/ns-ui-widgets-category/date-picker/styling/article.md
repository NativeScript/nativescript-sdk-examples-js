There are some limitations when styling `DatePicker` component, caused by the way the different native
controls works on Android and on iOS. One major difference is that on Android we can control the font color by modifying the `colors.xml` file
in `App_Resources/Android/values/colors.xml` while on iOS we can directly use the CSS property `color`.
<snippet id='date-picker-styles'/>

> **Android specifics:** On Android API21+ we can also change our `DatePicker` from the default `spinner` mode to `calendar` mode and also change the
default background and color using the project's `app/App_Resources/Android/values-v21/colors.xml` color settings.
To achieve that, go to `app/App_Resources/Android/values-v21/styles.xml` and modify the `DatePicker` default style.
```XML
<!-- DatePicker in calendar mode -->
<style name="AppTheme" parent="AppThemeBase">
    <item name="android:datePickerStyle">@style/CalendarDatePicker</item>
</style>
<style name="CalendarDatePicker" parent="android:Widget.Material.Light.DatePicker">
    <item name="android:datePickerMode">calendar</item>
    <item name="colorPrimary">@color/ns_blue</item>
    <item name="colorPrimaryDark">@color/ns_primaryDark</item>
    <item name="colorAccent">@color/ns_accent</item>
</style>
```
