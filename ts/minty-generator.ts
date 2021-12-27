import escapeUnicode from '../js/escape-unicode';
let eyes: string[] = ["● ●", "✧ ✧", "ㅇ ㅇ", "◕ ◕", "◓ ◓", "> <", ". .", "｡ ｡", "- -", "✪ ✪", "◔ ◔", "⦿ ⦿", "⦾ ⦾"];
let mouths: string[] = ["ㅅ", "×", "_", "ꞈ", "∇", "｡", "ᆽ", "ꞈ", "︿"];
let bodies: string[] = ["   ", "( )", "/ᐠ ᐟ\\"];
let emote: string[] = ["  ", "❀", "ฅ", "*", "==", "✿"];
let filler: string[] = [" ", "ᵐᵉᵒʷˎˊ˗", "🆄🆆🆄"];
let hardcoded: string[] = [
"(●ㅅ● )",          "n",
"( ✧×✧)",          "n", 
"(ㅇㅅㅇ❀)",        "n",
"(ฅ^･ㅅ･^)",         "n",
"(◕ㅅ◕ )",         "n",
"( ◓-◓)",          "n",
"(* >ㅅ<)",         "n",
"(   ∵   )",        "n",
"=^._.^= ∫",        "n",
"(=´∇｀=)",         "n",
"/ᐠ｡ꞈ｡ᐟ\\",          "n",
"✧/ᐠ-ꞈ-ᐟ\\",        "n",
"/ᐠ.ﮧ.ᐟ\\",          "n",
"/ᐠ. ｡.ᐟ\\ᵐᵉᵒʷˎˊ˗",  "n",
"/ᐠ-ᆽ-ᐟ\\",        "n",
"/ᐠ ̥  ̮  ̥ ᐟ\\ฅ",      "n",
"(₌◕ᆽ◕₌)",        "n",
"(₌●ᆽ●₌)",         "n",
"(=✪ᆽ✪=)",        "n",
"ᨐ",               "n",
"✧-✧",             "n"
];
//pull hardcoded minty's for now until mintyconstructor is finished
let random = Math.floor(Math.random() * (hardcoded.length / 2));
let titleElement = document.getElementById('title');
const dna = hardcoded[0 + (random * 2)];
if (titleElement) document.title = escapeUnicode(dna);
//minty-generator is supposed to pull strings to make a cat
//and set the page title to a newly generated cat periodically
//yes, i do want cute cats to adorn your browser bar