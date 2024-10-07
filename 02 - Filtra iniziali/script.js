/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function sameInitialLetter(array, letter) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const firstLetter = element[0];
        if (firstLetter === letter){
            newArray.push();
        }
    }

    return newArray
}


// Invoca la funzione qui e stampa il risultato in console
console.log(sameInitialLetter(names, 'A'));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]