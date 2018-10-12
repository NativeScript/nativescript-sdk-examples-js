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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNpY3MtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUE4RDtBQUM5RCwyRUFBeUU7QUFHekUsZ0RBQWtEO0FBRWxELElBQU0sTUFBTSxHQUFHLElBQUksa0NBQWUsRUFBRSxDQUFDO0FBRXJDLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBSztJQUMxQixNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN0QixLQUFLLFNBQVMsQ0FBQyxlQUFlLENBQUMsWUFBWTtZQUN2QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsR0FBRyxDQUFDLENBQUMsSUFBTSxhQUFhLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQzNDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakQsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDUixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7NEJBQzFCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVzs0QkFDOUIsYUFBYSxFQUFFLGFBQWE7NEJBQzVCLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQzs0QkFDdkMsZUFBZSxFQUFFLElBQUk7eUJBQ3hCLENBQUMsQ0FBQztvQkFDUCxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDUixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7b0JBQzFCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztvQkFDOUIsYUFBYSxFQUFFLElBQUk7b0JBQ25CLE1BQU0sRUFBRSxJQUFJO29CQUNaLGVBQWUsRUFBRSxJQUFJO2lCQUN4QixDQUFDLENBQUM7WUFDUCxDQUFDO1lBQ0QsS0FBSyxDQUFDO1FBQ1YsS0FBSyxTQUFTLENBQUMsZUFBZSxDQUFDLFVBQVU7WUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDUixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7Z0JBQzFCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztnQkFDOUIsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLE1BQU0sRUFBRSxJQUFJO2dCQUNaLGVBQWUsRUFBRSxJQUFJO2FBQ3hCLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQztRQUVWLEtBQUssU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJO1lBQy9CLElBQU0sZUFBZSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFMUMsRUFBRSxDQUFDLENBQUMsZUFBZSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ1IsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO29CQUMxQixXQUFXLEVBQUUsSUFBSTtvQkFDakIsYUFBYSxFQUFFLElBQUk7b0JBQ25CLE1BQU0sRUFBRSxJQUFJO29CQUNaLGVBQWUsRUFBRSxlQUFlO2lCQUNuQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBQ0QsS0FBSyxDQUFDO1FBQ1Y7WUFDSSxLQUFLLENBQUM7SUFDZCxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUFLO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBVSxLQUFLLENBQUMsT0FBUyxDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDO0FBR0YsSUFBTSxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUU1RSx3QkFBK0IsSUFBSTtJQUMvQixJQUFNLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JDLElBQU0sRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBQzVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRXpCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzdCLENBQUM7QUFORCx3Q0FNQztBQUVELHdCQUErQixJQUFJO0lBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakIsU0FBUyxDQUFDLEtBQUssQ0FBQyw4UEFRZixDQUFDLENBQUM7QUFFUCxDQUFDO0FBYkQsd0NBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG4vLyA+PiBpbXBvcnQteG1sLW1vZHVsZVxuaW1wb3J0ICogYXMgeG1sTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3htbFwiO1xuLy8gPDwgaW1wb3J0LXhtbC1tb2R1bGVcbmNvbnN0IHNvdXJjZSA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcbi8vID4+IHBhcnNlci1ldmVudC10c1xuY29uc3Qgb25FdmVudENhbGxiYWNrID0gKGV2ZW50KSA9PiB7XG4gICAgc3dpdGNoIChldmVudC5ldmVudFR5cGUpIHtcbiAgICAgICAgY2FzZSB4bWxNb2R1bGUuUGFyc2VyRXZlbnRUeXBlLlN0YXJ0RWxlbWVudDpcbiAgICAgICAgICAgIGlmIChldmVudC5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGVOYW1lIGluIGV2ZW50LmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFR5cGU6IGV2ZW50LmV2ZW50VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50TmFtZTogZXZlbnQuZWxlbWVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGV2ZW50LmF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUZXh0OiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc291cmNlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBldmVudFR5cGU6IGV2ZW50LmV2ZW50VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudE5hbWU6IGV2ZW50LmVsZW1lbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25pZmljYW50VGV4dDogbnVsbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgeG1sTW9kdWxlLlBhcnNlckV2ZW50VHlwZS5FbmRFbGVtZW50OlxuICAgICAgICAgICAgc291cmNlLnB1c2goe1xuICAgICAgICAgICAgICAgIGV2ZW50VHlwZTogZXZlbnQuZXZlbnRUeXBlLFxuICAgICAgICAgICAgICAgIGVsZW1lbnROYW1lOiBldmVudC5lbGVtZW50TmFtZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogbnVsbCxcbiAgICAgICAgICAgICAgICBzaWduaWZpY2FudFRleHQ6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSB4bWxNb2R1bGUuUGFyc2VyRXZlbnRUeXBlLlRleHQ6XG4gICAgICAgICAgICBjb25zdCBzaWduaWZpY2FudFRleHQgPSBldmVudC5kYXRhLnRyaW0oKTtcblxuICAgICAgICAgICAgaWYgKHNpZ25pZmljYW50VGV4dCAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHNvdXJjZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlOiBldmVudC5ldmVudFR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnROYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25pZmljYW50VGV4dDogc2lnbmlmaWNhbnRUZXh0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn07XG5cbmNvbnN0IG9uRXJyb3JDYWxsYmFjayA9IChlcnJvcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJvci5tZXNzYWdlfWApO1xufTtcbi8vIDw8IHBhcnNlci1ldmVudC10c1xuLy8gPj4gcGFyc2UtbWV0aG9kLXRzXG5jb25zdCB4bWxQYXJzZXIgPSBuZXcgeG1sTW9kdWxlLlhtbFBhcnNlcihvbkV2ZW50Q2FsbGJhY2ssIG9uRXJyb3JDYWxsYmFjayk7XG4vLyA+PiAoaGlkZSlcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XG4gICAgY29uc3QgcGFnZTogUGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZtID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICB2bS5zZXQoXCJzb3VyY2VcIiwgc291cmNlKTtcblxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlWE1MQnV0dG9uKGFyZ3MpIHtcbiAgICBzb3VyY2Uuc3BsaWNlKDApO1xuICAgIC8vIDw8IChoaWRlKVxuICAgIHhtbFBhcnNlci5wYXJzZShgXG4gICAgPERvY3VtZW50PlxuICAgICAgICA8Rmlyc3QgYXR0cjE9XFwgXCJhdHRyaWJ1dGUxXFxcIiBhdHRyMj1cXCBcImF0dHJpYnV0ZTJcXFwiPkkgYW0gZmlyc3Q8L0ZpcnN0PlxuICAgICAgICA8U2Vjb25kPkkgYW0gc2Vjb25kPC9TZWNvbmQ+XG4gICAgICAgIDxUaGlyZD5cbiAgICAgICAgICAgIDxGaXJzdENoaWxkIGF0dHIzPVxcIFwiYXR0cmlidXRlM1xcXCI+PC9GaXJzdENoaWxkPlxuICAgICAgICA8L1RoaXJkPlxuICAgIDwvRG9jdW1lbnQ+XG4gICAgYCk7XG4gICAgLy8gPDwgcGFyc2UtbWV0aG9kLXRzXG59XG4iXX0=