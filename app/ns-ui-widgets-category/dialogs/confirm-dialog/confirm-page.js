// >> dialog-confirm
function showConfirmDialog() {
    
    const confirmOptions = {
        title: "Race selection",
        message: "Are you sure you want to be a Unicorn?",
        okButtonText: "Yes",
        cancelButtonText: "No",
        neutralButtonText: "Cancel"
    };
    confirm(confirmOptions)
        .then((result) => {
            console.log(result);
        });
    
}
exports.showConfirmDialog = showConfirmDialog;
// << dialog-confirm