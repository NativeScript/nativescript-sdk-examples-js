const Color = require("tns-core-modules/color").Color;
const knownColors = require("tns-core-modules/color/known-colors");

exports.onNavigatedTo = function(args) {
    // >> color-compare
    const red = new Color("#FF0000");
    const isRed = red.equals(new Color("red"));
    console.log("Are both colors identical: ", isRed);
    // << color-compare
};

exports.onLabel1Loaded = function(args) {
    const label = args.object;

    // >> color-hex-full
    // Creates the red color
    const color = new Color("#FF0000");
    // << color-hex-full

    label.backgroundColor = color;
};

exports.onLabel2Loaded = function(args) {
    const label = args.object;

    // >> color-hex-short
    // Creates the color #FF8800
    const color = new Color("#F80");
    // << color-hex-short

    label.backgroundColor = color;
};

exports.onLabel3Loaded = function(args) {
    const label = args.object;

    // >> color-rgba
    // Creates the color with 100 alpha, 255 red, 100 green, 100 blue
    const color = new Color(100, 255, 100, 100);
    // << color-rgba

    label.backgroundColor = color;
};

exports.onLabel4Loaded = function(args) {
    const label = args.object;

    // >> color-rgba-full
    // Creates the color with 100 alpha, 100 red, 100 green, 100 blue
    const color = new Color(0x64646464);
    // << color-rgba-full

    label.backgroundColor = color;
};

exports.onLabel5Loaded = function(args) {
    const label = args.object;

    // >> color-color-name
    // Creates the color from thw known colors list
    const color = new Color(knownColors.Khaki);
    // << color-color-name

    label.backgroundColor = color;
};

