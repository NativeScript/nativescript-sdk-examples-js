File System module provides high-level abstractions for file system entities 
such as files, folders, known folders, paths, separators, etc.

To use this module:

<snippet id='fs-create-require'/>
<snippet id='fs-create-import'/>

All file system operations have synchronous and asynchronous forms.

The asynchronous form is executed in the background and always returns a Promise. The synchronous form is a blocking call and takes an optional error callback as its last argument. If an error occurs with a synchronous file system operation the error callback is executed synchronously as well.
