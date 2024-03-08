// TASK 1 - Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1 - Genero un numero random per il giocatore da 1 a 6
let playerNumber = Math.floor(Math.random() * 6) + 1;
console.log('player-number' , playerNumber);
// 2 - Genero un numero random per il computer da 1 a 6
let computerNumber = Math.floor(Math.random() * 6) + 1;
console.log('computer-number' , computerNumber);
// 3 - Confronto i due numeri
//       - Dichiaro vincitore chi ha il numero più alto
let winner = 'Il vincitore è il ';
let theWinnerIs;
if (playerNumber > computerNumber){
    theWinnerIs = `${winner}giocatore!!!`;
}else if(computerNumber > playerNumber){
    theWinnerIs = `${winner}computer!!!`;
}else if (computerNumber === playerNumber){
    theWinnerIs = `Pari!!!Nessuno vince!!!`;
}
console.log('the-winner-is' , theWinnerIs);


