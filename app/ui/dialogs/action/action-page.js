exports.onNavigatedTo = function (args) {
    /*
    // >> dialog-action-web
    action("Your message", "Cancel", ["Option1", "Option2"]).then((result) => {
        console.log("Dialog result: " + result);
        if(result === "Options1") {
            // Do action1
        } else if(result === "Option2") {
            // Do action2
        }
    });
    // << dialog-action-web
    */

    showActionDialog();
};

function showActionDialog() {
    // >> dialog-action
    const actionOptions = {
        title: "Your Title",
        message: "Your message",
        cancelButtonText: "Cancel",
        actions: ["Option1", "Option2"],
        cancelable: true // Android only
    };

    action(actionOptions).then((result) => {
        console.log("Dialog result: ", result);
        if (result === "Options1") {
            // Do action 1
        } else if (result === "Option2") {
            // Do action 2
        }
    });
    // << dialog-action
}
exports.showActionDialog = showActionDialog;
