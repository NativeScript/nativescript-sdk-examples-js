// >> action-bar-basic-usage-sdk-ts
import {topmost} from "tns-core-modules/ui/frame";

export function goBack() {
    topmost().goBack();
}
export function openSettings() {
    // implement the custom logic
}
// << action-bar-basic-usage-sdk-ts
