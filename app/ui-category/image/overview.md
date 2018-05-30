---
title: Image - NativeScript JavaScript
description: The Image is UI widget, which is a common abstraction over iOS's UIImage and Android's widget.ImageView.  The component allows loading an image from different resources(URL, ImageSource, image from the resource folder or while providing the relative path to the image file) via its src property.
position: 27
slug: image
---
The `Image` widget shows an image in your mobile application. 
In a NativeScript application images are added to an application either declaratively (XML) or with code. We can load the image from an `ImageSource` or a URL using the `src` property.
Behind the `Image` module stands `UIImage` on iOS and `android.widget.ImageView` on Android.
As working with images is an essential part of each mobile application following [the best practices](https://docs.nativescript.org/best-practices/images-optimisations) is a must.
