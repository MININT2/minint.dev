var eyes = ["● ●", "✧ ✧", "ㅇ ㅇ", "◕ ◕", "◓ ◓", "> <", ". .", "｡ ｡", "- -", "✪ ✪", "◔ ◔", "⦿ ⦿", "⦾ ⦾"];
var mouths = ["ㅅ", "×", "_", "ꞈ", "∇", "｡", "ᆽ", "ꞈ", "︿"];
var bodies = ["   ", "( )", "/ᐠ ᐟ\\\\"];
var emote = ["  ", "❀", "ฅ", "*", "==", "✿"];
var filler = [" ", "ᵐᵉᵒʷˎˊ˗", "🆄🆆🆄"];
var hardcoded = ["(●ㅅ● )", "( ✧×✧)", "(ㅇㅅㅇ❀)", "(ฅ^･ㅅ･^)", "(◕ㅅ◕ )", "( ◓-◓)", "(* >ㅅ<)",
    "(   ∵   )", "=^._.^= ∫", "(=´∇｀=)", "/ᐠ｡ꞈ｡ᐟ\\\\", "✧/ᐠ-ꞈ-ᐟ\\\\", "/ᐠ.ﮧ.ᐟ\\\\", "/ᐠ. ｡.ᐟ\\\\ᵐᵉᵒʷˎˊ˗",
    "/ᐠ-ᆽ-ᐟ \\\\", "/ᐠ ̥  ̮  ̥ ᐟ\\\\ฅ", "(₌◕ᆽ◕₌)", "(₌●ᆽ●₌)", "(=✪ᆽ✪=)", "ᨐ", "✧-✧"
];
//pull hardcoded minty's for now until mintyconstructor is finished
var random = Math.floor(Math.random() * hardcoded.length);
var titleElement = document.getElementById('title');
if (titleElement)
    titleElement.innerHTML = hardcoded[random] || " ";
