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
let eyes: string[] = ["● ●", "✧ ✧", "ㅇ ㅇ", "◕ ◕", "◓ ◓", "> <", ". .", "｡ ｡", "- -", "✪ ✪", "◔ ◔", "⦿ ⦿", "⦾ ⦾"];
let mouths: string[] = ["ㅅ", "×", "_", "ꞈ", "∇", "｡", "ᆽ", "ꞈ", "︿"];
let bodies: string[] = ["   ", "( )", "/ᐠ ᐟ\\"];
let emote: string[] = ["  ", "❀", "ฅ", "*", "==", "✿"];
let filler: string[] = [" ", "ᵐᵉᵒʷˎˊ˗", "🆄🆆🆄"];
let hardcoded: string[] = [
"/ᐠ●ㅅ● ᐟ\\","/ᐠ✧ㅅ✧ ᐟ\\","/ᐠㅇㅅㅇ ᐟ\\","/ᐠ◕ㅅ◕ ᐟ\\","/ᐠ◓ㅅ◓ ᐟ\\","/ᐠ>ㅅ< ᐟ\\","/ᐠ.ㅅ. ᐟ\\","/ᐠ-ㅅ- ᐟ\\","/ᐠ✪ㅅ✪ ᐟ\\","/ᐠ◔ㅅ◔ ᐟ\\","/ᐠ⦿ㅅ⦿ ᐟ\\","/ᐠ⦾ㅅ⦾ ᐟ\\",
"/ᐠ ●ㅅ●ᐟ\\","/ᐠ ✧ㅅ✧ᐟ\\","/ᐠ ㅇㅅㅇᐟ\\","/ᐠ ◕ㅅ◕ᐟ\\","/ᐠ ◓ㅅ◓ᐟ\\","/ᐠ >ㅅ<ᐟ\\","/ᐠ .ㅅ.ᐟ\\","/ᐠ -ㅅ-ᐟ\\","/ᐠ ✪ㅅ✪ᐟ\\","/ᐠ ◔ㅅ◔ᐟ\\","/ᐠ ⦿ㅅ⦿ᐟ\\","/ᐠ ⦾ㅅ⦾ᐟ\\",
"/ᐠ●ꞈ● ᐟ\\","/ᐠ✧ꞈ✧ ᐟ\\","/ᐠㅇꞈㅇ ᐟ\\","/ᐠ◕ꞈ◕ ᐟ\\","/ᐠ◓ꞈ◓ ᐟ\\","/ᐠ>ꞈ< ᐟ\\","/ᐠ.ꞈ. ᐟ\\","/ᐠ-ꞈ- ᐟ\\","/ᐠ✪ꞈ✪ ᐟ\\","/ᐠ◔ꞈ◔ ᐟ\\","/ᐠ⦿ꞈ⦿ ᐟ\\","/ᐠ⦾ꞈ⦾ ᐟ\\",
"/ᐠ ●ꞈ●ᐟ\\","/ᐠ ✧ꞈ✧ᐟ\\","/ᐠ ㅇꞈㅇᐟ\\","/ᐠ ◕ꞈ◕ᐟ\\","/ᐠ ◓ꞈ◓ᐟ\\","/ᐠ >ꞈ<ᐟ\\","/ᐠ .ꞈ.ᐟ\\","/ᐠ -ꞈ-ᐟ\\","/ᐠ ✪ꞈ✪ᐟ\\","/ᐠ ◔ꞈ◔ᐟ\\","/ᐠ ⦿ꞈ⦿ᐟ\\","/ᐠ ⦾ꞈ⦾ᐟ\\",

"/ᐠ●｡● ᐟ\\","/ᐠ✧｡✧ ᐟ\\","/ᐠㅇ｡ㅇ ᐟ\\","/ᐠ◕｡◕ ᐟ\\","/ᐠ◓｡◓ ᐟ\\","/ᐠ>｡< ᐟ\\","/ᐠ.｡. ᐟ\\","/ᐠ-｡- ᐟ\\","/ᐠ✪｡✪ ᐟ\\","/ᐠ◔｡◔ ᐟ\\","/ᐠ⦿｡⦿ ᐟ\\","/ᐠ⦾｡⦾ ᐟ\\",
"/ᐠ●×●ᐟ\\","/ᐠ✧×✧ᐟ\\","/ᐠㅇ×ㅇᐟ\\","/ᐠ◕×◕ᐟ\\","/ᐠ◓×◓ᐟ\\","/ᐠ>×<ᐟ\\","/ᐠ.×.ᐟ\\","/ᐠ-×-ᐟ\\","/ᐠ✪×✪ᐟ\\","/ᐠ◔×◔ᐟ\\","/ᐠ⦿×⦿ᐟ\\","/ᐠ⦾×⦾ᐟ\\",
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
let random = Math.floor(Math.random() * hardcoded.length);
let titleElement = document.getElementById('title');
let dna = hardcoded[random];
let rna = escapeUnicode(dna, 0, dna.length);
if (titleElement) document.title = rna.replace("\\\\", "\\");
//minty-generator is supposed to pull strings to make a cat
//and set the page title to a newly generated cat periodically
//yes, i do want cute cats to adorn your browser bar