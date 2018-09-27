import { EventData } from "tns-core-modules/data/observable";
import { Image } from "tns-core-modules/ui/image";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";

export function containerLoaded(args: EventData) {
    const container = <StackLayout>args.object;
    // >> image-code-behdnd-ts
    const newImage = new Image();
    newImage.src = "res://icon";
    newImage.stretch = "aspectFill";

    // << image-code-behdnd-ts
    container.addChild(newImage);
}
