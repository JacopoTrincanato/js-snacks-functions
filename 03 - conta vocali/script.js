/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function findVowels(string) {
    const arrWord = word.split('');
    for (let i = 0; i < arrWord.length; i++) {
        const vowelsCounter = 0;
        const element = arrWord[i];
        console.log(element);
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        const char = vowels[i];
        
        if (arrWord.includes(char)) {
            return vowelsCounter ++
        }
    }
    return string
}


// Invoca la funzione qui e stampa il risultato in console
console.log(findVowels(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)