

function showAlertDialog() {
    // >> dialog-alert
    const alertOptions = {
        title: "Race selection",
        message: "Race chosen: Unicorn",
        okButtonText: "OK",
        cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
    };

    alert(alertOptions).then(() => {
        console.log("Race chosen!");
    });
    // << dialog-alert
}
exports.showAlertDialog = showAlertDialog;
