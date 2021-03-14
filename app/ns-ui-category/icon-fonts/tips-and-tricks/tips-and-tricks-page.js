// >> icon-font-code-behind-code
import { Observable } from "@nativescript/core";
export function pageLoaded(args) {
    const page = args.object;
    const viewModel = new Observable();

    const glyphs = [];
    for (let charCode = 0xe903; charCode <= 0xeaea; charCode++) {
        const glyph = new Observable();
        glyph.set("icon", String.fromCharCode(charCode));
        glyph.set("code", charCode.toString(16));
        glyphs.push(glyph);
    }
    viewModel.set("glyphs", glyphs);

    page.bindingContext = viewModel;
}
// << icon-font-code-behind-code
