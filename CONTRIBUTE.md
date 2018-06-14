
## Add New Component Category

 - Create a new directory inside the `app` directory with the name of the component, for example `action-bar`. The name of the directory will be prettified and will become the component section header. Create a file named `overview.md` and place the general overview text for the component. You **cannot** use code snippets here.
 - If the directory should be displayed as a folder inside the documentation tree, it should end with `-category`. For example - `ns-ui-widgets-category`.

## Add New Example

 - Create a new directory inside a component directory, for example inside the `button` directory. The name of the directory will be prettified and will become the example header, i.e. title. For example, if your directory name is `tap-event` the header will become `Tap Event`, that is, all dashes will be replaced with spaces and all the words will be capitalized.
 - Create a file named `article.md`. Place the article text and code snippet placeholders there. You can place code snippets in TypeScript, HTML and CSS. The code snippet placeholder syntax is explained [here](https://github.com/NativeScript/markdown-snippet-injector). Here is a sample article.md file:

######article.md
```
Set Button tap callback in TypeScript file
<snippet id='button-tap-ts'/>

Set Button tap callback in JavaScript file
<snippet id='button-tap-javascript'/>

Set Button in XML
<snippet id='button-tap-xml'/>
```
 - Add your example source code files, i.e. `.ts`, `.xml`, and `.css` files. These files should contain the actual code snippets to be injected in `article.md`. For example:

######text.component.html
```XML
<StackLayout sdkExampleTitle sdkToggleNavButton>
    <StackLayout  class="example-container">
        <!-- >> button-tap-xml -->
        <Button id="button" text="I am a button" tap="onTap"></Button>
        <!-- << button-tap-xml -->
    </StackLayout>
</StackLayout>
```

######text.component.js
```JavaScript
var EventData = require("tns-core-modules/data/observable").EventData;
var Button = require("tns-core-modules/ui/button").Button;

// >> button-tap-javascript 
exports.onTap = function(args) {
    var myButton = args.object;
    console.log(myButton + " was tapped!");
}
// << button-tap-javascript
```


######text.component.ts
```TypeScript
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";

// >> button-tap-ts 
export function onTap(args: EventData) {
    let myButton = <Button>args.object;
    console.log(myButton + " was tapped!");
}
// << button-tap-ts 
```
 - (Optional) Make а screenshot of your example named `image.png` and add it to the example directory. Here is an image with android and ios phone screenshots:

|Image|
|---|
|![Image](app/ns-ui-widgets-category/button/image.png "Image")|

 - Finally, add your example to the main navigation list:

######app/main-view-model.ts
```TypeScript
var mainMenuLinks = [
    new Link("Button", "/button"),
    ...
];
```

 - Tests - for the time being the tests will be provided by the NativeScript QA team when the PR is accepted.

## Run Application
```
npm install
tns run android
```
or
```
npm install
tns run ios
```

## Build Article
```
npm run build
```
You can find the build results in the `dist` directory.


This command pushes to github.com using SSH, so you might need [generate a new SSH key and add it to the ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) in case you haven't done so already.

## Bugs, issues and enhancements
https://github.com/NativeScript/nativescript-sdk-examples-ng/issues
