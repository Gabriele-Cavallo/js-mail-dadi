// TASK 2 - Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!

// 1 - Chiedo all'utente la sua mail
let userEmail = prompt('Ciao, dimmi la tua mail!!! Scrivi "nome.gmail.com" e premi invio.');
// 2 - Scorro la lista delle email per accertarmi o meno della presenza della email dell'utente
const confirmedEmail = ['gianni@gmail.com', 'ermenegildo@gmail.com', 'alberto@gmail.com', 'gabriele@gmail.com', 'matteo@gmail.com', 'sebastiano@gmail.com', 'mario@gmail.com', 'luca@gmail.com', 'franco@gmail.com', 'pippo@gmail.com'];
let foundEmail = false;
for (let i = 0; i < confirmedEmail.length; i++) {
    let thisEmail = confirmedEmail[i];
    if (userEmail === thisEmail){
        foundEmail = true;
    }
}
// 3 - Se la mail è presente nella lista stampo il messaggio : Puoi accedere al servizio
//        - altrimenti stampo il messaggio : Non puoi accedere al servizio
let userMessage;
if ( foundEmail === true){
    userMessage = 'Puoi accedere al servizio';
} else {
    userMessage = 'Non puoi accedere al servizio';
}

alert(userMessage);
