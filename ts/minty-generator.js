'use strict';
var hexDigits = '0123456789abcdef'.split('');
function parse(ch) {
    var code = ch.codePointAt(0);
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
    var result = '';
    for (var i = start; i < end; i++) {
        result += "\\u".concat(parse(input[i]));
    }
    return result;
}
var eyes = ["● ●", "✧ ✧", "ㅇ ㅇ", "◕ ◕", "◓ ◓", "> <", ". .", "｡ ｡", "- -", "✪ ✪", "◔ ◔", "⦿ ⦿", "⦾ ⦾"];
var mouths = ["ㅅ", "×", "_", "ꞈ", "∇", "｡", "ᆽ", "ꞈ", "︿"];
var bodies = ["   ", "( )", "/ᐠ ᐟ\\"];
var emote = ["  ", "❀", "ฅ", "*", "==", "✿"];
var filler = [" ", "ᵐᵉᵒʷˎˊ˗", "🆄🆆🆄"];
var hardcoded = [
    "/ᐠ●ㅅ● ᐟ\\", "/ᐠ✧ㅅ✧ ᐟ\\", "/ᐠㅇㅅㅇ ᐟ\\", "/ᐠ◕ㅅ◕ ᐟ\\", "/ᐠ◓ㅅ◓ ᐟ\\", "/ᐠ>ㅅ< ᐟ\\", "/ᐠ.ㅅ. ᐟ\\", "/ᐠ-ㅅ- ᐟ\\", "/ᐠ✪ㅅ✪ ᐟ\\", "/ᐠ◔ㅅ◔ ᐟ\\", "/ᐠ⦿ㅅ⦿ ᐟ\\", "/ᐠ⦾ㅅ⦾ ᐟ\\",
    "/ᐠ ●ㅅ●ᐟ\\", "/ᐠ ✧ㅅ✧ᐟ\\", "/ᐠ ㅇㅅㅇᐟ\\", "/ᐠ ◕ㅅ◕ᐟ\\", "/ᐠ ◓ㅅ◓ᐟ\\", "/ᐠ >ㅅ<ᐟ\\", "/ᐠ .ㅅ.ᐟ\\", "/ᐠ -ㅅ-ᐟ\\", "/ᐠ ✪ㅅ✪ᐟ\\", "/ᐠ ◔ㅅ◔ᐟ\\", "/ᐠ ⦿ㅅ⦿ᐟ\\", "/ᐠ ⦾ㅅ⦾ᐟ\\",
    "/ᐠ●ꞈ● ᐟ\\", "/ᐠ✧ꞈ✧ ᐟ\\", "/ᐠㅇꞈㅇ ᐟ\\", "/ᐠ◕ꞈ◕ ᐟ\\", "/ᐠ◓ꞈ◓ ᐟ\\", "/ᐠ>ꞈ< ᐟ\\", "/ᐠ.ꞈ. ᐟ\\", "/ᐠ-ꞈ- ᐟ\\", "/ᐠ✪ꞈ✪ ᐟ\\", "/ᐠ◔ꞈ◔ ᐟ\\", "/ᐠ⦿ꞈ⦿ ᐟ\\", "/ᐠ⦾ꞈ⦾ ᐟ\\",
    "/ᐠ ●ꞈ●ᐟ\\", "/ᐠ ✧ꞈ✧ᐟ\\", "/ᐠ ㅇꞈㅇᐟ\\", "/ᐠ ◕ꞈ◕ᐟ\\", "/ᐠ ◓ꞈ◓ᐟ\\", "/ᐠ >ꞈ<ᐟ\\", "/ᐠ .ꞈ.ᐟ\\", "/ᐠ -ꞈ-ᐟ\\", "/ᐠ ✪ꞈ✪ᐟ\\", "/ᐠ ◔ꞈ◔ᐟ\\", "/ᐠ ⦿ꞈ⦿ᐟ\\", "/ᐠ ⦾ꞈ⦾ᐟ\\",
    "/ᐠ●｡● ᐟ\\", "/ᐠ✧｡✧ ᐟ\\", "/ᐠㅇ｡ㅇ ᐟ\\", "/ᐠ◕｡◕ ᐟ\\", "/ᐠ◓｡◓ ᐟ\\", "/ᐠ>｡< ᐟ\\", "/ᐠ.｡. ᐟ\\", "/ᐠ-｡- ᐟ\\", "/ᐠ✪｡✪ ᐟ\\", "/ᐠ◔｡◔ ᐟ\\", "/ᐠ⦿｡⦿ ᐟ\\", "/ᐠ⦾｡⦾ ᐟ\\",
    "/ᐠ●×●ᐟ\\", "/ᐠ✧×✧ᐟ\\", "/ᐠㅇ×ㅇᐟ\\", "/ᐠ◕×◕ᐟ\\", "/ᐠ◓×◓ᐟ\\", "/ᐠ>×<ᐟ\\", "/ᐠ.×.ᐟ\\", "/ᐠ-×-ᐟ\\", "/ᐠ✪×✪ᐟ\\", "/ᐠ◔×◔ᐟ\\", "/ᐠ⦿×⦿ᐟ\\", "/ᐠ⦾×⦾ᐟ\\",
    "( ✧×✧)",
    "(ㅇㅅㅇ❀)",
    "(ฅ^･ㅅ･^)",
    "(◕ㅅ◕ )",
    "( ◓-◓)",
    "(* >ㅅ<)",
    "(   ∵   )",
    "=^._.^= ∫",
    "(=´∇｀=)",
    "/ᐠ｡ꞈ｡ᐟ\\",
    "✧/ᐠ-ꞈ-ᐟ\\",
    "/ᐠ.ﮧ.ᐟ\\",
    "/ᐠ. ｡.ᐟ\\ᵐᵉᵒʷˎˊ˗",
    "/ᐠ-ᆽ-ᐟ\\",
    "/ᐠ ̥  ̮  ̥ ᐟ\\ฅ",
    "(₌◕ᆽ◕₌)",
    "(₌●ᆽ●₌)",
    "(=✪ᆽ✪=)",
    "ᨐ",
    "✧-✧"
];
//pull hardcoded minty's for now until mintyconstructor is finished
var random = Math.floor(Math.random() * hardcoded.length);
var titleElement = document.getElementById('title');
var dna = hardcoded[random];
var rna = escapeUnicode(dna, 0, dna.length);
if (titleElement)
    document.title = rna.replace("\\\\", "\\");
