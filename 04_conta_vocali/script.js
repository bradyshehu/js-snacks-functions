/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

function isVowel(char) {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    return true;
  }
}

function countVowels(word) {
  const fixedWord = word.toLowerCase();
  let numberOfVowels = 0;
  for (i = 0; i < word.length; i++) {
    const currentLetter = fixedWord[i];
    if (isVowel(currentLetter)) {
      numberOfVowels += 1;
    }
  }
  return numberOfVowels;
}

// Invoca la funzione qui e stampa il risultato in console

const totalVowels = countVowels(word);
console.log(totalVowels);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
