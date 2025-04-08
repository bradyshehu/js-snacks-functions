/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
console.table(names);

// Dichiara la funzione qui.

function initials(haystack) {
  const firstLetter = [];
  for (i = 0; i < haystack.length; i++) {
    const currentItem = haystack[i];
    firstLetter.push(currentItem[0]);
  }
  return firstLetter;
}

// Invoca la funzione qui e stampa il risultato in console
initials(names);
console.log(initials(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
