"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onNavigatedTo(args) {
    var jsonObj = {
        objProp: "I am Object!", objProp2: {
            objProp3: "I am Object!",
            objProp4: "I am Object!"
        },
        objProp5: {
            objProp6: "I am Object!",
            objProp7: "I am Object!"
        },
        objProp8: "I am Object!",
        objProp9: ["item", "item"]
    };
    console.log("NativeScript Playground!");
    console.log({ objProp: "I am Object!" });
    console.info("NativeScript Rocks!");
    console.warn("Low memory");
    console.error("Uncaught Application Exception");
    console.dir(jsonObj);
    console.time("LoadTime");
    console.timeEnd("LoadTime");
    console.trace();
}
exports.onNavigatedTo = onNavigatedTo;
