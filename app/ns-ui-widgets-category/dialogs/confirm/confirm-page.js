exports.onNavigatedTo = function (args) {
    /*
    // >> dialog-confirm-web
    confirm("Your message").then((result) => {
        console.log("Dialog result: ", result);
    });
    // << dialog-confirm-web
    */

   showConfirmDialog();
};

function showConfirmDialog() {
    // >> dialog-confirm
    const confirmOptions = {
        title: "Your title",
        message: "Your message",
        okButtonText: "Ok",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral"
    };
    confirm(confirmOptions)
        .then((result) => {
            // result can be true/false/undefined
            console.log(result);
        });
    // << dialog-confirm
}
exports.showConfirmDialog = showConfirmDialog;
