// >> image-icon-fonts-ts
import { EventData } from "tns-core-modules/data/observable";
import { Image } from "tns-core-modules/ui/image";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";

export function containerLoaded(args: EventData) {
    const container = <StackLayout>args.object;

    const newImage = new Image();
    const imageString = String.fromCharCode(0xF2b9);
    newImage.src = "font://" + imageString;
    newImage.className = "font-awesome font-size";
    newImage.width = 49;
    newImage.height = 49;

    container.addChild(newImage);
}
// << image-icon-fonts-ts
