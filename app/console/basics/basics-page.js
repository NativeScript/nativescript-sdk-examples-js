exports.onNavigatedTo = function (args) {
    // >> console-common
    console.log("NativeScript Playground!");
    console.log({ objProp: "I am Object!" });
    console.info("NativeScript Rocks!");
    console.warn("Low memory");
    console.error("Uncaught Application Exception");
    // << console-common

    // >> console-time
    // Begins counting a time span for a given name (key).
    console.time("LoadTime");
    // Ends a previously started time span through the time method.
    console.timeEnd("LoadTime");
    // << console-time

    // >> console-trace
    // Prints the current stack trace in the console.
    console.trace();
    // << console-trace
};
