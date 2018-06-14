The prefix of the `src` value specifies where the image will be loaded form. 
The possible options are:

* [From applicaiton resource](#using-resources) (`res://` prefix)
* [From local file system](#using-local-files) (`~/` prefix)
* [From URL](#using-online-resources) (`http://` or `https://` prefix)

### Using Resources

Using the `res://` prefix you can load a resource image. This is the suggested approach, as it uses the native methods for loading the best image for the current device screen density and resolution.

Loading an image from application resources (in `App_Resources/<platform>`).
<snippet id='image-resource'/>
<snippet id='image-code-behdnd'/>

### Using Local Files

Using the `~/` prefix, you can load images relative to the App folder inside your project.

Loading an image from the local file system. In the example below the full path of the image is `<project-folder>/app/images/logo.png`
<snippet id='image-app-folder'/>

### Using Online Resources

Web images have an http:// or https:// prefix. When such an image is loaded, an asynchronous http request will be sent and the image will be shown if the request is successful.

Loading an image from URL. For large images use `loadMode` property to avoid blocking of the UI (see the [best practices](https://docs.nativescript.org/best-practices/images-optimisations) article for more information)
<snippet id='image-online-url'/>
