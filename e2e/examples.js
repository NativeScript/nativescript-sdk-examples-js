class Example {
    constructor(baseExampleName, examplesIn) {
        this.baseExampleName = baseExampleName;
        this.examplesIn = examplesIn;
    }

    get baseExample() {
        return this.baseExampleName;
    }
    get examples() {
        return this.examplesIn;
    }
}

exports.examples = {
    actionBar: new Example("Action Bar", ["Basics", "Code-Behind"]),
    activityIndicator: new Example("ActivityIndicator", ["Basics", "Code-Behind", "Styling"]),
    animations: new Example("Animations", ["Animated Properties", "Animating Multiple Views", "Chained Animations", "Properties originX and originY"]),
    application: new Example("Application", ["Android Broadcast Receiver", "Application Events", "Check Platform"]),
    applicationSettings: new Example("Application Settings", ["Basics"]),
}