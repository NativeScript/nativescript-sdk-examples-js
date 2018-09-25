import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
// >> icon-font-code-behind-code-ts
export function onPageLoaded(args) {
    const page: Page = <Page>args.object;
    const viewModel = new Observable();
    const glyphs = [];
    let charCode = 0xe903;
    for (; charCode <= 0xeaea; charCode++) {
        const glyph = new Observable();
        glyph.set("icon", String.fromCharCode(charCode));
        glyph.set("code", charCode.toString(16));
        glyphs.push(glyph);
    }
    viewModel.set("glyphs", glyphs);
    page.bindingContext = viewModel;
}
// << icon-font-code-behind-code-ts
