"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onLoaded(args) {
    var page = args.object;
    var myView = page.getViewById("lbl");
    var duration = 300;
    myView.animate({
        opacity: 0,
        duration: duration
    }).then(function () {
        return myView.animate({
            opacity: 1,
            duration: duration
        });
    }).then(function () {
        return myView.animate({
            translate: {
                x: 200,
                y: 200
            },
            duration: duration
        });
    }).then(function () {
        return myView.animate({
            translate: {
                x: 0,
                y: 0
            },
            duration: duration
        });
    }).then(function () {
        return myView.animate({
            scale: {
                x: 5,
                y: 5
            },
            duration: duration
        });
    }).then(function () {
        return myView.animate({
            scale: {
                x: 1,
                y: 1
            },
            duration: duration
        });
    }).then(function () {
        return myView.animate({
            rotate: 180,
            duration: duration
        });
    }).then(function () {
        return myView.animate({
            rotate: 0,
            duration: duration
        });
    }).then(function () {
        console.log("Animation finished");
    }).catch(function (e) {
        console.log(e.message);
    });
}
exports.onLoaded = onLoaded;
