/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function findVowels(string) {
    const vowelsCounter = 0;
    const arrWord = word.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < arrWord.length; i++) {
        const element = arrWord[i];
        console.log(element);
        
        if (arrWord.includes('a')) {
            vowelsCounter ++
        }
    }
    return vowelsCounter
}


// Invoca la funzione qui e stampa il risultato in console
console.log(findVowels(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)