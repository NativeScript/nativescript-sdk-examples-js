// >> action-bar-basic-usage-sdk-js
import { Frame } from "@nativescript/core";

export function goBack() {
    Frame.topmost().goBack();
}
export function openSettings() {
    // implement the custom logic
}
// << action-bar-basic-usage-sdk-js
