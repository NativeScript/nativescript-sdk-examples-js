"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animation_1 = require("tns-core-modules/ui/animation");
var view1, view2, view3, view4;
function onLoaded(args) {
    var page = args.object;
    view1 = page.getViewById("view1");
    view2 = page.getViewById("view2");
    view3 = page.getViewById("view3");
    view4 = page.getViewById("view4");
}
exports.onLoaded = onLoaded;
function animate() {
    var definitions = [];
    var definition1 = {
        target: view1,
        translate: {
            x: 200,
            y: 0
        },
        duration: 1000
    };
    definitions.push(definition1);
    var definition2 = {
        target: view2,
        translate: {
            x: 0,
            y: 200
        },
        duration: 1000
    };
    definitions.push(definition2);
    var definition3 = {
        target: view3,
        translate: {
            x: -200,
            y: 0
        },
        duration: 1000
    };
    definitions.push(definition3);
    var definition4 = {
        target: view4,
        translate: {
            x: 0,
            y: -200
        },
        duration: 1000
    };
    definitions.push(definition4);
    var animationSet = new animation_1.Animation(definitions);
    animationSet.play()
        .then(function () {
        console.log("Animation finished");
    }).catch(function (e) {
        console.log(e.message);
    });
}
exports.animate = animate;
function reset() {
    view1.translateX = 0;
    view1.translateY = 0;
    view2.translateX = 0;
    view2.translateY = 0;
    view3.translateX = 0;
    view3.translateY = 0;
    view4.translateX = 0;
    view4.translateY = 0;
}
exports.reset = reset;
