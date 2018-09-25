import { fromBase64, fromResource }  from "tns-core-modules/image-source";
import { Image } from "tns-core-modules/ui/image";
import { Label } from "tns-core-modules/ui/label";

export function onStackLoaded(args) {
    const stack = args.object;
    // >> image-image-source-ts
    // import { fromResource }  from "tns-core-modules/image-source";
    // import { Image } from "tns-core-modules/ui/image";
    const image = new Image();
    const imageSource = fromResource("icon");
    image.imageSource = imageSource;
    image.height = 100;
    image.stretch = "aspectFit";
    // << image-image-source-ts

    const lbl = new Label();
    lbl.text = "Image created via fromResource() method";
    lbl.css = "margin-top: 20; margin-left: 20;";

    const imageFromBase64 = new Image();
    const myImageSource = usingBase64Strings();
    imageFromBase64.imageSource = myImageSource;
    imageFromBase64.height = 100;
    imageFromBase64.stretch = "aspectFit";

    const lbl2 = new Label();
    lbl2.text = "Image created via base64 string";
    lbl2.css = "margin-top: 120; margin-left: 20;";

    stack.addChild(lbl);
    stack.addChild(image);

    stack.addChild(lbl2);
    stack.addChild(imageFromBase64);
}

function usingBase64Strings() {
    // >> using-base64-strings-ts
    // import { fromBase64, fromResource }  from "tns-core-modules/image-source";
    const myImageSource = fromResource("icon");
    const imageAsBase64String = myImageSource.toBase64String("png", 100); // base64 string; default max image quality;
    const base64ImageSource = fromBase64(imageAsBase64String);
    // << using-base64-strings-ts

    return base64ImageSource;
}
