To control and monitor the Internet connectivity , you could use the `tns-core-modules/connectivity` module.
<snippet id='connectivity-require'/>

Using the connectivity module with `getConnectionType` method, we can get the current Internet connection type.
<snippet id='connectivity-type'/>

> **Android specifics:** On ANdroid to access any connection related information we will need explicit permission from the user.
To enable the permission request add the follwing in `app/App_Resources/Android/AndroidManifest/xml`
```XML
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
```

Monitoring connection type is achieved through `startMonitoring` method.
<snippet id='connectivity-monitoring'/>