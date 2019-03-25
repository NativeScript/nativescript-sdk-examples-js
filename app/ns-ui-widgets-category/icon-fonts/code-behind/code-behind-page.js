// >> icon-font-code-behind-code
const Observable = require("tns-core-modules/data/observable").Observable;
function pageLoaded(args) {
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
exports.pageLoaded = pageLoaded;
// << icon-font-code-behind-code
