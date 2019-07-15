import { EventData } from "tns-core-modules/data/observable";
import { Image } from "tns-core-modules/ui/image";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";

export function containerLoaded(args: EventData) {
    const container = <GridLayout>args.object;
    // >> image-code-behdnd-ts
    const newImage = new Image();
    const imageString = String.fromCharCode(0xF10B)
    newImage.src = "font://"+imageString;
    // newImage.stretch = "aspectFill";
    newImage.className = "font-awesome font-size";
    newImage.width = 49;
    newImage.height = 49;
    // << image-code-behdnd-ts
    container.addChild(newImage);
    GridLayout.setRow(newImage, 3);
    GridLayout.setColumn(newImage, 0);
    GridLayout.setColumnSpan(newImage, 2);
}
