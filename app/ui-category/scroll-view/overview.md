---
title: ScrollView - NativeScript JavaScript
description: ScrollView class allows displaying scrollable area, which has content that is larger than its bounds. The view enables changing its orientation(horizontal, vertical) via its orientation property and handling scroll event, which indicates if the user is scrolling the content.
position: 36
slug: scroll-view
---
The ScrollableView component allows you to display a scrollable area in your application, which has content that is larger than its bounds.
The ScrollView has an `orientation` property, which allows you to set different orientations to the view:

The possible values of `orientation` are:
 - `horizontal`
 - `vertical`
 
It is possible to handle the `scroll` event of the View by binding to the ScrollView’s `scroll` event.

<snippet id='search-bar-require'/>

* [Events](#events)
* [Vertical](#vertical)
* [Horizontal](#horizontal)
