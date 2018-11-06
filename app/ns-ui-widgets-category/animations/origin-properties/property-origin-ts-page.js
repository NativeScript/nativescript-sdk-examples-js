"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myFirstView, mySecondView, myThirdView, myForthView, myFifthView;
function onLoaded(args) {
    var page = args.object;
    myFirstView = page.getViewById("myFirstView");
    mySecondView = page.getViewById("mySecondView");
    myThirdView = page.getViewById("myThirdView");
    myForthView = page.getViewById("myForthView");
    myFifthView = page.getViewById("myFifthView");
}
exports.onLoaded = onLoaded;
function animate() {
    myFirstView.animate({
        rotate: 360,
        duration: 3000
    }).then(function () {
        myFirstView.rotate = 0;
    }).catch(function (e) {
        console.log(e.message);
    });
    mySecondView.originX = 1;
    mySecondView.animate({
        rotate: 360,
        duration: 3000
    }).then(function () {
        mySecondView.rotate = 0;
    }).catch(function (e) {
        console.log(e.message);
    });
    myThirdView.originX = 0;
    myThirdView.animate({
        rotate: 360,
        duration: 3000
    }).then(function () {
        myThirdView.rotate = 0;
    }).catch(function (e) {
        console.log(e.message);
    });
    myForthView.originY = 1;
    myForthView.animate({
        rotate: 360,
        duration: 3000
    }).then(function () {
        myForthView.rotate = 0;
    }).catch(function (e) {
        console.log(e.message);
    });
    myFifthView.originY = 0;
    myFifthView.animate({
        rotate: 360,
        duration: 3000
    }).then(function () {
        myFifthView.rotate = 0;
    }).catch(function (e) {
        console.log(e.message);
    });
}
exports.animate = animate;
