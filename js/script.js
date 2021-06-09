document.getElementById("printer").innerHTML = "<h1>Campo Minato</h1>";

var bombNum = [];
var userNum = [];
var level;
do {
    level = prompt("A quale livello vuoi giocare?\n\n" + "0: facile\n" + "1: medio\n" + "2: difficile");
}
while (level < 0 || level > 2);

switch(level) {
    case "0":
      playGame(100);
      break;
    case "1":
      playGame(80);
      break;
    case "2":
      playGame(60);
    break;
}  

function getBombs (x) {
    while (bombNum.length < 16) {
        var randomNum = getRandom(1, x);
        if (!bombNum.includes(randomNum)) {
            bombNum.push(randomNum);
        }
    }
}

function getRandom(x, y) {
    return Math.floor(Math.random() * (y - x + 1) + x);
};

function askNumBetween(x, y) {
    return parseInt(prompt("Inserisci un numero da " + x  + " a " + y));
};

function playGame(x) {

    getBombs(x);
    
    while (userNum.length < x - 16 && !bombNum.includes(insertNum)) {
        var insertNum = askNumBetween(1, x);
        if (!userNum.includes(insertNum) && !insertNum < 1 && insertNum <= x) {
            userNum.push(insertNum);
        } else {
            if (userNum.length==0) {
                alert("Inserisci un valore tra 1 e " + x + " diverso da quelli già selezionati (non hai ancora selezionato nessun numero)");
            } else {
                alert("Inserisci un valore tra 1 e " + x + " diverso da quelli già selezionati (finora hai selezionato i seguenti numeri: " + userNum + ")");
            }
        }
    }
    
    if (userNum.lenght == x - 16) {
        document.getElementById("printer").classList.add("safe");
        document.getElementById("printer").innerHTML = "VITTORIA! Hai superato il campo minato indenne!";
    } else {
        document.getElementById("printer").classList.add("explode");
        document.getElementById("printer").innerHTML = "BOOM! Sei esploso dopo " + userNum.length + " tentativi";
    }
}