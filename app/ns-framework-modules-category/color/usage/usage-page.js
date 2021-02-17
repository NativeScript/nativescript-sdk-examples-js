// >> creating-colors-code-js
import { OrangeRed, isKnownName } from "@nativescript/core/color/known-colors";
import { Color } from "@nativescript/core";

function createColor() {
    // Using hex values to create color;
    const colorHex = new Color("#FF00CC");
    const colorShortHex = new Color("#F0C");

    // Creates the color with 100 alpha, 255 red, 100 green, 100 blue
    const colorARGB = new Color(100, 255, 100, 100);

    // Creates the color with 100 alpha, 100 red, 100 green, 100 blue
    const argb = (100 << 24) | (100 << 16) | (100 << 8) | 100; //eslint-disable-line no-bitwise
    const colorSingleARGB = new Color(argb);

    // Using string values to create colors
    const namedColor = "orangered";
    const isKnown = isKnownName(namedColor);
    if (isKnown) {
        const colorName = new Color(namedColor);
    }

    // Using supported known colors from tns-core-modules/color/known-colors
    const colorKnownName = new Color(OrangeRed);
}
// << creating-colors-code-js
