import { Frame } from "@nativescript/core";

export function goBack() {
    Frame.topmost().goBack();
}
