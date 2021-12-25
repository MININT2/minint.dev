const eyes = ["● ●", "✧ ✧", "ㅇ ㅇ", "◕ ◕", "◓ ◓", "> <", ". .", "｡ ｡", "- -", "✪ ✪", "◔ ◔", "⦿ ⦿", "⦾ ⦾"];
const mouths = ["ㅅ", "×", "_", "ꞈ", "∇", "｡", "ᆽ", "ꞈ", "︿"];
const bodies = ["   ", "( )", "/ᐠ ᐟ\\\\"];
const emote = ["  ", "❀", "ฅ", "*", "==", "✿"];
const filler = [" ", "ᵐᵉᵒʷˎˊ˗", "🆄🆆🆄"];
const hardcoded = ["(●ㅅ● )", "( ✧×✧)", "(ㅇㅅㅇ❀)", "(ฅ^･ㅅ･^)", "(◕ㅅ◕ )", "( ◓-◓)", "(* >ㅅ<)", 
                "(   ∵   )", "=^._.^= ∫", "(=´∇｀=)", "/ᐠ｡ꞈ｡ᐟ\\\\", "✧/ᐠ-ꞈ-ᐟ\\\\", "/ᐠ.ﮧ.ᐟ\\\\", "/ᐠ. ｡.ᐟ\\\\ᵐᵉᵒʷˎˊ˗", 
                "/ᐠ-ᆽ-ᐟ \\\\", "/ᐠ ̥  ̮  ̥ ᐟ\\\\ฅ", "(₌◕ᆽ◕₌)", "(₌●ᆽ●₌)", "(=✪ᆽ✪=)", "ᨐ", "✧-✧"
];

//pull hardcoded minty's for now until mintyconstructor is finished
let random = Math.floor(Math.random() * hardcoded.length);
let titleElement = document.getElementById('title');
if (titleElement) titleElement.innerHTML = hardcoded[random] || " ";