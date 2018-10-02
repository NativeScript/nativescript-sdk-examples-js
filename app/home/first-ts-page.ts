// >> frame-navigate-base-ts
import { getFrameById } from "tns-core-modules/ui/frame";
// >> (hide)
export function nav() {
// << (hide)
// Example using `getFrameById(frameId)` to get a `Frame` reference
// As an alternative, we could use `topmost()` method or `page.frame` property
const frame = getFrameById("firstFrame");
frame.navigate("second/second-page");
// >> (hide)
}
// << (hide)
// << frame-navigate-base-ts
