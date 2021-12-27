let eyes: string[] = ["● ●", "✧ ✧", "ㅇ ㅇ", "◕ ◕", "◓ ◓", "> <", ". .", "｡ ｡", "- -", "✪ ✪", "◔ ◔", "⦿ ⦿", "⦾ ⦾"];
let mouths: string[] = ["ㅅ", "×", "_", "ꞈ", "∇", "｡", "ᆽ", "ꞈ", "︿"];
let bodies: string[] = ["   ", "( )", "/ᐠ ᐟ\\"];
let emote: string[] = ["  ", "❀", "ฅ", "*", "==", "✿"];
let filler: string[] = [" ", "ᵐᵉᵒʷˎˊ˗", "🆄🆆🆄"];
let hardcoded: string[] = [
"(●ㅅ● )",          "\u0028\u25cf\u3145\u25cf\u0020\u0029",
"( ✧×✧)",          "\u0028\u0020\u2727\u00d7\u2727\u0029", 
"(ㅇㅅㅇ❀)",        "\u0028\u3147\u3145\u3147\u2740\u0029",
"(ฅ^･ㅅ･^)",         "\u0028\u0e05\u005e\uff65\u3145\uff65\u005e\u0029",
"(◕ㅅ◕ )",         "\u0028\u25d5\u3145\u25d5\u0020\u0029",
"( ◓-◓)",          "\u0028\u0020\u25d3\u002d\u25d3\u0029",
"(* >ㅅ<)",         "\u0028\u002a\u0020\u003e\u3145\u003c\u0029",
"(   ∵   )",        "\u0028\u0020\u0020\u0020\u2235\u0020\u0020\u0020\u0029",
"=^._.^= ∫",        "\u003d\u005e\u002e\u005f\u002e\u005e\u003d\u0020\u222b",
"(=´∇｀=)",         "\u0028\u003d\u00b4\u2207\uff40\u003d\u0029",
"/ᐠ｡ꞈ｡ᐟ\\",          "\u002f\u1420\uff61\ua788\uff61\u141f\u005c",
"✧/ᐠ-ꞈ-ᐟ\\",        "\u2727\u002f\u1420\u002d\ua788\u002d\u141f\u005c",
"/ᐠ.ﮧ.ᐟ\\",          "\u002f\u1420\u002e\ufba7\u002e\u141f\u005c",
"/ᐠ. ｡.ᐟ\\ᵐᵉᵒʷˎˊ˗",  "\u002f\u1420\u002e\u0020\uff61\u002e\u141f\u005c\u1d50\u1d49\u1d52\u02b7\u02ce\u02ca\u02d7",
"/ᐠ-ᆽ-ᐟ\\",        "\u002f\u1420\u002d\u11bd\u002d\u141f\u005c",
"/ᐠ ̥  ̮  ̥ ᐟ\\ฅ",      "\u002f\u1420\u0020\u0325\u0020\u0020\u032e\u0020\u0020\u0325\u0020\u141f\u005c\u0e05",
"(₌◕ᆽ◕₌)",        "\u0028\u208c\u25d5\u11bd\u25d5\u208c\u0029",
"(₌●ᆽ●₌)",         "\u0028\u208c\u25cf\u11bd\u25cf\u208c\u0029",
"(=✪ᆽ✪=)",        "\u0028\u003d\u272a\u11bd\u272a\u003d\u0029",
"ᨐ",               "\u1a10",
"✧-✧",             "\u2727\u002d\u2727"
];
//pull hardcoded minty's for now until mintyconstructor is finished
let random = Math.floor(Math.random() * (hardcoded.length / 2));
let titleElement = document.getElementById('title');
const dna = hardcoded[1 + (random * 2)];
if (titleElement) document.title = dna;
//minty-generator is supposed to pull strings to make a cat
//and set the page title to a newly generated cat periodically
//yes, i do want cute cats to adorn your browser bar