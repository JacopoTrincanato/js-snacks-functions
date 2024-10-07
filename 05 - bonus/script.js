/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name1 = 'Mario';


// Dichiara la funzione qui.
function hello(name) {
    return (`ciao ${name}`)
}

// Invoca la funzione qui e stampa il risultato in console
console.log(hello(name1));



//Risultato atteso se si passa 'Mario': // ciao Mario


/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
let saluto = '';


// Dichiara la funzione qui.
function helloBonus(name) {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let currentTime = (`${hours}:${minutes}:${seconds}`);
    

    if (currentTime <= 13) {
        saluto = ('buongiorno');
         
    }else if(currentTime > 13 && currentTime <= 17) {
        saluto = ('buon pomeriggio');
    
    }else {
        saluto = ('buonasera');

    }

    return `${saluto} ${name}`
}

//arrow function
const helloBonus2 = (greeting, name) => {
    return `${greeting} ${name}`
}

//arrow function semplificata

const helloBonus3 = (greeting, name) => `${greeting} ${name}`;

// Invoca la funzione qui e stampa il risultato in console
console.log(helloBonus(name));

//invocazione arrow function
console.log(helloBonus2('buonasera', 'Mario'));

//invocazione arrow function semplificata
console.log(helloBonus3('buonasera', 'Mario'));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.