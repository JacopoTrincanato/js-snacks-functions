/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
/**
 * @param {string} string
*/
function findVowels(string) {
    const arrWord = string.split('');
    let vowelsCounter = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < arrWord.length; i++) {
        const element = arrWord[i];
        
        if (vowels.includes(element)) {
            vowelsCounter ++;
        }
    }
    return vowelsCounter
}


// Invoca la funzione qui e stampa il risultato in console
console.log(findVowels(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)