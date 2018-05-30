---
title: Animations - NativeScript JavaScript
description: Animation module provides the needed functionality for animating UI components in NativeScript. This module allows defining an animation Imperative ( creating animations via code-behind while using  `Animation` class from `ui/animation` module) and Declarative ( creating `CSS3` keyframe animations).
position: 18
slug: animations
---
One of the ways to improve the attractiveness of your application is by adding animations. 
NativeScript exposes a simple and easy, but powerful enough API to allow animating almost every native element in your application.

* [Animated Properties](#animated-properties)
* [Chained Animations](#chained-animations)
* [Animating Multiple Views](#animating-multiple-views)

For your convenience, we exposed two ways of creating animations - Imperative (`Animation` class from `ui/animation` module) and Declarative (`CSS3` keyframe animations).
The Imperative way provides full control of any animation by calling animation methods directly via the NativeScript `ui/animation` module.
The declarative way uses the familiar CSS3 animations API and create CSS keyframe animations. 
more information about CSS Animations vsm be found in this section, while the current article will provide detailed informatiion on how to use the NativeScript `Animation` module.

The following classes, interfaces and enums can be explicitly used in your applications.
<snippet id='animation-import'/>
<snippet id='animation-curve-imports'/>
<snippet id='animations-imports'/>