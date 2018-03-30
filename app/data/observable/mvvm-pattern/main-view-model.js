// >> mvvm-view-model
const Observable = require("tns-core-modules/data/observable").Observable;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return `${counter} taps left`;
    }
}

function createViewModel() {
    const viewModel = new Observable();

    viewModel.set("counter", 42);
    viewModel.set("message", getMessage(viewModel.counter));

    viewModel.onTap = function () {
        this.set("message", getMessage(--this.counter));
    };

    return viewModel;
}
exports.createViewModel = createViewModel;
// << mvvm-view-model
