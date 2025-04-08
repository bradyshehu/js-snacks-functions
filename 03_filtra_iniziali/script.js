/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
console.table(names);

// Dichiara la funzione qui.

function searchByFirstLetter(list, letter) {
  const filteredItems = [];
  for (i = 0; i < list.length; i++) {
    const currentItem = list[i];
    if (currentItem[0] === letter) {
      filteredItems.push(currentItem);
    }
  }
  return filteredItems;
}

// Invoca la funzione qui e stampa il risultato in console

const letterToFilterBy = "A";
searchByFirstLetter(names, letterToFilterBy);
console.log(searchByFirstLetter(names, letterToFilterBy));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
