const Observable = require("data/observable").Observable;
// >> icon-font-code-behind-code
function onPageLoaded(args) {
    const page = args.object;
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
exports.onPageLoaded = onPageLoaded;
// << icon-font-code-behind-code
