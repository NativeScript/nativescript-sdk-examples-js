# Return press, Focus, Blur Events 
TextField provides multiple properties and several events for handling the user input and interaction.
To submit a value use the `returnPress` event along with the [returnKeyType](#return-key-type) property.
To handle a TextFiled being focused use the `focus` event. 
To handle an interaction when the user leaves TextField use the `blur` event.
To explicitly show and hide a keyboard, we can call the methods `focus` and `dismissSoftInput`.

<snippet id='sample-ui-textfield-xml'/>
<snippet id='textfield-handle-submit-event'/>
<snippet id='textfield-handle-submit-event-ts'/>


# Return Key Type
The widgets that inherit from [`EditableTextBase`](https://docs.nativescript.org/api-reference/classes/_ui_editor_text_base_.editabletextbase), i.e., [`TextField`](http://docs.nativescript.org/api-reference/classes/_ui_text_field_.textfield.html), have a **returnKeyType** property that gets or sets the soft keyboard return key type. Possible values are contained in the [`ReturnKeyType`](http://docs.nativescript.org/api-reference/modules/_ui_enums_.returnkeytype.html) enumeration.

## Done
 - Android: [IME_ACTION_DONE](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_DONE)
 - iOS: [UIReturnKeyDone](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
 - ![done](../img/modules/keyboard/done.png "done")
<snippet id='return-key-type-done-textfield-xml'/>

## Next
 - Android: [IME_ACTION_NEXT](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_NEXT)
 - iOS: [UIReturnKeyNext](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
 - ![next](../img/modules/keyboard/next.png "next")
<snippet id='return-key-type-next-textfield-xml'/>

## Go
 - Android: [IME_ACTION_GO](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_GO)
 - iOS: [UIReturnKeyGo](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
 - ![go](../img/modules/keyboard/go.png "go")
<snippet id='return-key-type-go-textfield-xml'/>

## Search
 - Android: [IME_ACTION_SEARCH](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_SEARCH)
 - iOS: [UIReturnKeySearch](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
 - ![search](../img/modules/keyboard/search.png "search")
<snippet id='return-key-type-search-textfield-xml'/>

## Send
 - Android: [IME_ACTION_SEND](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_SEND)
 - iOS: [UIReturnKeySend](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
 - ![send](../img/modules/keyboard/send.png "send")
<snippet id='return-key-type-send-textfield-xml'/>
