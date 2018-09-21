// >> items-actionbar-js
const fromObject = require("tns-core-modules/data/observable").fromObject;

exports.onNavigatingTo = function(args) {
    const page = args.object;
    page.bindingContext = fromObject({
        title: "Items \n\nDemonstrating action items properties and position"
    });
};

exports.onShare = function() {
    console.log("share tap");
};

exports.onDelete = function() {
    console.log("delete tap");
};
// << items-actionbar-js
