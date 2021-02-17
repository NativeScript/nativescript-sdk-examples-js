import { Observable, ObservableArray, Page} from "@nativescript/core";
// >> import-xml-module
import { ParserEventType, XmlParser } from "@nativescript/core";
// << import-xml-module
const source = new ObservableArray();
// >> parser-event-ts
const onEventCallback = (event) => {
    switch (event.eventType) {
        case ParserEventType.StartElement:
            if (event.attributes) {
                for (const attributeName in event.attributes) {
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
            } else {
                source.push({
                    eventType: event.eventType,
                    elementName: event.elementName,
                    attributeName: null,
                    result: null,
                    significantText: null
                });
            }
            break;
        case ParserEventType.EndElement:
            source.push({
                eventType: event.eventType,
                elementName: event.elementName,
                attributeName: null,
                result: null,
                significantText: null
            });
            break;

        case ParserEventType.Text:
            const significantText = event.data.trim();

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

const onErrorCallback = (error) => {
    console.log(`Error: ${error.message}`);
};
// << parser-event-ts
// >> parse-method-ts
const xmlParser = new XmlParser(onEventCallback, onErrorCallback);
// >> (hide)
export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();
    vm.set("source", source);

    page.bindingContext = vm;
}

export function parseXMLButton(args) {
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
    // << parse-method-ts
}
