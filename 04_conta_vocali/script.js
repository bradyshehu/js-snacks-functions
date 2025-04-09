/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

function countVowels(word) {
  const fixedWord = word.toLowerCase();
  let numberOfVowels = 0;
  for (i = 0; i < word.length; i++) {
    const currentLetter = fixedWord[i];
    if (
      currentLetter === "a" ||
      currentLetter === "e" ||
      currentLetter === "i" ||
      currentLetter === "o" ||
      currentLetter === "u"
    ) {
      numberOfVowels += 1;
    }
  }
  return numberOfVowels;
}

// Invoca la funzione qui e stampa il risultato in console

const totalVowels = countVowels(word);
console.log(totalVowels);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
