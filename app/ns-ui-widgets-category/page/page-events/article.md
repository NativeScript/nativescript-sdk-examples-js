There are four page specific events triggered when a page is being navigate to and from.
- [`navigatingTo`](https://docs.nativescript.org/api-reference/classes/_ui_page_.page#navigatingtoevent) - Triggered when entering a page (the navigation has started).
- [`navigatedTo`](https://docs.nativescript.org/api-reference/classes/_ui_page_.page#navigatedtoevent) - Triggered when entering a page (the navigation has ended).
- [`navigatingFrom`](https://docs.nativescript.org/api-reference/classes/_ui_page_.page#navigatingfromevent) - Triggered when leaving a page (the navigation has started).
- [`navigatedFrom`](https://docs.nativescript.org/api-reference/classes/_ui_page_.page#navigatedfromevent) - Triggered when leaving a page (the navigation has ended).

<snippet id='page-events-xml'/>
<snippet id='page-events'/>
<snippet id='page-events-ts'/>

> **Note:** The events `loaded`, `unloaded` and `layoutChanged` are universal for all classes that extends the [`View`](https://docs.nativescript.org/api-reference/modules/_ui_core_view_) class (including `Page`). They can be used with all NativeScript elements (e.g. layouts, buttons, UI plugins, etc.).