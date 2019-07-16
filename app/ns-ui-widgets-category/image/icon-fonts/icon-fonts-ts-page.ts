import { EventData } from "tns-core-modules/data/observable";
import { Image } from "tns-core-modules/ui/image";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";

export function containerLoaded(args: EventData) {
    const container = <GridLayout>args.object;
    // >> image-icon-fonts-ts
    const newImage = new Image();
    const imageString = String.fromCharCode(0xF10B);
    newImage.src = "font://" + imageString;
    newImage.className = "font-awesome font-size";
    newImage.width = 49;
    newImage.height = 49;
    // << image-icon-fonts-ts
    container.addChild(newImage);
    GridLayout.setRow(newImage, 3);
    GridLayout.setColumn(newImage, 0);
    GridLayout.setColumnSpan(newImage, 2);
}
