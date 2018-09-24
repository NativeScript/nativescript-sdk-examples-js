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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNpY3MtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUE0RDtBQUM1RCwyRUFBdUU7QUFHdkUsZ0RBQWtEO0FBRWxELElBQU0sTUFBTSxHQUFHLElBQUksa0NBQWUsRUFBRSxDQUFDO0FBRXJDLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBSztJQUMxQixNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN0QixLQUFLLFNBQVMsQ0FBQyxlQUFlLENBQUMsWUFBWTtZQUN2QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsR0FBRyxDQUFDLENBQUMsSUFBTSxhQUFhLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQzNDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakQsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDUixTQUFTLEVBQUMsS0FBSyxDQUFDLFNBQVM7NEJBQ3pCLFdBQVcsRUFBQyxLQUFLLENBQUMsV0FBVzs0QkFDN0IsYUFBYSxFQUFFLGFBQWE7NEJBQzVCLE1BQU0sRUFBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQzs0QkFDdEMsZUFBZSxFQUFFLElBQUk7eUJBQ3hCLENBQUMsQ0FBQztvQkFDUCxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDUixTQUFTLEVBQUMsS0FBSyxDQUFDLFNBQVM7b0JBQ3pCLFdBQVcsRUFBQyxLQUFLLENBQUMsV0FBVztvQkFDN0IsYUFBYSxFQUFDLElBQUk7b0JBQ2xCLE1BQU0sRUFBQyxJQUFJO29CQUNYLGVBQWUsRUFBQyxJQUFJO2lCQUN2QixDQUFDLENBQUM7WUFDUCxDQUFDO1lBQ0QsS0FBSyxDQUFDO1FBQ1YsS0FBSyxTQUFTLENBQUMsZUFBZSxDQUFDLFVBQVU7WUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDUixTQUFTLEVBQUMsS0FBSyxDQUFDLFNBQVM7Z0JBQ3pCLFdBQVcsRUFBQyxLQUFLLENBQUMsV0FBVztnQkFDN0IsYUFBYSxFQUFDLElBQUk7Z0JBQ2xCLE1BQU0sRUFBQyxJQUFJO2dCQUNYLGVBQWUsRUFBQyxJQUFJO2FBQ3ZCLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQztRQUVWLEtBQUssU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJO1lBQy9CLElBQU0sZUFBZSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFMUMsRUFBRSxDQUFDLENBQUMsZUFBZSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ1IsU0FBUyxFQUFDLEtBQUssQ0FBQyxTQUFTO29CQUN6QixXQUFXLEVBQUMsSUFBSTtvQkFDaEIsYUFBYSxFQUFFLElBQUk7b0JBQ25CLE1BQU0sRUFBQyxJQUFJO29CQUNYLGVBQWUsRUFBQyxlQUFlO2lCQUNsQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBQ0QsS0FBSyxDQUFDO1FBQ1Y7WUFDSSxLQUFLLENBQUM7SUFDZCxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUFLO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBVSxLQUFLLENBQUMsT0FBUyxDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDO0FBR0YsSUFBTSxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUU1RSx3QkFBK0IsSUFBSTtJQUMvQixJQUFNLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JDLElBQU0sRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBQzVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRXpCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzdCLENBQUM7QUFORCx3Q0FNQztBQUVELHdCQUErQixJQUFJO0lBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakIsU0FBUyxDQUFDLEtBQUssQ0FBQyw4UEFRZixDQUFDLENBQUM7QUFFUCxDQUFDO0FBYkQsd0NBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGVBcnJheX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG4vLyA+PiBpbXBvcnQteG1sLW1vZHVsZVxyXG5pbXBvcnQgKiBhcyB4bWxNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMveG1sXCI7XHJcbi8vIDw8IGltcG9ydC14bWwtbW9kdWxlXHJcbmNvbnN0IHNvdXJjZSA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcclxuLy8gPj4gcGFyc2VyLWV2ZW50LXRzXHJcbmNvbnN0IG9uRXZlbnRDYWxsYmFjayA9IChldmVudCkgPT4ge1xyXG4gICAgc3dpdGNoIChldmVudC5ldmVudFR5cGUpIHtcclxuICAgICAgICBjYXNlIHhtbE1vZHVsZS5QYXJzZXJFdmVudFR5cGUuU3RhcnRFbGVtZW50OlxyXG4gICAgICAgICAgICBpZiAoZXZlbnQuYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGVOYW1lIGluIGV2ZW50LmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGVOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2UucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFR5cGU6ZXZlbnQuZXZlbnRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudE5hbWU6ZXZlbnQuZWxlbWVudE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OmV2ZW50LmF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduaWZpY2FudFRleHQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc291cmNlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZTpldmVudC5ldmVudFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudE5hbWU6ZXZlbnQuZWxlbWVudE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTpudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDpudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25pZmljYW50VGV4dDpudWxsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIHhtbE1vZHVsZS5QYXJzZXJFdmVudFR5cGUuRW5kRWxlbWVudDpcclxuICAgICAgICAgICAgc291cmNlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZXZlbnRUeXBlOmV2ZW50LmV2ZW50VHlwZSxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnROYW1lOmV2ZW50LmVsZW1lbnROYW1lLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTpudWxsLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0Om51bGwsXHJcbiAgICAgICAgICAgICAgICBzaWduaWZpY2FudFRleHQ6bnVsbFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgeG1sTW9kdWxlLlBhcnNlckV2ZW50VHlwZS5UZXh0OlxyXG4gICAgICAgICAgICBjb25zdCBzaWduaWZpY2FudFRleHQgPSBldmVudC5kYXRhLnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzaWduaWZpY2FudFRleHQgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudFR5cGU6ZXZlbnQuZXZlbnRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnROYW1lOm51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6bnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBzaWduaWZpY2FudFRleHQ6c2lnbmlmaWNhbnRUZXh0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IG9uRXJyb3JDYWxsYmFjayA9IChlcnJvcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbn07XHJcbi8vIDw8IHBhcnNlci1ldmVudC10c1xyXG4vLyA+PiBwYXJzZS1tZXRob2QtdHNcclxuY29uc3QgeG1sUGFyc2VyID0gbmV3IHhtbE1vZHVsZS5YbWxQYXJzZXIob25FdmVudENhbGxiYWNrLCBvbkVycm9yQ2FsbGJhY2spO1xyXG4vLyA+PiAoaGlkZSlcclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcclxuICAgIGNvbnN0IHBhZ2U6UGFnZSA9IDxQYWdlPiBhcmdzLm9iamVjdDtcclxuICAgIGNvbnN0IHZtID0gbmV3IE9ic2VydmFibGUoKTtcclxuICAgIHZtLnNldChcInNvdXJjZVwiLCBzb3VyY2UpO1xyXG5cclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlWE1MQnV0dG9uKGFyZ3MpIHtcclxuICAgIHNvdXJjZS5zcGxpY2UoMCk7XHJcbi8vIDw8IChoaWRlKVxyXG4gICAgeG1sUGFyc2VyLnBhcnNlKGBcclxuICAgIDxEb2N1bWVudD5cclxuICAgICAgICA8Rmlyc3QgYXR0cjE9XFwgXCJhdHRyaWJ1dGUxXFxcIiBhdHRyMj1cXCBcImF0dHJpYnV0ZTJcXFwiPkkgYW0gZmlyc3Q8L0ZpcnN0PlxyXG4gICAgICAgIDxTZWNvbmQ+SSBhbSBzZWNvbmQ8L1NlY29uZD5cclxuICAgICAgICA8VGhpcmQ+XHJcbiAgICAgICAgICAgIDxGaXJzdENoaWxkIGF0dHIzPVxcIFwiYXR0cmlidXRlM1xcXCI+PC9GaXJzdENoaWxkPlxyXG4gICAgICAgIDwvVGhpcmQ+XHJcbiAgICA8L0RvY3VtZW50PlxyXG4gICAgYCk7XHJcbi8vIDw8IHBhcnNlLW1ldGhvZC10c1xyXG59XHJcbiJdfQ==