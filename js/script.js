document.getElementById("printer").innerHTML = "<h1>Campo Minato</h1>";
// +++++ FATTO +++++
// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.

// +++++ DA FARE +++++
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var bombNum = [];
var userNum = [];

while (bombNum.length < 16) {
    var randomNum = getRandom(1, 100)
    if (!bombNum.includes(randomNum)) {
        bombNum.push(randomNum);
    }
}

while (userNum.length < 100 - 16) {
    var insertNum = askNumBetween(1, 100);
    if (!userNum.includes(insertNum)) {
        userNum.push(insertNum);
    } else if (bombNum.includes(insertNum)) {

    }
}

console.log(bombNum);
console.log(userNum);


// Funzioni
function getRandom (x, y) {
    return Math.floor(Math.random() * (y - x + 1) + x);
};

function askNumBetween(x, y) {
    return parseInt(prompt("Inserisci un numero da " + x  + " a " + y));
};