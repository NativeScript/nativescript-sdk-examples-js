---
title: Console - NativeScript JavaScript
description: The global console variable represents the functionality, which allows logging messages in different categories. For example `console.log()`, `console.info()`, `console.warn()`, `console.error()`, `console.time()/console.timeEnd()`, `console.trace()`.
position: 4
slug: console
---
Logging to the console does not require the `console` module since the console variable is global. 
It can be used anywhere within your code. You can log your message in several different categories.

> **iOS Speicifics:** On iOS the logging is enabled only in debug and will not work in release.