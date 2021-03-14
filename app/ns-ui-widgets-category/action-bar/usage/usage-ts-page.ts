// >> action-bar-basic-usage-sdk-ts
import { Frame } from "@nativescript/core";

export function goBack() {
    Frame.topmost().goBack();
}
export function openSettings() {
    // implement the custom logic
}
// << action-bar-basic-usage-sdk-ts
