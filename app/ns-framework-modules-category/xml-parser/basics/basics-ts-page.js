"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var xmlModule = require("tns-core-modules/xml");
var source = new observable_array_1.ObservableArray();
var onEventCallback = function (event) {
    switch (event.eventType) {
        case xmlModule.ParserEventType.StartElement:
            if (event.attributes) {
                for (var attributeName in event.attributes) {
                    if (event.attributes.hasOwnProperty(attributeName)) {
                        source.push({
                            eventType: event.eventType,
                            elementName: event.elementName,
                            attributeName: attributeName,
                            result: event.attributes[attributeName],
                            significantText: null
                        });
                    }
                }
            }
            else {
                source.push({
                    eventType: event.eventType,
                    elementName: event.elementName,
                    attributeName: null,
                    result: null,
                    significantText: null
                });
            }
            break;
        case xmlModule.ParserEventType.EndElement:
            source.push({
                eventType: event.eventType,
                elementName: event.elementName,
                attributeName: null,
                result: null,
                significantText: null
            });
            break;
        case xmlModule.ParserEventType.Text:
            var significantText = event.data.trim();
            if (significantText !== "") {
                source.push({
                    eventType: event.eventType,
                    elementName: null,
                    attributeName: null,
                    result: null,
                    significantText: significantText
                });
            }
            break;
        default:
            break;
    }
};
var onErrorCallback = function (error) {
    console.log("Error: " + error.message);
};
var xmlParser = new xmlModule.XmlParser(onEventCallback, onErrorCallback);
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("source", source);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function parseXMLButton(args) {
    source.splice(0);
    xmlParser.parse("\n    <Document>\n        <First attr1= \"attribute1\" attr2= \"attribute2\">I am first</First>\n        <Second>I am second</Second>\n        <Third>\n            <FirstChild attr3= \"attribute3\"></FirstChild>\n        </Third>\n    </Document>\n    ");
}
exports.parseXMLButton = parseXMLButton;
