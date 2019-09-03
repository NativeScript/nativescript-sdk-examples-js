// >> items-actionbar-js
const fromObject = require("tns-core-modules/data/observable").fromObject;

exports.onShare = function() {
    console.log("share tap");
};

exports.onDelete = function() {
    console.log("delete tap");
};
// << items-actionbar-js
