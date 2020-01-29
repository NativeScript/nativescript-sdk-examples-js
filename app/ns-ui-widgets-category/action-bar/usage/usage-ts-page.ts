// >> action-bar-basic-usage-sdk-ts
import { Frame } from "tns-core-modules/ui/frame";

export function goBack() {
    Frame.topmost().goBack();
}
export function openSettings() {
    // implement the custom logic
}
// << action-bar-basic-usage-sdk-ts
