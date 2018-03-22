exports.onNavigatedTo = function (args) {
    /*
    // >> dialog-alert-web
    alert("Your message").then(() => {
        console.log("Dialog closed!");
    });
    // << dialog-alert-web
    */

    showAlertDialog();
};

function showAlertDialog() {
    // >> dialog-alert
    const alertOptions = {
        title: "Your Title",
        message: "Your message",
        okButtonText: "OK",
        cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
    };

    alert(alertOptions).then(() => {
        console.log("Dialog closed!");
    });
    // << dialog-alert
}
exports.showAlertDialog = showAlertDialog;
