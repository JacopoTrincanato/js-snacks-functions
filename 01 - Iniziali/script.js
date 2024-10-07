/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function findArrNames(array) {
    for (i = 0; i < array.length; i++) {
        const element = array[i];
        //console.log(element);
        const firstLetter = element[0];
        //console.log(firstLetter);
        const firstLetterArr = [];
        firstLetterArr.push(firstLetter);
        return firstLetterArr
        
        
    }
}


// Invoca la funzione qui e stampa il risultato in console
console.log(findArrNames(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]