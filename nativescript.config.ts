import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.nativescriptsdkexamplesjs',
  appResourcesPath: 'app/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'full',
  },
  appPath: 'app',
} as NativeScriptConfig
