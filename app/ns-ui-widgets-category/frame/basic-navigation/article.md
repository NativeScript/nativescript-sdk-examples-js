### Default page
To load a default (initial) page in your application use the `defaultPage` property of the `Frame` element.
With the example below the application will load a page located in `<project-folder>/app/home/first-page.xml`
<snippet id='frame-nav-default-page'/>

### Navigate by page name
To navigate between pages, you can use the [`navigate`](http://docs.nativescript.org/api-reference/classes/_ui_frame_.frame#navigate) method of the desired `Frame` instance.
<snippet id='frame-navigate-base'/>
<snippet id='frame-navigate-base-ts'/>

### Navigate by NavigationEntry object
The `navigate` method accepts [`NavigationEntry`](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry) object.
<snippet id='frame-navigate-module'/>
<snippet id='frame-navigate-module-ts'/>

Full list of the NavigationEntry properties. Note that all of them are optional. Even the `moduleName` is optional, as alternatively you can pass a dynamically created page via `create`.

- [animated](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry#animated) - True to navigate to the new Page using animated transitions, false otherwise.
- [backstackVisible](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry#backstackVisible) - True to record the navigation in the backstack, false otherwise. If the parameter is set to false then the Page will be displayed but once navigated from it will not be able to be navigated back to.
- [bindingContext](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry#bindingContext) - An object to become the binding context of the page navigating to. Optional.
- [clearHistory](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry#clearHistory) - True to clear the navigation history, false otherwise. Very useful when navigating away from login pages.
- [context](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry#context) - An object passed to the onNavigatedTo callback of the Page. Typically this is used to pass some data among pages. Optional.
- [create](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry#create) - A function used to create the View instance. Optional.
- [moduleName](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry#moduleName) - The name of the module containing the View instance to load. Optional.
- [transition](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry#transition) - Specifies an optional navigation transition for all platforms. If not specified, the default platform transition will be used.
- [transitionAndroid](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry#transitionAndroid) - Specifies an optional navigation transition for Android. If not specified, the default platform transition will be used.
- [transitioniOS](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry#transitioniOS) - Specifies an optional navigation transition for iOS. If not specified, the default platform transition will be used.

### Navigate without history
You can navigate to a page without adding this navigation to the history. Set the `backstackVisible` property of the `NavigationEntry` to `false`. 
When the property is set to false, then the Page will be displayed, but once navigated from it will not be able to be navigated back to.
<snippet id='frame-navigate-backstackvisible'/>
<snippet id='frame-navigate-backstackvisible-ts'/>

### Clear history
You can navigate to a new page and decide to completely clear the entire navigation history. Set the `clearHistory` property of the `NavigationEntry` to `true`. 
This will prevent the user from going back to pages previously visited. This is extremely useful if you have a multiple-page authentication process and you want to clear the authentication pages once the user is successfully logged in and redirected to the start page of the application.
<snippet id='frame-navigate-clearhistory'/>
<snippet id='frame-navigate-clearhistory-ts'/>

### Navigation transitions

####  Transition properties 

By default, all navigation will be animated and will use the default transition for the respective platform (`UINavigationController` transitions for iOS and `Fragment` transitions for Android). To change the transition type, set the `navigationTransition` property of the `NavigationEntry` to an object conforming to the [`NavigationTransition`](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationtransition) interface. The `NavigationTransition` interface has four optional properties:

- [curve](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationtransition#curve) - An optional transition animation curve. Possible values are contained in the [`AnimationCurve`](https://docs.nativescript.org/api-reference/modules/_ui_enums_.animationcurve) enumeration. Alternatively, you can pass an instance of type UIViewAnimationCurve for iOS or android.animation.TimeInterpolator for Android.
- [duration](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationtransition#duration) - The length of the transition in milliseconds. If you do not specify this, the default platform transition duration will be used.
- [instance](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationtransition#instance) - An user-defined instance of the [`Transition`](https://docs.nativescript.org/api-reference/classes/_ui_transition_.transition) class.
- [name](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationtransition#name) - Can be one of the built-in transitions:
    * curl (same as curlUp) (iOS only)
    * curlUp (iOS only)
    * curlDown (iOS only)
    * explode (Android Lollipop(21) and up only)
    * fade
    * flip (same as flipRight)
    * flipRight
    * flipLeft
    * slide (same as slideLeft)
    * slideLeft
    * slideRight
    * slideTop
    * slideBottom

<snippet id='frame-navigate-transitions'/>
<snippet id='frame-navigate-transitions-ts'/>

#### Default transition for specific Frame

To specify a default transition for all frame navigations, set the transition property of the frame you are navigating with.

<snippet id='frame-navigate-default-transition'/>
<snippet id='frame-navigate-default-transition-ts'/>

#### Default transition for the application

To specify a default transition for all navigations across the entire app, set the static `defaultTransition` property of the `Frame` class.

<snippet id='frame-navigate-defailt-transition-app'/>
<snippet id='frame-navigate-defailt-transition-app-ts'/>

#### Platform-specific transitions

To specify different transitions for the different platforms use the `transitioniOS` and `transitionAndroid` properties of the `NavigationEntry`.

<snippet id='frame-navigate-platform-specific-transitions'/>
<snippet id='frame-navigate-platform-specific-transitions-ts'/>

#### Custom Transitions

Instead of setting the name property to one of the predefined transitions, you can set the instance property of the `NavigationTransition` to an instance of a class that inherits from `Transition`. 
You can create your custom user-defined transition by writing platform-specific code to animate the transition. 
To do that you need to inherit from the `Transition` class and override one method for each platform. 
Since there will be platform-specific code, you need to separate your code into two separate files. 
Here is an example of a custom transition that shrinks the disappearing page while expanding the appearing page by using a scale affine transform.

> **NOTE:** The following example uses native APIs. When using TypeScript, you need to add a dev dependency to the [`tns-platform-declarations`](https://www.npmjs.com/package/tns-platform-declarations) package to use these native APIs without compiler errors. 
For more information, see the Intellisense and access to native APIs via TypeScript section.

_custom-transition.android.js/ts_
<snippet id='frame-navigate-custom-transitions-android'/>
<snippet id='frame-navigate-custom-transitions-android-ts'/>

_custom-transition.ios.js/ts_
<snippet id='frame-navigate-custom-transitions-ios'/>
<snippet id='frame-navigate-custom-transitions-ios-ts'/>

### Navigate Back

Each frame tracks the pages the user has visited in a navigation stack. To go back to a previous page, 
you need to use the [`goBack`](https://docs.nativescript.org/api-reference/classes/_ui_frame_.frame#goback) method of the current frame instance.
To verify that back navigation is possible, you can use the [`canGoBack`](https://docs.nativescript.org/api-reference/classes/_ui_frame_.frame#cangoback) boolean property.

<snippet id='frame-navigate-go-back'/>
<snippet id='frame-navigate-go-back-ts'/>
