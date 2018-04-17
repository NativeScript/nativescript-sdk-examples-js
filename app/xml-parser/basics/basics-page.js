const Observable = require("tns-core-modules/data/observable").Observable;
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
// >> require-xml-module
const xmlModule = require("tns-core-modules/xml");
// << require-xml-module
const source = new ObservableArray();
// >> parser-event
const onEventCallback = (event) => {
    switch (event.eventType) {
        case xmlModule.ParserEventType.StartElement:
            if (event.attributes) {
                for (const attributeName in event.attributes) {
                    if (event.attributes.hasOwnProperty(attributeName)) {
                        source.push({
                            eventType:event.eventType,
                            elementName:event.elementName,
                            attributeName: attributeName,
                            result:event.attributes[attributeName],
                            significantText: null
                        });
                    }
                }
            } else {
                source.push({
                    eventType:event.eventType,
                    elementName:event.elementName,
                    attributeName:null,
                    result:null,
                    significantText:null
                });
            }
            break;
        case xmlModule.ParserEventType.EndElement:
            source.push({
                eventType:event.eventType,
                elementName:event.elementName,
                attributeName:null,
                result:null,
                significantText:null
            });
            break;

        case xmlModule.ParserEventType.Text:
            const significantText = event.data.trim();

            if (significantText !== "") {
                source.push({
                    eventType:event.eventType,
                    elementName:null,
                    attributeName: null,
                    result:null,
                    significantText:significantText
                });
            }
            break;
        default:
            break;
    }
};

const onErrorCallback = (error) => {
    console.log(`Error: ${error.message}`);
};
// << parser-event
// >> parse-method
const xmlParser = new xmlModule.XmlParser(onEventCallback, onErrorCallback);
// >> (hide)
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("source", source);

    page.bindingContext = vm;
}

function parseXMLButton(args) {
    source.splice(0);
// << (hide)
    xmlParser.parse(`
    <Document>
        <First attr1=\ "attribute1\" attr2=\ "attribute2\">I am first</First>
        <Second>I am second</Second>
        <Third>
            <FirstChild attr3=\ "attribute3\"></FirstChild>
        </Third>
    </Document>
    `);
    // << parse-method
}
exports.onNavigatingTo = onNavigatingTo;
exports.parseXMLButton = parseXMLButton;
