import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
let myFirstView, mySecondView, myThirdView, myForthView, myFifthView;

export function onLoaded(args: EventData) {
    const page = <Page>args.object;
    myFirstView = page.getViewById("myFirstView");
    mySecondView = page.getViewById("mySecondView");
    myThirdView = page.getViewById("myThirdView");
    myForthView = page.getViewById("myForthView");
    myFifthView = page.getViewById("myFifthView");
}
// >> rotating-example-ts
export function animate() {
    // myFirstView.originX = 0.5; // Default value (center of the view's horizontal axis)
    // myFirstView.originY = 0.5; // Default value (middle of the view's vertical axis)
    myFirstView.animate({
        rotate: 360,
        duration: 3000
    }).then(() => {
        myFirstView.rotate = 0;
    }).catch((e) => {
        console.log(e.message);
    });

    mySecondView.originX = 1; // most right of horizontal axis
    mySecondView.animate({
        rotate: 360,
        duration: 3000
    }).then(() => {
        mySecondView.rotate = 0;
    }).catch((e) => {
        console.log(e.message);
    });

    myThirdView.originX = 0; // most left of horizontal axis
    myThirdView.animate({
        rotate: 360,
        duration: 3000
    }).then(() => {
        myThirdView.rotate = 0;
    }).catch((e) => {
        console.log(e.message);
    });

    myForthView.originY = 1; // bottom of vertical axis
    myForthView.animate({
        rotate: 360,
        duration: 3000
    }).then(() => {
        myForthView.rotate = 0;
    }).catch((e) => {
        console.log(e.message);
    });

    myFifthView.originY = 0; // top of vertical axis
    myFifthView.animate({
        rotate: 360,
        duration: 3000
    }).then(() => {
        myFifthView.rotate = 0;
    }).catch((e) => {
        console.log(e.message);
    });
}
// << rotating-example-ts
