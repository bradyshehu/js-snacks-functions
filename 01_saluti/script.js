/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.

const greet = (name) => `Ciao ${name}`;

// Invoca la funzione qui e stampa il risultato in console

const userGreetMessage = greet(userName);
alert(userGreetMessage);
console.log(userGreetMessage);

//Risultato atteso se si passa 'Mario': // ciao Mario
