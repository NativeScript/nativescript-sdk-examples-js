---
title: ListView - NativeScript JavaScript
description: ListView component is an abstraction over iOS's UITableView and Android's widget.ListView, which provides functionality for displaying a collection of values,which is present in an array. The component allows adding new items runtime and includes a feature - itamTap event, which helps to handle, which cell is selected.
position: 32
slug: list-view
---
Using a ListView control inside NativeScript app requires some special attention due to the complexity of the NativeScript implementation of the component, with custom item templates, bindings and so on. 

The NativeScript modules provides a custom component which simplifies the way native ListView is used. 


<snippet id='require-list-view'/>

* [Basics](#basics)
* [Code Behind](#code-behind)
* [Events](#events)
* [Multiple Templates](#multiple-templates)
* [Multiple Templates Selector Function](#multiple-templates-selector-function)