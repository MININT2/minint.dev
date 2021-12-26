let eyes: string[] = ["● ●", "✧ ✧", "ㅇ ㅇ", "◕ ◕", "◓ ◓", "> <", ". .", "｡ ｡", "- -", "✪ ✪", "◔ ◔", "⦿ ⦿", "⦾ ⦾"];
let mouths: string[] = ["ㅅ", "×", "_", "ꞈ", "∇", "｡", "ᆽ", "ꞈ", "︿"];
let bodies: string[] = ["   ", "( )", "/ᐠ ᐟ\\"];
let emote: string[] = ["  ", "❀", "ฅ", "*", "==", "✿"];
let filler: string[] = [" ", "ᵐᵉᵒʷˎˊ˗", "🆄🆆🆄"];
let hardcoded: string[] = ["(●ㅅ● )", "( ✧×✧)", "(ㅇㅅㅇ❀)", "(ฅ^･ㅅ･^)", "(◕ㅅ◕ )", "( ◓-◓)", "(* >ㅅ<)", 
                "(   ∵   )", "=^._.^= ∫", "(=´∇｀=)", "/ᐠ｡ꞈ｡ᐟ\\", "✧/ᐠ-ꞈ-ᐟ\\", "/ᐠ.ﮧ.ᐟ\\", "/ᐠ. ｡.ᐟ\\ᵐᵉᵒʷˎˊ˗", 
                "/ᐠ-ᆽ-ᐟ \\", "/ᐠ ̥  ̮  ̥ ᐟ\\ฅ", "(₌◕ᆽ◕₌)", "(₌●ᆽ●₌)", "(=✪ᆽ✪=)", "ᨐ", "✧-✧"
];

//pull hardcoded minty's for now until mintyconstructor is finished
let random = Math.floor(Math.random() * hardcoded.length);
let titleElement = document.getElementById('title');
if (titleElement) titleElement.innerHTML = hardcoded[random] || " ";

//minty-generator is supposed to pull strings to make a cat
//and set the page title to a newly generated cat periodically
//yes, i do want cute cats to adorn your browser bar