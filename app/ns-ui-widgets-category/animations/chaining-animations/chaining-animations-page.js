let myView;

function onLoaded(args) {
    const page = args.object;
    myView = page.getViewById("lbl");
    // >> chaining-animations
    const duration = 300;
    myView.animate({
        opacity: 0,
        duration: duration
    }).then(() => myView.animate({
            opacity: 1,
            duration: duration
        })).then(() => myView.animate({
            translate: {
                x: 200,
                y: 200
            },
            duration: duration
        })).then(() => myView.animate({
            translate: {
                x: 0,
                y: 0
            },
            duration: duration
        })).then(() => myView.animate({
            scale: {
                x: 5,
                y: 5
            },
            duration: duration
        })).then(() => myView.animate({
            scale: {
                x: 1,
                y: 1
            },
            duration: duration
        }))
        .then(() => myView.animate({
            rotate: 180,
            duration: duration
        }))
        .then(() => myView.animate({
            rotate: 0,
            duration: duration
        })).then(() => {
            console.log("Animation finished");
        }).catch((e) => {
            console.log(e.message);
        });
    // << chaining-animations
}
exports.onLoaded = onLoaded;
