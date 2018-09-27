import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Label } from "tns-core-modules/ui/label";

export function onLoaded(args: EventData) {
    const page = <Page>args.object;
    const myView = <Label>page.getViewById("lbl");
    // >> chaining-animations-ts
    const duration = 300;
    myView.animate({
            opacity: 0,
            duration: duration
        }).then(() =>
            myView.animate({
                opacity: 1,
                duration: duration
            })
        ).then(() =>
            myView.animate({
                translate: {
                    x: 200,
                    y: 200
                },
                duration: duration
            })
        ).then(() =>
            myView.animate({
                translate: {
                    x: 0,
                    y: 0
                },
                duration: duration
            })
        ).then(() =>
            myView.animate({
                scale: {
                    x: 5,
                    y: 5
                },
                duration: duration
            })
        ).then(() =>
            myView.animate({
                scale: {
                    x: 1,
                    y: 1
                },
                duration: duration
            })
        ).then(() =>
            myView.animate({
                rotate: 180,
                duration: duration
            })
        ).then(() =>
            myView.animate({
                rotate: 0,
                duration: duration
            })
        ).then(() => {
            console.log("Animation finished");
        }).catch(e => {
            console.log(e.message);
        });
    // << chaining-animations-ts
}
