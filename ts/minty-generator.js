'use strict';
const hexDigits = '0123456789abcdef'.split('');
function parse(ch) {
    const code = ch.codePointAt(0);
    return toHexDigit((code >> 12) & 15) +
        toHexDigit((code >> 8) & 15) +
        toHexDigit((code >> 4) & 15) +
        toHexDigit(code & 15);
}
function toHexDigit(nibble) {
    return hexDigits[nibble & 15];
}
function escapeUnicode(input, start, end) {
    if (input == null) {
        return input;
    }
    start = start != null && start >= 0 ? start : 0;
    end = end != null && end >= 0 ? Math.min(end, input.length) : input.length;
    let result = '';
    for (let i = start; i < end; i++) {
        result += `\\u${parse(input[i])}`;
    }
    return result;
}
let eyes = ["● ●", "✧ ✧", "ㅇ ㅇ", "◕ ◕", "◓ ◓", "> <", ". .", "｡ ｡", "- -", "✪ ✪", "◔ ◔", "⦿ ⦿", "⦾ ⦾"];
let mouths = ["ㅅ", "×", "_", "ꞈ", "∇", "｡", "ᆽ", "ꞈ", "︿"];
let bodies = ["   ", "( )", "/ᐠ ᐟ\\"];
let emote = ["  ", "❀", "ฅ", "*", "==", "✿"];
let filler = [" ", "ᵐᵉᵒʷˎˊ˗", "🆄🆆🆄"];
let hardcoded = [
    "/ᐠ●ㅅ● ᐟ\\", "\u002f\u1420\u25cf\u3145\u25cf\u0020\u141f\u005c", "/ᐠ✧ㅅ✧ ᐟ\\", "\u002f\u1420\u2727\u3145\u2727\u0020\u141f\u005c",
    "/ᐠㅇㅅㅇ ᐟ\\", "\u002f\u1420\u3147\u3145\u3147\u0020\u141f\u005c", "/ᐠ>ㅅ< ᐟ\\", "\u002f\u1420\u003e\u3145\u003c\u0020\u141f\u005c",
    "/ᐠ.ㅅ. ᐟ\\", "\u002f\u1420\u002e\u3145\u002e\u0020\u141f\u005c", "/ᐠ-ㅅ- ᐟ\\", "\u002f\u1420\u002d\u3145\u002d\u0020\u141f\u005c",
    "/ᐠ ●ㅅ●ᐟ\\", "\u002f\u1420\u0020\u25cf\u3145\u25cf\u141f\u005c", "/ᐠ ✧ㅅ✧ᐟ\\", "\u002f\u1420\u0020\u2727\u3145\u2727\u141f\u005c",
    "/ᐠ ㅇㅅㅇᐟ\\", "\u002f\u1420\u0020\u3147\u3145\u3147\u141f\u005c", "/ᐠ >ㅅ<ᐟ\\", "\u002f\u1420\u0020\u003e\u3145\u003c\u141f\u005c",
    "/ᐠ .ㅅ.ᐟ\\", "\u002f\u1420\u0020\u002e\u3145\u002e\u141f\u005c", "/ᐠ -ㅅ-ᐟ\\", "\u002f\u1420\u0020\u002d\u3145\u002d\u141f\u005c",
    "/ᐠ✧ㅅ✧❀ᐟ\\", "\u002f\u1420\u2727\u3145\u2727\u2740\u141f\u005c", "/ᐠㅇㅅㅇ❀ᐟ\\", "\u002f\u1420\u3147\u3145\u3147\u2740\u141f\u005c",
    "/ᐠ.ㅅ.❀ᐟ\\", "\u002f\u1420\u002e\u3145\u002e\u2740\u141f\u005c", "/ᐠ-ㅅ-❀ᐟ\\", "\u002f\u1420\u002d\u3145\u002d\u2740\u141f\u005c",
    "/ᐠ❀✧ㅅ✧ᐟ\\", "\u002f\u1420\u2740\u2727\u3145\u2727\u141f\u005c", "/ᐠ❀ㅇㅅㅇᐟ\\", "\u002f\u1420\u2740\u3147\u3145\u3147\u141f\u005c",
    "/ᐠ❀.ㅅ.ᐟ\\", "\u002f\u1420\u2740\u002e\u3145\u002e\u141f\u005c", "/ᐠ❀-ㅅ-ᐟ\\", "\u002f\u1420\u2740\u002d\u3145\u002d\u141f\u005c",
    "/ᐠ●ꞈ● ᐟ\\", "\u002f\u1420\u25cf\ua788\u25cf\u0020\u141f\u005c", "/ᐠ✧ꞈ✧ ᐟ\\", "\u002f\u1420\u2727\ua788\u2727\u0020\u141f\u005c",
    "/ᐠㅇꞈㅇ ᐟ\\", "\u002f\u1420\u3147\ua788\u3147\u0020\u141f\u005c", "/ᐠ>ꞈ< ᐟ\\", "\u002f\u1420\u003e\ua788\u003c\u0020\u141f\u005c",
    "/ᐠ.ꞈ. ᐟ\\", "\u002f\u1420\u002e\ua788\u002e\u0020\u141f\u005c", "/ᐠ-ꞈ- ᐟ\\", "\u002f\u1420\u002d\ua788\u002d\u0020\u141f\u005c",
    "/ᐠ ●ꞈ●ᐟ\\", "\u002f\u1420\u0020\u25cf\ua788\u25cf\u141f\u005c", "/ᐠ ✧ꞈ✧ᐟ\\", "\u002f\u1420\u0020\u2727\ua788\u2727\u141f\u005c",
    "/ᐠ ㅇꞈㅇᐟ\\", "\u002f\u1420\u0020\u3147\ua788\u3147\u141f\u005c", "/ᐠ >ꞈ<ᐟ\\", "\u002f\u1420\u0020\u003e\ua788\u003c\u141f\u005c",
    "/ᐠ .ꞈ.ᐟ\\", "\u002f\u1420\u0020\u002e\ua788\u002e\u141f\u005c", "/ᐠ -ꞈ-ᐟ\\", "\u002f\u1420\u0020\u002d\ua788\u002d\u141f\u005c",
    "/ᐠ●｡● ᐟ\\", "\u002f\u1420\u25cf\uff61\u25cf\u0020\u141f\u005c", "/ᐠㅇ｡ㅇ ᐟ\\", "\u002f\u1420\u3147\uff61\u3147\u0020\u141f\u005c",
    "/ᐠ.｡. ᐟ\\", "\u002f\u1420\u002e\uff61\u002e\u0020\u141f\u005c", "/ᐠ-｡- ᐟ\\", "\u002f\u1420\u002d\uff61\u002d\u0020\u141f\u005c",
    "/ᐠ●×●ᐟ\\", "\u002f\u1420\u25cf\u00d7\u25cf\u141f\u005c", "/ᐠ>×<ᐟ\\", "\u002f\u1420\u003e\u00d7\u003c\u141f\u005c",
    "/ᐠ-×-ᐟ\\", "\u002f\u1420\u002d\u00d7\u002d\u141f\u005c", "✧/ᐠ●ꞈ● ᐟ\\", "\u2727\u002f\u1420\u25cf\ua788\u25cf\u0020\u141f\u005c",
    "✧/ᐠ✪ꞈ✪ ᐟ\\", "\u2727\u002f\u1420\u272a\ua788\u272a\u0020\u141f\u005c", "✧ฅ/ᐠ✪ꞈ✪ ᐟ\\", "\u2727\u0e05\u002f\u1420\u272a\ua788\u272a\u0020\u141f\u005c",
    "/ᐠ. ｡.ᐟ\\ᵐᵉᵒʷˎˊ˗", "\u002f\u1420\u002e\u0020\uff61\u002e\u141f\u005c\u1d50\u1d49\u1d52\u02b7\u02ce\u02ca\u02d7",
    "/ᐠ. ꞈ.ᐟ\\ᵐᵉᵒʷˎˊ˗", "\u002f\u1420\u002e\u0020\ua788\u002e\u141f\u005c\u1d50\u1d49\u1d52\u02b7\u02ce\u02ca\u02d7",
    "/ᐠ ∵ ᐟ\\", "\u002f\u1420\u0020\u2235\u0020\u141f\u005c", "=^._.^= ∫", "\u003d\u005e\u002e\u005f\u002e\u005e\u003d\u0020\u222b",
    "/ᐠ｡ꞈ｡ᐟ\\", "\u002f\u1420\uff61\ua788\uff61\u141f\u005c", "✧/ᐠ-ꞈ-ᐟ\\", "\u2727\u002f\u1420\u002d\ua788\u002d\u141f\u005c",
    "/ᐠ.ﮧ.ᐟ\\", "\u002f\u1420\u002e\ufba7\u002e\u141f\u005c", "/ᐠ-ᆽ-ᐟ\\", "\u002f\u1420\u002d\u11bd\u002d\u141f\u005c",
    "/ᐠ ̥  ̮  ̥ ᐟ\\ฅ", "\u002f\u1420\u0020\u0325\u0020\u0020\u032e\u0020\u0020\u0325\u0020\u141f\u005c\u0e05",
    "₌◕ᆽ◕₌", "\u208c\u25d5\u11bd\u25d5\u208c", "₌●ᆽ●₌", "\u208c\u25cf\u11bd\u25cf\u208c", "=✪ᆽ✪=", "\u003d\u272a\u11bd\u272a\u003d", "ᨐ", "\u1a10",
];
//pull hardcoded minty's for now until mintyconstructor is finished
let random = Math.floor(Math.random() * (hardcoded.length / 2));
let titleElement = document.getElementById('title');
if (titleElement)
    document.title = hardcoded[(1 + (random * 2))];
//# sourceMappingURL=minty-generator.js.map