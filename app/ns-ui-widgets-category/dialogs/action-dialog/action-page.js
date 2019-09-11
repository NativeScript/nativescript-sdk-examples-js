// >> dialog-action
function showActionDialog() {  
    const actionOptions = {
        title: "Race selection",
        message: "Choose your race",
        cancelButtonText: "Cancel",
        actions: ["Human", "Elf", "Dwarf", "Orc", "Unicorn"],
        cancelable: true // Android only
    };

    action(actionOptions).then((result) => {
        console.log(result);
    }); 
}
exports.showActionDialog = showActionDialog;
// << dialog-action